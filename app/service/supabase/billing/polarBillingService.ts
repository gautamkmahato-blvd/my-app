// src/lib/polarBillingService.ts

import { supabaseAdmin } from "@/config/supabase/supabaseAdmin";


/**
 * DB helper functions for Polar webhook processing.
 * All functions use supabaseAdmin (service-role client).
 * Keep these functions small & focused for easier testing.
 */

/** Try find a plan by provider product id, provider price id, or plan id in metadata */
export async function findPlanByProductOrPriceIds(productId?: string, metadataPlanId?: string | number | boolean) {
  try {
    if (productId) {
      const { data: planRow, error } = await supabaseAdmin
        .from('plans')
        .select('*')
        .or(`id.eq.${productId},provider_product_id.eq.${productId}`)
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error('[polarService] findPlanByProductOrPriceIds productId query error', error);
      }
      if (planRow) return planRow;
    }

    // if (productPriceId) {
    //   const { data: planRow, error } = await supabaseAdmin
    //     .from('plans')
    //     .select('*')
    //     .or(`provider_price_id.eq.${productPriceId},id.eq.${productPriceId}`)
    //     .limit(1)
    //     .maybeSingle();

    //   if (error) {
    //     console.error('[polarService] findPlanByProductOrPriceIds priceId query error', error);
    //   }
    //   if (planRow) return planRow;
    // }

    if (metadataPlanId) {
      const { data: planRow, error } = await supabaseAdmin
        .from('plans')
        .select('*')
        .eq('id', metadataPlanId)
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error('[polarService] findPlanByProductOrPriceIds metadata plan query error', error);
      }
      if (planRow) return planRow;
    }

    return null;
  } catch (err) {
    console.error('[polarService] findPlanByProductOrPriceIds unexpected', err);
    return null;
  }
}

/** Resolve a user by clerk_id (preferred) or by email. Returns { userId, clerkId, email } or null */
export async function findUserByClerkOrEmail(clerkId?: string | number | boolean, email?: string | null) {
  try {
    if (clerkId) {
      const { data: u, error } = await supabaseAdmin
        .from('users')
        .select('id, clerk_id, email')
        .eq('clerk_id', clerkId)
        .maybeSingle();

      if (error) {
        console.error('[polarService] findUserByClerkOrEmail clerkId query error', error);
      }
      if (u) return { userId: u.id, clerkId: u.clerk_id, email: u.email };
    }

    if (email) {
      const { data: u, error } = await supabaseAdmin
        .from('users')
        .select('id, clerk_id, email')
        .eq('email', email)
        .maybeSingle();

      if (error) {
        console.error('[polarService] findUserByClerkOrEmail email query error', error);
      }
      if (u) return { userId: u.id, clerkId: u.clerk_id, email: u.email };
    }

    return null;
  } catch (err) {
    console.error('[polarService] findUserByClerkOrEmail unexpected', err);
    return null;
  }
}

/** Check if a payment with provider_payment_id already exists (idempotency) */
export async function paymentExists(providerPaymentId: string) {
  if (!providerPaymentId) return false;
  try {
    const { data: existing, error } = await supabaseAdmin
      .from('payments')
      .select('id')
      .eq('provider_payment_id', providerPaymentId)
      .maybeSingle();

    if (error) {
      console.error('[polarService] paymentExists error', error);
      // conservative: return false so caller can attempt insert (but DB unique constraint will protect)
      return false;
    }
    return !!existing;
  } catch (err) {
    console.error('[polarService] paymentExists unexpected', err);
    return false;
  }
}

/** Insert payment record. Caller should ideally have checked idempotency first. */
export async function insertPaymentRecord(params: {
  providerPaymentId: string;
  userId: string;
  clerkId?: string | null;
  planId?: string | null;
  provider?: string;
  amount?: number | null;
  creditsPurchased?: number | null;
  metadata?: any;
}) {
  const {
    providerPaymentId,
    userId,
    clerkId,
    planId,
    provider = 'polar',
    amount = null,
    creditsPurchased = null,
    metadata = {},
  } = params;

  try {
    const payload = {
      user_id: userId,
      plan_id: planId ?? null,
      clerk_id: clerkId ?? null,
      payment_provider: provider,
      provider_payment_id: providerPaymentId,
      amount,
      credits_purchased: creditsPurchased,
      status: 'succeeded',
      metadata,
    };

    const { data, error } = await supabaseAdmin
      .from('payments')
      .insert([payload])
      .select()
      .single();

    if (error) {
      console.error('[polarService] insertPaymentRecord error', error);
      throw error;
    }

    return data;
  } catch (err) {
    console.error('[polarService] insertPaymentRecord unexpected', err);
    throw err;
  }
}

/** Add credits (additive top-up). If user_credits exists, update; otherwise create */
export async function addOrUpdateCredits(userId: string, planId: string | null, creditsToGrant: number) {
  if (creditsToGrant <= 0) {
    return null;
  }
  try {
    const { data: existing, error: existingErr } = await supabaseAdmin
      .from('user_credits')
      .select('id, total_credits, remaining_credits')
      .eq('user_id', userId)
      .maybeSingle();

    if (existingErr) {
      console.error('[polarService] addOrUpdateCredits existing read error', existingErr);
      throw existingErr;
    }

    if (existing && existing.id) {
      const newTotal = (existing.total_credits || 0) + creditsToGrant;
      const newRemaining = (existing.remaining_credits || 0) + creditsToGrant;

      const { data: updated, error: updateErr } = await supabaseAdmin
        .from('user_credits')
        .update({
          total_credits: newTotal,
          remaining_credits: newRemaining,
          last_recharge_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', userId)
        .select()
        .single();

      if (updateErr) {
        console.error('[polarService] addOrUpdateCredits update error', updateErr);
        throw updateErr;
      }
      return updated;
    }

    // create
    const payload = {
      user_id: userId,
      plan_id: planId,
      total_credits: creditsToGrant,
      remaining_credits: creditsToGrant,
      last_recharge_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data: created, error: createErr } = await supabaseAdmin
      .from('user_credits')
      .insert([payload])
      .select()
      .single();

    if (createErr) {
      console.error('[polarService] addOrUpdateCredits create error', createErr);
      throw createErr;
    }
    return created;
  } catch (err) {
    console.error('[polarService] addOrUpdateCredits unexpected', err);
    throw err;
  }
}

/** Update payment status and metadata (used for order.updated on failures/refunds) */
export async function updatePaymentStatus(providerPaymentId: string, status: string, extraMetadata?: any) {
  try {
    const { data: existing, error: existingErr } = await supabaseAdmin
      .from('payments')
      .select('*')
      .eq('provider_payment_id', providerPaymentId)
      .maybeSingle();

    if (existingErr) {
      console.error('[polarService] updatePaymentStatus read error', existingErr);
      throw existingErr;
    }
    if (!existing) {
      // Nothing to update
      return null;
    }

    const updatedMetadata = { ...(existing.metadata || {}), ...(extraMetadata || {}) };

    const { data: updated, error: updateErr } = await supabaseAdmin
      .from('payments')
      .update({ status, metadata: updatedMetadata, updated_at: new Date().toISOString() })
      .eq('provider_payment_id', providerPaymentId)
      .select()
      .single();

    if (updateErr) {
      console.error('[polarService] updatePaymentStatus update error', updateErr);
      throw updateErr;
    }
    return updated;
  } catch (err) {
    console.error('[polarService] updatePaymentStatus unexpected', err);
    throw err;
  }
}

/**
 * On refund: claw back credits tied to this payment (idempotent via metadata.refund_credits_deducted).
 * Deducts up to credits_purchased, capped by remaining balance.
 */
export async function deductCreditsForRefundedPayment(providerPaymentId: string): Promise<void> {
  const { data: payment, error } = await supabaseAdmin
    .from('payments')
    .select('*')
    .eq('provider_payment_id', providerPaymentId)
    .maybeSingle();

  if (error) {
    console.error('[polarService] deductCreditsForRefundedPayment read error', error);
    return;
  }
  if (!payment) return;

  const meta = (payment.metadata || {}) as Record<string, unknown>;
  if (meta.refund_credits_deducted === true) return;

  const credits = Number(payment.credits_purchased) || 0;
  const userId = payment.user_id as string | null;

  const markMeta = async (extra: Record<string, unknown>) => {
    await supabaseAdmin
      .from('payments')
      .update({
        metadata: { ...meta, ...extra },
        updated_at: new Date().toISOString(),
      })
      .eq('provider_payment_id', providerPaymentId);
  };

  if (!userId) {
    await markMeta({ refund_credits_deducted: true, refund_note: 'no user_id on payment' });
    return;
  }

  if (credits <= 0) {
    await markMeta({ refund_credits_deducted: true, refund_note: 'no credits to claw back' });
    return;
  }

  const { data: uc, error: ucErr } = await supabaseAdmin
    .from('user_credits')
    .select('id, total_credits, remaining_credits')
    .eq('user_id', userId)
    .maybeSingle();

  if (ucErr || !uc) {
    console.error('[polarService] deductCreditsForRefundedPayment user_credits missing', ucErr);
    return;
  }

  const remaining = uc.remaining_credits ?? 0;
  const total = uc.total_credits ?? 0;
  const deduct = Math.min(credits, remaining);
  const newRemaining = Math.max(0, remaining - deduct);
  const newTotal = Math.max(0, total - deduct);

  const { error: updErr } = await supabaseAdmin
    .from('user_credits')
    .update({
      remaining_credits: newRemaining,
      total_credits: newTotal,
      updated_at: new Date().toISOString(),
    })
    .eq('user_id', userId);

  if (updErr) {
    console.error('[polarService] deductCreditsForRefundedPayment user_credits update error', updErr);
    throw updErr;
  }

  await markMeta({
    refund_credits_deducted: true,
    refund_credits_amount: deduct,
  });
}

/** Optional: record a checkout row for audit (if you want) */
export async function recordCheckout(checkoutData: any) {
  try {
    // implement if you have a checkouts table. For now this is a no-op that logs.
    console.log('[polarService] recordCheckout (noop) checkoutData.id', checkoutData?.id);
    return;
  } catch (err) {
    console.error('[polarService] recordCheckout unexpected', err);
  }
}
