import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { getCatalogPlanByPolarOrInternalId } from '@/lib/billing/plans';

export type PlanRowCheckout = {
  id: string;
  name: string;
  provider_product_id: string | null;
  credits: number;
  price_usd: number;
};

/**
 * Resolve a plan for create-checkout: DB first, then upsert from lib/billing/plans.ts catalog
 * when the product id matches (so checkout works before manual SQL seed).
 */
export async function resolvePlanForCheckout(productId: string): Promise<{
  plan: PlanRowCheckout | null;
  dbError?: string;
}> {
  const pid = productId.trim();
  if (!pid) {
    return { plan: null };
  }

  const { data: existing, error: queryErr } = await supabaseAdmin
    .from('plans')
    .select('id, name, provider_product_id, credits, price_usd')
    .or(`id.eq.${pid},provider_product_id.eq.${pid}`)
    .limit(1)
    .maybeSingle();

  if (queryErr) {
    console.error('[resolvePlanForCheckout] query error', queryErr);
    return { plan: null, dbError: queryErr.message };
  }

  if (existing) {
    return { plan: existing as PlanRowCheckout };
  }

  const catalog = getCatalogPlanByPolarOrInternalId(pid);
  if (!catalog) {
    return { plan: null };
  }

  const { error: upsertErr } = await supabaseAdmin.from('plans').upsert(
    {
      id: catalog.planId,
      name: catalog.name,
      provider_product_id: catalog.providerProductId,
      credits: catalog.credits,
      price_usd: catalog.priceUsd,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'id' }
  );

  if (upsertErr) {
    console.error('[resolvePlanForCheckout] catalog upsert failed', upsertErr);
    return { plan: null, dbError: upsertErr.message };
  }

  const { data: row, error: fetchErr } = await supabaseAdmin
    .from('plans')
    .select('id, name, provider_product_id, credits, price_usd')
    .eq('id', catalog.planId)
    .single();

  if (fetchErr || !row) {
    console.error('[resolvePlanForCheckout] fetch after upsert', fetchErr);
    return { plan: null, dbError: fetchErr?.message };
  }

  return { plan: row as PlanRowCheckout };
}
