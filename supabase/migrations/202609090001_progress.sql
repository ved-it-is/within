create table public.user_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  key text not null check (key in ('within-learning-v2', 'within-arcade-v2')),
  data jsonb not null check (jsonb_typeof(data) = 'object' and octet_length(data::text) <= 262144),
  revision integer not null default 1 check (revision > 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);
alter table public.user_progress enable row level security;
revoke all on public.user_progress from anon;
grant select, insert, update on public.user_progress to authenticated;
create policy "Read own progress" on public.user_progress for select to authenticated using ((select auth.uid()) = user_id);
create policy "Insert own progress" on public.user_progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Update own progress" on public.user_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- Atomic optimistic concurrency: never silently replace newer device progress.
create function public.save_progress(p_key text, p_data jsonb, p_revision integer)
returns integer language plpgsql security invoker set search_path = '' as $$
declare next_revision integer;
begin
  if auth.uid() is null then raise exception 'Sign in required'; end if;
  if p_revision = 0 then
    insert into public.user_progress(user_id, key, data)
    values(auth.uid(), p_key, p_data)
    on conflict do nothing returning revision into next_revision;
  else
    update public.user_progress set data = p_data, revision = revision + 1, updated_at = now()
    where user_id = auth.uid() and key = p_key and revision = p_revision
    returning revision into next_revision;
  end if;
  if next_revision is null then raise exception 'progress_conflict'; end if;
  return next_revision;
end;
$$;
revoke all on function public.save_progress(text,jsonb,integer) from public, anon;
grant execute on function public.save_progress(text,jsonb,integer) to authenticated;
