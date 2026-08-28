revoke all on table public.web_interest_submissions from anon, authenticated;

grant insert, select, update, delete on table public.web_interest_submissions to service_role;

comment on table public.web_interest_submissions is
  'Private public-website partnership enquiries. Browser access is prohibited; use the server-only submission RPC.';
