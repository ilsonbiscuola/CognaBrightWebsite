alter table public.web_interest_submissions
  add column if not exists enquiry_type text,
  add column if not exists organisation_name text,
  add column if not exists organisation_type text,
  add column if not exists partnership_interest text,
  add column if not exists privacy_consent_at timestamptz;

alter table public.web_interest_submissions
  drop constraint if exists web_interest_submissions_enquiry_type_check,
  add constraint web_interest_submissions_enquiry_type_check
    check (enquiry_type is null or enquiry_type in ('research', 'organisation', 'pilot', 'general')),
  drop constraint if exists web_interest_submissions_organisation_type_check,
  add constraint web_interest_submissions_organisation_type_check
    check (
      organisation_type is null
      or organisation_type in ('university', 'disability', 'allied_health', 'education', 'community', 'provider', 'family', 'other')
    );

create schema if not exists private;

create table if not exists private.web_enquiry_rate_limits (
  request_hash text not null,
  submitted_at timestamptz not null default now()
);

create index if not exists web_enquiry_rate_limits_lookup_idx
  on private.web_enquiry_rate_limits (request_hash, submitted_at desc);

revoke all on table private.web_enquiry_rate_limits from public, anon, authenticated;

create or replace function public.web_submit_partnership_enquiry(
  p_request_hash text,
  p_enquiry_type text,
  p_name text,
  p_email text,
  p_organisation_name text,
  p_organisation_type text,
  p_role text,
  p_country text,
  p_partnership_interest text,
  p_message text,
  p_consent_updates boolean,
  p_source text
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  submission_id uuid;
  recent_count integer;
begin
  if p_request_hash is null or length(p_request_hash) <> 64 then
    raise exception using errcode = '22023', message = 'invalid_request_hash';
  end if;

  perform pg_advisory_xact_lock(hashtextextended(p_request_hash, 0));

  select count(*) into recent_count
  from private.web_enquiry_rate_limits
  where request_hash = p_request_hash
    and submitted_at >= now() - interval '10 minutes';

  if recent_count >= 5 then
    raise sqlstate 'PGRST' using
      message = json_build_object('code', 'rate_limit_exceeded', 'message', 'Too many submissions.')::text,
      detail = json_build_object('status', 429, 'status_text', 'Too Many Requests')::text;
  end if;

  if p_enquiry_type not in ('research', 'organisation', 'pilot', 'general')
     or nullif(btrim(p_name), '') is null
     or nullif(btrim(p_email), '') is null
     or nullif(btrim(p_partnership_interest), '') is null then
    raise exception using errcode = '22023', message = 'invalid_enquiry';
  end if;

  insert into public.web_interest_submissions (
    enquiry_type,
    name,
    email,
    organisation_name,
    organisation_type,
    role,
    country,
    partnership_interest,
    message,
    privacy_consent_at,
    consent_updates,
    source
  ) values (
    p_enquiry_type,
    left(btrim(p_name), 120),
    left(lower(btrim(p_email)), 254),
    nullif(left(btrim(coalesce(p_organisation_name, '')), 160), ''),
    nullif(left(btrim(coalesce(p_organisation_type, '')), 60), ''),
    coalesce(nullif(left(btrim(coalesce(p_role, '')), 120), ''), 'Other'),
    nullif(left(btrim(coalesce(p_country, '')), 120), ''),
    left(btrim(p_partnership_interest), 240),
    nullif(left(btrim(coalesce(p_message, '')), 3000), ''),
    now(),
    coalesce(p_consent_updates, false),
    coalesce(nullif(left(btrim(p_source), 120), ''), 'cognabright.com')
  )
  returning id into submission_id;

  insert into private.web_enquiry_rate_limits (request_hash) values (p_request_hash);
  delete from private.web_enquiry_rate_limits where submitted_at < now() - interval '2 days';

  return submission_id;
end;
$$;

revoke all on function public.web_submit_partnership_enquiry(
  text, text, text, text, text, text, text, text, text, text, boolean, text
) from public, anon, authenticated;

grant execute on function public.web_submit_partnership_enquiry(
  text, text, text, text, text, text, text, text, text, text, boolean, text
) to service_role;

comment on function public.web_submit_partnership_enquiry(
  text, text, text, text, text, text, text, text, text, text, boolean, text
) is 'Server-only public website partnership enquiry submission with database-enforced rate limiting.';
