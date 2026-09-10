# Within deployment

## Supabase

1. Create a Supabase project. Run `supabase/migrations/202609090001_progress.sql` in its SQL editor.
2. Enable the Email authentication provider and disable Confirm email. The app uses email/password registration and sign-in with immediate sessions.
3. Set Authentication → URL Configuration → Site URL to the final HTTPS Vercel domain. Add the same origin followed by `/` to allowed redirect URLs. Add `http://127.0.0.1:5173/` only for local testing.
4. Registration does not send email. No email-link sign-in or email-recovery flow is exposed. Existing signed-in users can set a password from the sidebar.
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
- Edits are saved through a serialized queue. A revision mismatch reloads the server record and combines independent edits with bounded retries. The server wins overlapping changes, and practice sessions remain atomic. A local recovery copy is retained under the account's `:recovery` key.
- Pending edits are cached with their base record, scoped to the account. They retry in the background and recover on the next successful account load in the same browser. Initial account loading still requires a connection. Sign-out never waits for progress writes.
- Results use editorial answer keys. They are not verified clinical EQ scores, server-certified rankings or anti-cheat measurements.
- Authenticated users can edit only their own progress. The introductory lock is a learning-flow rule, not a security boundary around paid content.

## Verify before public launch

- `npm test` and `npm run build`.
- Confirm new email/password registrations return a session immediately, with no confirmation email.
- Verify two separate users cannot access each other's rows, and that an anonymous request cannot read them.
- Complete the five introduction questions, sign out, and verify another account starts locked.
- On another device, sign in as the same user and verify progress restores.
- Verify independent concurrent edits are preserved, overlapping edits keep the server version, and sign-out works even when saving is unavailable.

The question bank and Three.js currently trigger Vite's large-chunk advisory. The production build succeeds; splitting the graphics and content bundles remains a performance improvement.
