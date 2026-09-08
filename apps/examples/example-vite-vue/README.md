# ShaderGradient Vue + Vite Starter

Standalone consumer example, outside the monorepo workspace. It has no workspace
dependencies or imports from development examples. Requires Node 22.19+, 24.11+,
or 26+ within the package's engine ranges.

## Before Publication

`@shadergradient/vue` is not published yet. This starter uses a local package
tarball so it exercises the files users will install, not repository source.
From the repository root:

```sh
pnpm install
pnpm --filter @shadergradient/vue build
pnpm --dir packages/shadergradient-vue pack --pack-destination "$PWD/apps/examples/example-vite-vue"
cd apps/examples/example-vite-vue
pnpm install
pnpm dev
```

Open http://localhost:3007. The generated tarball is ignored by Git. To use this
folder outside the repository before publication, include that tarball when copying
it. Repack and reinstall after changing the library; this is not a live source link.

After publication, replace the tarball dependency by running
`pnpm add @shadergradient/vue@<published-version>` and refresh
the lockfile. Do not point to a registry version until it exists.

## Checks

Keep this starter's `pnpm-workspace.yaml` and `patches/` directory when copying
it. They contain native build approvals and the TresJS 4.3.6 lifecycle patch.
Do not use `--ignore-workspace`: it bypasses those local policies. Installing
the library alone does not apply the consumer-side Tres patch.

```sh
pnpm lint
pnpm build
```

ESLint uses `@nuxt/eslint-config` directly. There is no Nuxt runtime or Nuxt module
in this Vite app. The canvas is decorative, respects reduced motion, and has an
explicit pause control. Browser/WebGL validation is separate from these checks.