-- We include this so you can create the demo_requests table in one paste
-- inside the Supabase SQL editor.

create table if not exists public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  team_size text,
  message text not null,
  source text default 'website'
);

alter table public.demo_requests enable row level security;

create policy "Allow public inserts on demo_requests"
  on public.demo_requests
  for insert
  to anon, authenticated
  with check (true);
