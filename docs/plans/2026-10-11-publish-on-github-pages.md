# Publish on GitHub Pages: safety and security plan

_2026-10-11._ The repo is public (GitHub Pages is free only for public repos) and Pages serves the
Vite build. The game is fully static, so the attack surface is small: the git history, the
dependencies, the save import, and the deploy workflow.

**Status, 2026-10-11:**

- **Shipped.** PRs #150 (into `devel`) and #151 (into `main`); the first deploy (run 38161409289)
  succeeded, and the site is live at https://gmartpad.github.io/press_enter/.
- Still open:
  - importing a save exported from the old site (phase 4);
  - the custom-domain switch (below);
  - Dependabot's PR #152 (vite 5.4.21 → 6.4.3), which fixes the 4 dev-server advisories. It targets
    `main` directly, and nothing checks it, so test it before merging.

**Audit, 2026-10-11:**

- **History is clean.** 274 commits, no secret-looking strings; the only env file ever committed is
  `.env.example` (a placeholder), and `.gitignore` covers every `.env` variant.
- **14 advisories in shipped dependencies** (1 critical, 7 high), none reachable from this code.
- **One real data-loss bug** in the save import (step 1.2).

## What changed during implementation

- **The repo went public before phases 0 and 1.** The commit emails are already published, and
  gitleaks is redundant: GitHub's secret scanning covers the whole history of a public repo.
- **The Vercel site is gone.** `pressenter.vercel.app` now serves an unrelated app ("PressEnter ·
  Razorpay webhook"), and the last three production deployment URLs return 404. As a result:
  - there is no move to manage;
  - the old `VITE_ENCODE_KEY` can't be read from a live bundle (phase 2);
  - the repo's About link points to someone else's site (phase 4);
  - `base` is hardcoded to `/press_enter/`.
- **`BroadcastProvider` had a second bug under the `localStorage.get` one.** The `!activeTab` branch
  never cleared `accessDeniedRef`. Once closing a tab really cleared `activeTab` (step 1.4), every
  player with a save got the "another tab is open" screen. The same gap let a second tab in on a
  first visit. Fixed in the same file; caught in the browser, not the build.
- **`yarn upgrade` exposed a type error.** A leftover `@types/react` 18 had been declaring the global
  `JSX` namespace. With everything on 19.3.0, `languages.ts` now imports `JSX` from `react`.
- **`LoadSaveStringButton` isn't rendered anywhere.** The live import is `ImportSaveFileDialog`. Both
  are fixed; delete the unused component when convenient.
- **The validators moved to `src/utils/saveValidators.ts`**, so a plain-Node check
  (`src/utils/saveValidators.check.ts`, run by `yarn test`) can cover them. It failed against the
  old logic first, and the workflow runs it before every build.
- **Four advisories remain, all in the Vite dev server** (vite < 6.4.3, esbuild < 0.25). Accepted:
  they affect `vite dev` only, never the static build, and the main one exposes dev-server source,
  which is public now. Upgrading to Vite 6+ is a separate task.

## Phase 0: decisions

- [x] **Commit emails.** **Settled 2026-10-11:** they went public with the repo. Still worth doing:
  GitHub → Settings → Emails → "Keep my email addresses private" and "Block command line pushes
  that expose my email".
- [x] **A second secret scan.** **Done 2026-10-11:** GitHub secret scanning, which covers the full
  history, instead of gitleaks.
- [x] **Domain.** **Changed 2026-10-11:** `pressingenter.com` (on Cloudflare) becomes the Pages
  custom domain; see "Custom domain" below. It puts `ads.txt` at the root and gives the game its own
  origin, separate from any other `*.github.io` site. `gmartpad.github.io/press_enter/` redirects
  there.

## Phase 1: code

- [x] **1.1 Dependencies.** **Done 2026-10-11:**
  - `yarn upgrade` brought lodash 4.18.1, styled-components 6.5.3 (no postcss in the tree) and
    vite 5.4.21.
  - `swiper@^12.1.2` resolved to 12.2.0; the mobile slider was checked in the browser.
  - Shipped advisories: 14 → 0. All advisories: 114 → 4 (dev server only, see above).
- [x] **1.2 Validate imported saves.** **Done 2026-10-11:**
  - `validateArray` rejects non-arrays.
  - `validateObject` rejects arrays and merges the save over the current or default config.
- [x] **1.3 Stop the import from deleting saves.** **Done 2026-10-11:**
  - The `removeItem('gameState')` failure branches are gone.
  - `LoadSaveStringButton` no longer writes the save to storage before loading it.
- [x] **1.4 `localStorage.get` → `getItem`.** **Done 2026-10-11**, plus the `accessDeniedRef` fix
  above.
- [x] **1.5 Deploy needs.** **Done 2026-10-11:**
  - `base: '/press_enter/'`.
  - `@vercel/analytics` and `@vercel/speed-insights` removed.

**Checked in a browser on 2026-10-11**, against a local preview of the Pages build:

- the game renders under `/press_enter/` with no console errors;
- a save with `autoIncrementors: 5`, `upgrades: 5` and a partial config survives both a reload and
  the file import (bad fields fall back, good ones are kept);
- a second tab gets the "another tab is open" screen;
- the swiper 12 slider has 3 slides and stops at both ends.

## Phase 2: repo settings

- [x] **Visibility: Public.** Done by you, 2026-10-11.
- [x] **Secret scanning and push protection.** **Done 2026-10-11** through the API. Dependabot
  alerts were already on.
- [x] **Dependabot security updates.** **Done 2026-10-11**, after the upgrade reached `main`.
  Turning them on earlier would have opened a pull request for every vulnerable version still on
  `main`.
- [x] **`VITE_ENCODE_KEY` secret.** **Done 2026-10-11:** set to the old Vercel key, so saves
  exported from the old site keep importing. A local build with it embeds the key and drops the
  `'your-key-here'` fallback. **Never change it:** once players save on Pages, a new key makes their
  saves unreadable.
- [x] **Pages source: GitHub Actions.** **Done 2026-10-11** through the API, with HTTPS enforced.
  GitHub created the `github-pages` environment with a policy that lets only `main` deploy.

## Phase 3: the deploy workflow

- [x] **`.github/workflows/deploy.yml`.** **Done 2026-10-11.** It's Vite's documented workflow,
  switched to yarn, plus:
  - a frozen lockfile;
  - `yarn test` before the build;
  - a guard that fails the build when `VITE_ENCODE_KEY` is missing.

  The actions are pinned to commit hashes, verified against each repo's tags. The security choices:
  - **Push to `main` only:** a fork's pull request can't deploy.
  - **Minimal permissions:** only what Pages needs.
  - **`--frozen-lockfile`:** the build installs exactly what was reviewed.
  - **The key guard:** a missing secret fails the run instead of silently building with
    `'your-key-here'`.

## Phase 4: after the first deploy

- [x] **The site loads and the console is clean.** **Done 2026-10-11:** 200, assets under
  `/press_enter/`, no console errors or warnings; the game renders and autosaves.
- [ ] A save exported from the old site imports, if you still have one.
- [x] **Security tab.** **Done 2026-10-11:** 0 secret-scanning alerts; open Dependabot alerts went
  from 64 to 4, the dev-server ones. Leave those open: security updates may propose the Vite 6
  upgrade that fixes them.
- [x] **The deploy log doesn't show the key.** **Done 2026-10-11:** it appears 0 times in the log of
  run 38161409289.
- [x] **Repo About link.** **Done 2026-10-11:** it now points to
  https://gmartpad.github.io/press_enter/ instead of someone else's app.

## Custom domain: pressingenter.com

One deploy serves it. With a Pages custom domain, every push to `main` updates `pressingenter.com`,
and the `github.io` URL redirects there. No second pipeline is needed.

- [x] **Relative asset URLs.** **Done 2026-10-11:** `base: './'`, so one build works both at
  `/press_enter/` and at the root. Both paths were served locally from a build with the real key.
  Starting from a rich save and pressing Enter loaded the lazy assets too: 31 JS chunks, 10 PNGs,
  4 WAVs and the font, with no failures, and `/ads.txt` responds with a 200 at the root. Deploy
  this before setting the custom domain, because a `/press_enter/` build breaks at the root.
- [x] **Cloudflare DNS.** **Done 2026-10-11:** the root and `www` are both
  `CNAME gmartpad.github.io`, set to "DNS only", and they resolve to GitHub's four IPs. The old
  Vercel records (`A 76.76.21.21`, `CNAME cname.vercel-dns.com`) are gone, which closes the
  dangling DNS. The Resend email records and the AWS certificate validation record are untouched.
- [x] **Verify the domain on GitHub.** **Done 2026-10-11** at github.com/settings/pages. Keep the
  `_github-pages-challenge-gmartpad` TXT record in Cloudflare. Now no other GitHub account can
  claim the domain for its Pages site.
- [ ] **Set the custom domain**, once the relative build is live and DNS points at GitHub:
  `gh api -X PUT repos/gmartpad/press_enter/pages -f cname=pressingenter.com`. Then enforce HTTPS
  once the certificate is issued.
- [ ] **About link and AdSense.** Point the About link at `https://pressingenter.com/`, and add the
  site in AdSense.
- Saves made on `gmartpad.github.io` since today's launch don't carry over, because they belong to a
  different origin. Switching now limits that to launch-day testing.

## The move

~~Keep Vercel running while players move.~~ **Cut 2026-10-11:** the Vercel site is gone. Saves
stored on the old domain stay with that domain, and only exported saves can come across (see the
key decision in phase 2).

## Not doing

- **A `<meta>` Content Security Policy:** Pages can't send headers, and a meta CSP would need
  AdSense's whole domain list and still can't set `frame-ancestors`. Lots of upkeep for little gain.
- **Clickjacking protection:** it needs headers Pages can't send, and a clicker game has nothing
  sensitive to hijack.
- **`SECURITY.md`, private vulnerability reporting, branch protection:** a static single-player game
  with one maintainer.
- **Dependabot version updates:** security updates already cover vulnerable packages; routine
  version bumps are noise.
- **Separate build and deploy jobs, `persist-credentials: false`:** a compromised build dependency
  can already change what gets deployed, so isolating the deploy token adds nothing here.
- **Real save encryption or signing:** the key ships in the JavaScript, and a cheater only affects
  their own save.
