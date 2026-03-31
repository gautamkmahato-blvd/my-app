import type { BillingPlanKey } from '@/lib/billing/plans';
import { getPolarProductId } from '@/lib/billing/plans';

function checkoutUrl(): string {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return `${window.location.origin}/api/create-checkout`;
  }
  const base = process.env.NEXT_PUBLIC_APP_URL || '';
  return `${base.replace(/\/$/, '')}/api/create-checkout`;
}

/**
 * Starts Polar checkout for Basic or Pro using the product IDs from `lib/billing/plans.ts`.
 */
export default async function createPolarCheckout(opts: {
  plan: BillingPlanKey;
  successUrl: string;
  cancelUrl?: string;
}): Promise<{ checkoutUrl?: string; error?: string; message?: string }> {
  const productId = getPolarProductId(opts.plan);
  try {
    const res = await fetch(checkoutUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        productId,
        successUrl: opts.successUrl,
        cancelUrl: opts.cancelUrl,
      }),
    });
    const json = (await res.json().catch(() => null)) as {
      success?: boolean;
      result?: { checkoutUrl?: string };
      error?: string;
      message?: string;
    } | null;
    if (!res.ok || !json?.success) {
      return {
        error: json?.error || `HTTP ${res.status}`,
        message: json?.message || 'Failed to create checkout',
      };
    }
    return { checkoutUrl: json.result?.checkoutUrl };
  } catch (err: unknown) {
    return {
      error: err instanceof Error ? err.message : 'Network error',
      message: 'Failed to create checkout',
    };
  }
}
