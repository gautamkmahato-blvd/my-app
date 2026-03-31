import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { ServiceResponse } from '@/types/ServiceResponse';
import type { PaymentRow } from './types';

export default async function getUserPayments(
  userId: string
): Promise<ServiceResponse<PaymentRow[]>> {
  if (!userId) {
    return {
      success: false,
      result: {},
      error: 'invalid_user',
      message: 'userId is required',
    };
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('payments')
      .select(
        `
        id,
        user_id,
        plan_id,
        clerk_id,
        payment_provider,
        provider_payment_id,
        amount,
        currency,
        credits_purchased,
        status,
        metadata,
        created_at
      `
      )
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('getUserPayments error:', error);
      return {
        success: false,
        result: {},
        error: 'db_error',
        message: 'Failed to fetch payments',
      };
    }

    return {
      success: true,
      result: (data ?? []) as PaymentRow[],
      message: 'Payments fetched successfully',
    };
  } catch (err: unknown) {
    return {
      success: false,
      result: {},
      error: 'unexpected_error',
      message: err instanceof Error ? err.message : 'Unexpected error',
    };
  }
}
