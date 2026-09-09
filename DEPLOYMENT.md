# Within deployment

## Supabase

1. Create a Supabase project. Run `supabase/migrations/202609090001_progress.sql` in its SQL editor.
2. Enable the Email authentication provider. The app uses passwordless email links with PKCE.
3. Set Authentication → URL Configuration → Site URL to the final HTTPS Vercel domain. Add the same origin followed by `/` to allowed redirect URLs. Add `http://127.0.0.1:5173/` only for local testing.
4. Configure a production SMTP provider before opening registration to the public. Supabase's built-in email service is restricted and is not a general public-launch mail service.
5. Copy the project URL and **publishable** key into Vercel's environment settings as `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`. Never put a service-role or secret key in a `VITE_` variable.
6. For local development, copy `.env.example` to `.env.local`, fill these same public values, and restart Vite.

## Vercel

Deploy the `within-react` directory. Framework: Vite. Build: `npm run build`. Output: `dist`.
`vercel.json` contains the hosting configuration. Hash routes do not need catch-all rewrites.
`.vercelignore` excludes the local recovery files, npm cache, environment files and test code from uploads.

## Progress and limits

- Guests use the existing browser-only progress keys. Sign-in loads separate account progress; guest records are not automatically imported on shared devices.
- Signed-in progress is held in `public.user_progress`. Row-level security restricts access to the authenticated owner.
- No homepage feeling text is sent to the database. The uploaded records are question IDs, selected options and practice progress.
- Edits are saved through a serialized queue. A revision mismatch stops sync rather than silently overwriting another device. Reload loads the cloud version; a local recovery copy of the displaced cache is retained under the account's `:recovery` key.
- Offline edits remain cached locally while the page stays open and can retry automatically when the browser comes online. Full offline reload/resume is not implemented.
- Results use editorial answer keys. They are not verified clinical EQ scores, server-certified rankings or anti-cheat measurements.
- Authenticated users can edit only their own progress. The introductory lock is a learning-flow rule, not a security boundary around paid content.

## Verify before public launch

- `npm test` and `npm run build`.
- Confirm email delivery using the configured SMTP service and the final redirect origin.
- Verify two separate users cannot access each other's rows, and that an anonymous request cannot read them.
- Complete the five introduction questions, sign out, and verify another account starts locked.
- On another device, sign in as the same user and verify progress restores.
- Verify a cloud write conflict shows a clear message without replacing the newer record.

The question bank and Three.js currently trigger Vite's large-chunk advisory. The production build succeeds; splitting the graphics and content bundles remains a performance improvement.
