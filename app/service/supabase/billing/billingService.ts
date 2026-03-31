// services/billingService.ts
import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { SubscribeResult } from './type';
import { ServiceResponse } from '@/types/ServiceResponse';

/**
 * Note: this service MUST run in server context (API route). It uses the Supabase service role key.
 */
export async function billingService(
  clerkId: string,
  planId: string
): Promise<ServiceResponse<SubscribeResult>> {
  if (!clerkId) {
    return { success: false, result: {}, error: 'clerkId required', message: 'Missing clerkId' };
  }
  if (!planId) {
    return { success: false, result: {}, error: 'planId required', message: 'Missing planId' };
  }

  try {
    // 1) Resolve internal user by clerk_id (server-side)
    const { data: user, error: userErr } = await supabaseAdmin
      .from('users')
      .select('id, clerk_id, email')
      .eq('clerk_id', clerkId)
      .maybeSingle();

    if (userErr) {
      console.error('DB error finding user:', userErr);
      return { success: false, result: {}, error: 'DB error finding user', message: String(userErr) };
    }
    if (!user) {
      // Caller should be authenticated via Clerk, but ensure mapping exists
      return { success: false, result: {}, error: 'User not found', message: 'No user for given clerkId' };
    }
    const userId: string = user.id;

    // 2) Load plan (server-side)
    const { data: plan, error: planErr } = await supabaseAdmin
      .from('plans')
      .select('*')
      .eq('id', planId)
      .maybeSingle();

    if (planErr) {
      console.error('DB error finding plan:', planErr);
      return { success: false, result: {}, error: 'DB error finding plan', message: String(planErr) };
    }
    if (!plan) {
      return { success: false, result: {}, error: 'Plan not found', message: 'No plan for given id' };
    }

    // 3) Create provider_payment_id (idempotency key). Use something deterministic when using real provider (e.g., provider id)
    const providerPaymentId = `internal_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    // Idempotency check: ensure we don't already have a payment with the same provider_payment_id
    // (for internal flow this is unlikely, but this pattern is important for webhooks)
    const { data: existingPayment, error: existingPaymentErr } = await supabaseAdmin
      .from('payments')
      .select('id')
      .eq('provider_payment_id', providerPaymentId)
      .maybeSingle();

    if (existingPaymentErr) {
      console.error('Error checking existing payment:', existingPaymentErr);
      // proceed — but signal payment recorded uncertainly
    }
    if (existingPayment) {
      // Already processed — return existing (idempotent)
      return {
        success: true,
        result: { payment: existingPayment, credits: {} },
        message: 'Payment already processed',
      };
    }

    // 4) Insert payment record (server-side)
    const paymentPayload = {
      user_id: userId,
      plan_id: plan.id,
      clerk_id: clerkId,
      payment_provider: 'internal',
      provider_payment_id: providerPaymentId,
      amount: plan.price_usd,
      credits_purchased: plan.credits,
      status: 'succeeded',
      metadata: { note: 'Immediate grant for manual purchase flow' },
    };

    const { data: paymentRow, error: paymentErr } = await supabaseAdmin
      .from('payments')
      .insert([paymentPayload])
      .select()
      .single();

    if (paymentErr) {
      console.error('Failed to record payment:', paymentErr);
      return { success: false, result: {}, error: 'Failed to record payment', message: String(paymentErr) };
    }

    // 5) Upsert/Add credits (additive top-up behavior)
    const { data: existing, error: existingErr } = await supabaseAdmin
      .from('user_credits')
      .select('id, total_credits, remaining_credits')
      .eq('user_id', userId)
      .maybeSingle();

    if (existingErr) {
      console.error('Error reading existing credits:', existingErr);
      // Payment recorded but credits uncertain — return success but indicate partial state
      return {
        success: true,
        result: { payment: paymentRow, credits: {} },
        message: 'Payment recorded, but failed to read existing credits',
      };
    }

    if (existing && existing.id) {
      const newTotal = (existing.total_credits || 0) + plan.credits;
      const newRemaining = (existing.remaining_credits || 0) + plan.credits;

      const { data: updatedCredits, error: updateErr } = await supabaseAdmin
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
        console.error('Failed to add credits:', updateErr);
        return { success: false, result: {}, error: 'Failed to add credits', message: String(updateErr) };
      }

      return { success: true, result: { payment: paymentRow, credits: updatedCredits }, message: 'Credits added' };
    }

    // No existing row => create one
    const newPayload = {
      user_id: userId,
      plan_id: plan.id,
      total_credits: plan.credits,
      remaining_credits: plan.credits,
      last_recharge_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data: creditsRow, error: creditsErr } = await supabaseAdmin
      .from('user_credits')
      .insert([newPayload])
      .select()
      .single();

    if (creditsErr) {
      console.error('Failed to create credits row:', creditsErr);
      return { success: false, result: {}, error: 'Failed to create credits row', message: String(creditsErr) };
    }

    return { success: true, result: { payment: paymentRow, credits: creditsRow }, message: 'Plan purchased and credits applied' };
  } catch (err) {
    console.error('billingService unexpected error:', err);
    return { success: false, result: {}, error: 'Unexpected server error', message: String(err) };
  }
}
