create table public.assets (
  id uuid primary key default gen_random_uuid(),

  user_id uuid not null,
  
  -- what type of asset
  type text not null,
  -- example: image, video, svg, color, typography, lottie, code, report

  -- optional grouping for UI
  category text,
  -- example: "landing-page", "buttons", "hero-section"

  -- storage fields
  url text,        -- for cloudinary assets (image/video)
  content text,    -- for text-based assets (svg, css, code, md, json)

  -- metadata
  title text,
  description text,

  -- optional structured metadata
  meta jsonb,

  source_url text,

  created_at timestamptz default now(),

  -- foreign key
  constraint fk_user
    foreign key (user_id)
    references public.users(id)
    on delete cascade
);