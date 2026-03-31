-- Sample data for local dev / demos. Run after `payment_schema.sql`.
-- Replace clerk_id / emails with real Clerk test users if you need end-to-end flows.
--
-- Polar product IDs (from your Polar dashboard):
--   Basic: f99eb0de-5919-4d9e-a7a3-04d4ee5dda03 (see lib/billing/plans.ts)
--   Pro:   4e77e6f9-9e8f-4663-ba0f-be148ab8b752
--   Custom pay (pay-what-you-want): be808c19-766f-4bb0-ba62-f69a93f8ab63 — POLAR_CUSTOM_PAY_PRODUCT_ID
--
-- If checkout/webhooks fail UUID validation on Basic, confirm the id in Polar and update
-- `plans.provider_product_id` and `lib/billing/plans.ts` to match exactly.
-- Credits: 1 USD = 100 credits (see lib/billing/plans.ts CREDITS_PER_USD).

-- ---------------------------------------------------------------------------
-- plans (fixed UUIDs match lib/billing/plans.ts PLAN_IDS)
-- ---------------------------------------------------------------------------
insert into public.plans (id, name, provider_product_id, credits, price_usd)
values
  (
    'a0000001-0000-4000-8000-000000000001'::uuid,
    'Basic',
    'f99eb0de-5919-4d9e-a7a3-04d4ee5dda03',
    999,
    9.99
  ),
  (
    'a0000001-0000-4000-8000-000000000002'::uuid,
    'Pro',
    '4e77e6f9-9e8f-4663-ba0f-be148ab8b752',
    2999,
    29.99
  )
on conflict (id) do update set
  name = excluded.name,
  provider_product_id = excluded.provider_product_id,
  credits = excluded.credits,
  price_usd = excluded.price_usd,
  updated_at = now();

-- ---------------------------------------------------------------------------
-- users (sample Clerk-linked rows)
-- ---------------------------------------------------------------------------
insert into public.users (id, clerk_id, name, username, email, image)
values
  (
    'b0000001-0000-4000-8000-000000000001'::uuid,
    'user_sample_clerk_basic_001',
    'Sample Basic User',
    'sample_basic',
    'sample-basic@example.com',
    null
  ),
  (
    'b0000001-0000-4000-8000-000000000002'::uuid,
    'user_sample_clerk_pro_001',
    'Sample Pro User',
    'sample_pro',
    'sample-pro@example.com',
    null
  )
on conflict (clerk_id) do update set
  name = excluded.name,
  username = excluded.username,
  email = excluded.email,
  updated_at = now();

-- ---------------------------------------------------------------------------
-- payments (Polar-style + one internal sample)
-- ---------------------------------------------------------------------------
insert into public.payments (
  user_id,
  plan_id,
  clerk_id,
  payment_provider,
  provider_payment_id,
  amount,
  currency,
  credits_purchased,
  status,
  metadata
)
values
  (
    'b0000001-0000-4000-8000-000000000001'::uuid,
    'a0000001-0000-4000-8000-000000000001'::uuid,
    'user_sample_clerk_basic_001',
    'polar',
    'polar_order_sample_001',
    999,
    'usd',
    999,
    'succeeded',
    '{"note":"demo polar payment","plan":"basic"}'::jsonb
  ),
  (
    'b0000001-0000-4000-8000-000000000002'::uuid,
    'a0000001-0000-4000-8000-000000000002'::uuid,
    'user_sample_clerk_pro_001',
    'polar',
    'polar_order_sample_002',
    2999,
    'usd',
    2999,
    'succeeded',
    '{"note":"demo polar payment","plan":"pro"}'::jsonb
  ),
  (
    'b0000001-0000-4000-8000-000000000001'::uuid,
    'a0000001-0000-4000-8000-000000000001'::uuid,
    'user_sample_clerk_basic_001',
    'internal',
    'internal_sample_001',
    9.99,
    'usd',
    999,
    'succeeded',
    '{"note":"Immediate grant for manual purchase flow"}'::jsonb
  )
on conflict (provider_payment_id) do nothing;

-- ---------------------------------------------------------------------------
-- user_credits (one row per user)
-- ---------------------------------------------------------------------------
insert into public.user_credits (user_id, plan_id, total_credits, remaining_credits, last_recharge_at)
values
  (
    'b0000001-0000-4000-8000-000000000001'::uuid,
    'a0000001-0000-4000-8000-000000000001'::uuid,
    1200,
    900,
    now()
  ),
  (
    'b0000001-0000-4000-8000-000000000002'::uuid,
    'a0000001-0000-4000-8000-000000000002'::uuid,
    2999,
    2500,
    now()
  )
on conflict (user_id) do update set
  plan_id = excluded.plan_id,
  total_credits = excluded.total_credits,
  remaining_credits = excluded.remaining_credits,
  last_recharge_at = excluded.last_recharge_at,
  updated_at = now();
