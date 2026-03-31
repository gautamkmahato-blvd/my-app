-- Payment + billing schema for this app (Polar webhooks, internal subscribe, user credits).
-- Run in Supabase SQL Editor or: supabase db push (if using migrations).
-- PostgreSQL 13+ (uses gen_random_uuid()).

-- ---------------------------------------------------------------------------
-- users — synced from Clerk (createOrUpdateUser, webhooks resolve by clerk_id / email)
-- ---------------------------------------------------------------------------
create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  clerk_id text not null,
  name text,
  username text,
  email text,
  image text,
  created_at timestamptz not null default now(),
  updated_at timestamptz default now()
);

create unique index if not exists users_clerk_id_key on public.users (clerk_id);
create index if not exists users_email_idx on public.users (email) where email is not null;

comment on table public.users is 'App user; clerk_id links to Clerk. Webhook can match by email if clerk_id missing in metadata.';

-- ---------------------------------------------------------------------------
-- plans — catalog; provider_product_id = Polar product UUID from dashboard
-- ---------------------------------------------------------------------------
create table if not exists public.plans (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  provider_product_id text,
  credits integer not null default 0 check (credits >= 0),
  price_usd numeric(12, 2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz default now()
);

create index if not exists plans_provider_product_id_idx on public.plans (provider_product_id)
  where provider_product_id is not null;

comment on column public.plans.provider_product_id is 'Polar product id used in Checkout products[] and webhooks.';
comment on column public.plans.credits is 'Credits granted when this plan is purchased.';
comment on column public.plans.price_usd is 'Display / internal subscribe amount in USD (not necessarily same unit as payments.amount for Polar).';

-- ---------------------------------------------------------------------------
-- payments — Polar + internal; provider_payment_id must be unique (idempotency)
-- ---------------------------------------------------------------------------
create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  plan_id uuid references public.plans (id) on delete set null,
  clerk_id text,
  payment_provider text not null,
  provider_payment_id text not null,
  amount numeric(14, 4),
  currency text default 'usd',
  credits_purchased integer,
  status text not null default 'succeeded',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz default now()
);

create unique index if not exists payments_provider_payment_id_key on public.payments (provider_payment_id);
create index if not exists payments_user_id_created_at_idx on public.payments (user_id, created_at desc);

comment on table public.payments is 'Polar order.paid inserts; internal subscribe uses payment_provider=internal.';
comment on column public.payments.amount is 'Polar: total in cents (integer). Internal billingService may store price_usd — consider normalizing to cents in app.';
comment on column public.payments.metadata is 'Polar metadata, refund_credits_deducted, etc.';

-- ---------------------------------------------------------------------------
-- user_credits — one row per user (additive balance)
-- ---------------------------------------------------------------------------
create table if not exists public.user_credits (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  plan_id uuid references public.plans (id) on delete set null,
  total_credits integer not null default 0 check (total_credits >= 0),
  remaining_credits integer not null default 0 check (remaining_credits >= 0),
  last_recharge_at timestamptz,
  updated_at timestamptz default now(),
  constraint user_credits_user_id_key unique (user_id)
);

create index if not exists user_credits_user_id_idx on public.user_credits (user_id);

comment on table public.user_credits is 'Single balance row per user; Polar + internal flows add credits; refunds claw back via payments.credits_purchased.';

-- ---------------------------------------------------------------------------
-- Optional: keep updated_at in sync (requires pg_net or app-only updates are fine)
-- ---------------------------------------------------------------------------
-- create or replace function public.set_updated_at()
-- returns trigger as $$
-- begin
--   new.updated_at = now();
--   return new;
-- end;
-- $$ language plpgsql;

-- ---------------------------------------------------------------------------
-- Sample inserts (plans, users, payments, user_credits + your Polar product ids)
-- ---------------------------------------------------------------------------
-- See: supabase/seed_sample_data.sql

-- ---------------------------------------------------------------------------
-- RLS: API routes using SUPABASE_SERVICE_ROLE_KEY bypass RLS.
-- If the browser client writes to `users`, add policies for your auth model (Clerk JWT custom claims, etc.).
-- ---------------------------------------------------------------------------
