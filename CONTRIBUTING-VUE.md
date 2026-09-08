# Contributing to Vue/Nuxt Support

## Development

The Vue package is not published yet. The consumer README describes the intended
released API; use the workspace apps or packed starters while reviewing this PR.

From the repository root:

```sh
pnpm install
pnpm --filter @shadergradient/vue build
pnpm --filter example-vue-dev dev
```

Use `pnpm --filter example-nuxtjs-dev dev` for Nuxt. The Vue development app uses
port 3005 and Nuxt uses 3006. Run `pnpm --filter @shadergradient/vue dev` in a
separate terminal when editing the library; the apps consume its built output.

For independent packaged consumers, follow the tarball instructions in the
[Vue starter](apps/examples/example-vite-vue/README.md) and
[Nuxt starter](apps/examples/example-nuxtjs/README.md). The
[example index](apps/examples/README.md) explains workspace versus standalone use.

## Validation

```sh
pnpm --filter @shadergradient/vue typecheck
pnpm --filter @shadergradient/vue lint
pnpm --filter @shadergradient/vue build
pnpm --filter example-vue-dev lint
pnpm --filter example-vue-dev build
pnpm --filter example-nuxtjs-dev lint
pnpm --filter example-nuxtjs-dev typecheck
pnpm --filter example-nuxtjs-dev build
pnpm exec playwright install chromium
pnpm test:e2e
```

The library and Vite examples use `@nuxt/eslint-config`; Nuxt apps use
`@nuxt/eslint`. Browser preparation verifies that each standalone install's
JavaScript and declarations match the fresh library build. See the
[browser test guide](tests/browser/README.md) for coverage and limitations.

## Before Release

After publication, replace standalone tarball dependencies with the actual
published version and refresh their lockfiles. The changeset belongs in the PR;
the maintainer can combine it with other changesets when preparing a release.