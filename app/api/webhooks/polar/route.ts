// src/app/api/webhook/polar/route.ts
import { Webhooks } from '@polar-sh/nextjs';
import {
  addOrUpdateCredits,
  deductCreditsForRefundedPayment,
  findPlanByProductOrPriceIds,
  findUserByClerkOrEmail,
  insertPaymentRecord,
  paymentExists,
  updatePaymentStatus,
} from '@/app/service/supabase/billing/polarBillingService';
import { extractPolarOrderProductId } from '@/lib/polar/orderPayload';
import { creditsFromUsdCents } from '@/lib/billing/plans';


/**
 * Full Polar webhook handler tuned to the payloads you logged.
 * Handles: checkout.created, checkout.updated, order.created, order.paid, order.updated, customer.updated
 *
 * IMPORTANT:
 * - Ensure POLAR_WEBHOOK_SECRET is set in server env (Vercel Server scope).
 * - This file runs server-side only and uses supabaseAdmin via the service functions.
 */
const webhook = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET!,

  onPayload: async (payload) => {
    // Generic logger for debugging: payload.type + a short summary
    try {
      const t = payload?.type || 'unknown';
      console.log('[polar:webhook] onPayload', { type: t });
    } catch (err) {
      console.error('[polar:webhook] onPayload error', err);
    }
    return;
  },

  onCheckoutCreated: async (checkout) => {
    try {
      console.log('[polar:webhook] checkout.created', { id: checkout?.data.id, productId: checkout?.data.productId, amount: checkout?.data.amount });
      // Optional: persist checkout for audit purposes
      // await recordCheckout(checkout);
      return;
    } catch (err) {
      console.error('[polar:webhook] onCheckoutCreated error', err);
      throw err;
    }
  },

  onCheckoutUpdated: async (checkout) => {
    try {
      console.log('[polar:webhook] checkout.updated', { id: checkout?.data.id, status: checkout?.data.status });

      // You can handle transitions: open -> confirmed -> succeeded
      // If succeeded, more info (customerEmail/customerId/paymentProcessorMetadata) is available
      if (checkout?.data.status === 'succeeded') {
        // optional: log or store checkout success
        console.log('[polar:webhook] checkout succeeded', { id: checkout?.data.id, customerEmail: checkout.data.customerEmail });
      }

      return;
    } catch (err) {
      console.error('[polar:webhook] onCheckoutUpdated error', err);
      throw err;
    }
  },

  onOrderCreated: async (orderEvent) => {
    try {
      const data = orderEvent?.data ?? orderEvent;
      console.log('[polar:webhook] order.created', { id: data?.id, status: data?.status, paid: data?.paid });

      // We intentionally do not grant credits on order.created (wait for order.paid).
      // Optionally record order for audit.
      return;
    } catch (err) {
      console.error('[polar:webhook] onOrderCreated error', err);
      throw err;
    }
  },

  onOrderPaid: async (orderEvent) => {
    try {
      const data = orderEvent?.data ?? orderEvent;
      console.log('[polar:webhook] order.paid received', {
        id: data?.id,
        status: data?.status,
        metadata: data?.metadata,
      });

      const providerPaymentId = data?.id;
      if (!providerPaymentId) {
        throw new Error('[polar:webhook] order.paid missing order id (non-retryable payload)');
      }

      // ✅ Idempotency
      if (await paymentExists(providerPaymentId)) {
        console.log('[polar:webhook] order.paid already processed', providerPaymentId);
        return;
      }

      const metadata = data?.metadata ?? data?.customer?.metadata ?? {};
      const clerkIdFromMeta = metadata?.clerk_id ?? null;
      const customerEmail = data?.customer?.email ?? metadata?.email ?? null;

      const userResolve = await findUserByClerkOrEmail(clerkIdFromMeta, customerEmail);

      if (!userResolve) {
        throw new Error(
          `[polar:webhook] user not found (retryable): clerkId=${String(clerkIdFromMeta)} email=${String(customerEmail)}`
        );
      }

      if (!clerkIdFromMeta && customerEmail) {
        console.warn(
          '[polar:webhook] resolved user by email only; include clerk_id in checkout metadata for reliable attribution'
        );
      }

      const { userId, clerkId } = userResolve;

      const amountCents = data?.totalAmount ?? data?.netAmount ?? 0;

      let creditsToGrant = 0;
      let planId: string | null = null;

      if (metadata?.billing_type === 'custom') {
        // 1 USD = 100 credits ⇒ credits = order total in USD cents
        creditsToGrant = creditsFromUsdCents(amountCents);
        if (amountCents > 0 && creditsToGrant === 0) {
          console.warn('[polar:webhook] custom billing: paid amount maps to 0 credits (sub-cent?)', {
            amountCents,
          });
        }
        console.log('[polar:webhook] custom billing', { amountCents, creditsToGrant });
      } else {
        const extracted = extractPolarOrderProductId(data);
        const productId =
          extracted ??
          (data?.productId != null ? String(data.productId) : null) ??
          (data?.product?.id != null ? String(data.product.id) : null);

        const metadataPlanId = metadata?.plan_id ?? metadata?.planId ?? null;

        const plan = await findPlanByProductOrPriceIds(
          productId ?? undefined,
          metadataPlanId ?? undefined
        );

        if (!plan) {
          throw new Error(
            `[polar:webhook] no matching plan (retryable): productId=${String(productId)} planId=${String(metadataPlanId)}`
          );
        }

        planId = plan.id;
        creditsToGrant = plan.credits ?? 0;
      }

      await insertPaymentRecord({
        providerPaymentId,
        userId,
        clerkId,
        planId,
        provider: 'polar',
        amount: amountCents,
        creditsPurchased: creditsToGrant,
        metadata,
      });

      if (creditsToGrant > 0) {
        await addOrUpdateCredits(userId, planId, creditsToGrant);
      } else {
        console.warn('[polar:webhook] order.paid: 0 credits; payment row recorded only', {
          providerPaymentId,
          planId,
          billingType: metadata?.billing_type,
        });
      }

      console.log('[polar:webhook] order.paid processed', {
        providerPaymentId,
        userId,
        creditsToGrant,
        planId,
      });
    } catch (err) {
      console.error('[polar:webhook] onOrderPaid fatal error', err);
      throw err;
    }
  },


  onOrderUpdated: async (orderEvent) => {
    try {
      const data = orderEvent?.data ?? orderEvent;
      console.log('[polar:webhook] order.updated', { id: data?.id, status: data?.status });

      const providerPaymentId = data?.id;
      if (!providerPaymentId) {
        console.warn('[polar:webhook] order.updated missing id');
        return;
      }

      const status = (data?.status || '').toString().toLowerCase();
      const failureStatuses = ['failed', 'cancelled', 'canceled', 'refunded', 'charge_failed', 'voided'];

      if (failureStatuses.some((s) => status.includes(s))) {
        const updated = await updatePaymentStatus(providerPaymentId, status, { webhook_note: 'order.updated' });
        if (updated) {
          console.log('[polar:webhook] order.updated payment status updated', { providerPaymentId, status });
        } else {
          console.log('[polar:webhook] order.updated no existing payment to update', providerPaymentId);
        }

        if (status.includes('refund')) {
          await deductCreditsForRefundedPayment(providerPaymentId);
        }
      }

      return;
    } catch (err) {
      console.error('[polar:webhook] onOrderUpdated error', err);
      throw err;
    }
  },

  // Optional: customer updated handler (helpful to sync email/name)
  onCustomerUpdated: async (customer) => {
    try {
      console.log('[polar:webhook] customer.updated', { id: customer?.data.id, email: customer?.data.email });
      // Optionally persist or reconcile customer metadata to local users table if needed
      return;
    } catch (err) {
      console.error('[polar:webhook] onCustomerUpdated error', err);
      throw err;
    }
  },
});

export const POST = webhook;
