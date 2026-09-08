# Vue/Nuxt Browser Checks

From the repository root:

```sh
pnpm install
pnpm exec playwright install chromium
pnpm test:e2e
```

The preparation command builds the library, packs it into both standalone starters,
and installs their independent dependencies. Repacking can update their lockfile
integrity hashes. This ensures standalone tests exercise the current packaged code.

Playwright starts and stops its own servers on ports 3105-3108. It does not reuse
the normal development servers. Those ports must be free.

Five named targets each run with desktop and mobile-sized Chromium viewports:

- `vue-library`: the library hosted by the Vue development app.
- `vue-dev`: the Vue development app (the same host, intentionally shared).
- `nuxt-dev`: the Nuxt development app.
- `vue-standalone`: the independently installed Vite starter.
- `nuxt-standalone`: the independently installed Nuxt starter.

The library target is integration coverage through its consumer, not an isolated
unit or component test. Mobile projects use Chromium emulation, not real devices.

```sh
pnpm exec playwright test --project=vue-library
pnpm exec playwright test --project=nuxt-dev-mobile
```

Run `pnpm prepare:e2e` before these focused commands when library code changes.

## GitHub Actions

The [Playwright workflow](../../.github/workflows/playwright.yml) runs all five
targets on pull requests to `main`, pushes to `main`, and manual dispatches.
It checks out the triggering revision, uses Node 24 and the repository's pinned
pnpm, and runs `pnpm test:e2e`.

The pnpm store is cached using all three lockfiles. Chromium binaries in
`~/.cache/ms-playwright` are cached separately by runner OS, architecture,
Ubuntu version, and the installed Playwright version. Chromium is downloaded only
on a cache miss; unrelated lockfile edits do not invalidate the browser cache.
GitHub cache eviction or a Playwright upgrade can still require a fresh download.
Linux system dependencies are installed on every fresh runner, including cache hits.

Failure screenshots and traces are uploaded as `playwright-results` for 14 days.
The workflow does not publish packages or deploy the examples.

## Coverage

Checks cover visible, nonblank canvas pixels, animation, pause, reduced motion,
horizontal overflow, browser errors in the rendering test, and Nuxt's server-rendered
fallback. Nuxt-only checks are skipped for other projects. Failed runs retain
screenshots and traces under the Git-ignored `test-results/` directory.

Lifecycle regression checks fail on the `provide`, default-slot invocation, and
`onUnmounted` warnings during initial mount and offscreen unmount/remount.
The repository patches TresJS 4.3.6 to correct those lifecycle calls. This is
smoke coverage, not exhaustive GPU cleanup, preset, or cross-browser coverage.

To test alongside manual browser sessions, start all four apps on ports 3005-3008
and run `E2E_USE_DEV_SERVERS=1 pnpm exec playwright test`. This opts out of
Playwright-managed servers and avoids Nuxt's per-directory development-server lock.