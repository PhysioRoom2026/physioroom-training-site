# Physio Room Training
Static HIPAA and OSHA staff training site, hosted publicly on GitHub Pages so the team can open it without a login. No secrets or patient data; the Supabase key here is the public anon key.

## Updates show up straight away
- The main link (`/`, `index.html`) always loads a fresh `app.html` (it adds `?t=<time>`), so staff never get a cached page.
- `app.html` and `admin.html` load `assets/styles.css` and `assets/config.js` with a `?v=` version stamp. A local git
  pre-commit hook (`.git/hooks/pre-commit`) refreshes that stamp on every commit that touches the pages or `assets/`.
  The hook is not stored in git: if this repo is ever re-cloned, recreate it, or bump the `?v=` numbers by hand.
- Share the main link with staff, not `/app.html` directly.
