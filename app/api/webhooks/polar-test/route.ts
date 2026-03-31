// src/app/api/webhook/polar/route.ts
import { Webhooks } from "@polar-sh/nextjs";

export const POST = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET!,
  onPayload: async (payload) => {
    // Handle the payload
    console.log("✓ payload:", payload)
  },
//   onCheckoutCreated: async (checkout) => {
//     try {
//       console.log('✓ [polar:webhook] checkout.created', checkout.data.id);
//       // You can record checkout creation if you want (audit), e.g. insert to a checkouts table
//       // For now, just acknowledge
//       return;
//     } catch (err) {
//       console.error('[polar:webhook] onCheckoutCreated error', err);
//       throw err;
//     }
//   },
//   onCheckoutUpdated: async (checkout) => {
//     try {
//       console.log('✓ [polar:webhook] checkout.updated', checkout.data.status);
//       // Optional: update checkout status in your DB for observability
//       return;
//     } catch (err) {
//       console.error('[polar:webhook] onCheckoutUpdated error', err);
//       throw err;
//     }
//   },
//   onOrderCreated: async (order) => {
//     try {
//       console.log('✓ [polar:webhook] order.created', { id: order?.data.id, status: order?.data.status });

//       // Optionally record the order as a pending payment for audit
//       // We won't grant credits on order.created; wait for order.paid
//       return;
//     } catch (err) {
//       console.error('[polar:webhook] onOrderCreated error', err);
//       throw err;
//     }
//   },
//   onOrderPaid: async (order) => {
//     console.log("✓ order completed successfully:", order)
//   },
//   onOrderUpdated: async (order) => {
//     console.log("✓ order updated:", order)
//   }

});

/**
 * checkout.created
 * checkout.updated
 * customer.updated
 * order.created
 * order.updated
 * order.paid
 * checkout.updated
 * order.updated
 * 
 */

// Example Polar product id (Basic): f99eb0de-5919-4d9e-a7a3-04d4ee5dda03 — see lib/billing/plans.ts