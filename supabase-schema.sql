-- Northloop demo request storage.
-- Apply with a trusted Supabase database/admin connection, never from the browser.
create extension if not exists "pgcrypto";

create table if not exists public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  team_size text,
  message text not null,
  source text not null default 'website',
  constraint demo_requests_name_length_check check (char_length(btrim(name)) between 1 and 120),
  constraint demo_requests_email_check check (char_length(btrim(email)) between 3 and 254 and email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  constraint demo_requests_company_length_check check (company is null or char_length(btrim(company)) <= 160),
  constraint demo_requests_team_size_check check (team_size is null or team_size in ('1-5', '6-15', '16-40', '41+')),
  constraint demo_requests_message_length_check check (char_length(btrim(message)) between 1 and 5000),
  constraint demo_requests_source_length_check check (char_length(btrim(source)) between 1 and 60)
);

-- Add constraints to an existing table without blocking rollout on legacy rows.
do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'demo_requests_name_length_check' and conrelid = 'public.demo_requests'::regclass) then
    alter table public.demo_requests add constraint demo_requests_name_length_check check (char_length(btrim(name)) between 1 and 120) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'demo_requests_email_check' and conrelid = 'public.demo_requests'::regclass) then
    alter table public.demo_requests add constraint demo_requests_email_check check (char_length(btrim(email)) between 3 and 254 and email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$') not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'demo_requests_company_length_check' and conrelid = 'public.demo_requests'::regclass) then
    alter table public.demo_requests add constraint demo_requests_company_length_check check (company is null or char_length(btrim(company)) <= 160) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'demo_requests_team_size_check' and conrelid = 'public.demo_requests'::regclass) then
    alter table public.demo_requests add constraint demo_requests_team_size_check check (team_size is null or team_size in ('1-5', '6-15', '16-40', '41+')) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'demo_requests_message_length_check' and conrelid = 'public.demo_requests'::regclass) then
    alter table public.demo_requests add constraint demo_requests_message_length_check check (char_length(btrim(message)) between 1 and 5000) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'demo_requests_source_length_check' and conrelid = 'public.demo_requests'::regclass) then
    alter table public.demo_requests add constraint demo_requests_source_length_check check (char_length(btrim(source)) between 1 and 60) not valid;
  end if;
end
$$;

alter table public.demo_requests enable row level security;
drop policy if exists "Allow public inserts on demo_requests" on public.demo_requests;
revoke all on table public.demo_requests from anon, authenticated;
grant usage on schema public to service_role;
grant select, insert, update, delete on table public.demo_requests to service_role;
