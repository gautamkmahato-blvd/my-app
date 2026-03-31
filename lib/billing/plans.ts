/**
 * Simple rule: **1 USD = 100 credits** (payment amount in USD cents maps 1:1 to credits).
 * Polar product IDs from your Polar dashboard (used in Checkout `products[]` and webhooks).
 * Internal plan UUIDs — keep in sync with `supabase/seed_sample_data.sql`.
 */
export const CREDITS_PER_USD = 100;

/** Credits granted for a list price in USD (e.g. $9.99 → 999). */
export function creditsForUsd(priceUsd: number): number {
  return Math.round(priceUsd * CREDITS_PER_USD);
}

/** Credits from Polar order total in USD cents ($1 = 100 credits ⇒ 1¢ = 1 credit). */
export function creditsFromUsdCents(amountCents: number): number {
  return Math.max(0, Math.floor(Number(amountCents) || 0));
}
export const POLAR_PRODUCT_IDS = {
  /** Basic plan (Polar product) */
  BASIC: 'f99eb0de-5919-4d9e-a7a3-04d4ee5dda03',
  /** Pro plan (Polar product) */
  PRO: '4e77e6f9-9e8f-4663-ba0f-be148ab8b752',
} as const;

/** Polar product used for pay-what-you-want / custom amount checkout (`/api/custom-checkout` when `isCustom: true`). */
export const POLAR_CUSTOM_PAY_PRODUCT_ID = 'be808c19-766f-4bb0-ba62-f69a93f8ab63';

/** Supabase `plans.id` values from seed SQL (for `/api/plans/subscribe` with ALLOW_INTERNAL_PLAN_SUBSCRIBE). */
export const PLAN_IDS = {
  BASIC: 'a0000001-0000-4000-8000-000000000001',
  PRO: 'a0000001-0000-4000-8000-000000000002',
} as const;

export type BillingPlanKey = keyof typeof POLAR_PRODUCT_IDS;

/** Display + catalog copy — keep credits/price in sync with `plans` rows in Supabase. */
export const PLAN_DISPLAY: Record<
  BillingPlanKey,
  { name: string; description: string; priceUsd: number; credits: number }
> = {
  BASIC: {
    name: 'Basic',
    description: 'For individuals getting started — credits refilled per purchase.',
    priceUsd: 9.99,
    credits: creditsForUsd(9.99),
  },
  PRO: {
    name: 'Pro',
    description: 'For teams and power users — larger credit packs.',
    priceUsd: 29.99,
    credits: creditsForUsd(29.99),
  },
};

/** Order shown on the Polar checkout UI */
export const CHECKOUT_PLAN_ORDER: BillingPlanKey[] = ['BASIC', 'PRO'];

export function getPolarProductId(plan: BillingPlanKey): string {
  return POLAR_PRODUCT_IDS[plan];
}

/** Match checkout `productId` (Polar product UUID or internal plan id) to catalog. */
export function getCatalogPlanByPolarOrInternalId(productId: string): {
  planId: string;
  name: string;
  providerProductId: string;
  credits: number;
  priceUsd: number;
} | null {
  const id = productId.trim();
  if (!id) return null;
  for (const key of CHECKOUT_PLAN_ORDER) {
    if (POLAR_PRODUCT_IDS[key] === id || PLAN_IDS[key] === id) {
      const d = PLAN_DISPLAY[key];
      return {
        planId: PLAN_IDS[key],
        name: d.name,
        providerProductId: POLAR_PRODUCT_IDS[key],
        credits: d.credits,
        priceUsd: d.priceUsd,
      };
    }
  }
  return null;
}
