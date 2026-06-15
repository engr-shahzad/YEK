-- Run this once in the Supabase SQL Editor (Dashboard → SQL Editor → New query → Run).

-- ============================================================
-- Tables
-- ============================================================

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  category text not null,
  title text not null,
  card_image text not null,
  banner_image text not null,
  progress int not null default 0,
  raised numeric not null default 0,
  goal numeric not null default 0,
  description text,
  full_content text[] not null default '{}',
  goals_intro text,
  goals text[] not null default '{}',
  content_images text[] not null default '{}',
  sidebar_gallery text[] not null default '{}',
  display_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists team_members (
  id uuid primary key default gen_random_uuid(),
  section text not null check (section in ('leadership','core','community')),
  name text not null,
  role text,
  image text not null,
  linkedin text,
  show_role boolean not null default true,
  display_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text,
  image text,
  excerpt text,
  content text[] not null default '{}',
  author text,
  author_image text,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

-- ============================================================
-- Row Level Security
-- Public (anon) can read everything. Only authenticated users
-- (the admin login) can insert/update/delete.
-- ============================================================

alter table projects enable row level security;
alter table team_members enable row level security;
alter table blog_posts enable row level security;

create policy "Public read projects" on projects
  for select using (true);
create policy "Admin write projects" on projects
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Public read team_members" on team_members
  for select using (true);
create policy "Admin write team_members" on team_members
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Public read blog_posts" on blog_posts
  for select using (true);
create policy "Admin write blog_posts" on blog_posts
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- ============================================================
-- Storage bucket for admin-uploaded images
-- ============================================================

insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

create policy "Public read media" on storage.objects
  for select using (bucket_id = 'media');
create policy "Admin write media" on storage.objects
  for insert with check (bucket_id = 'media' and auth.role() = 'authenticated');
create policy "Admin update media" on storage.objects
  for update using (bucket_id = 'media' and auth.role() = 'authenticated');
create policy "Admin delete media" on storage.objects
  for delete using (bucket_id = 'media' and auth.role() = 'authenticated');
