# ShaderGradient Nuxt Starter

Standalone Nuxt 4 consumer example with SSR enabled, outside the monorepo
workspace. Requires Node 22.19+, 24.11+, or 26+ within the package's engine ranges.

## Before Publication

`@shadergradient/vue` is not published yet. This starter consumes a local package
tarball with no workspace dependencies or imports from repository source.
From the repository root:

```sh
pnpm install
pnpm --filter @shadergradient/vue build
pnpm --dir packages/shadergradient-vue pack --pack-destination "$PWD/apps/examples/example-nuxtjs"
cd apps/examples/example-nuxtjs
pnpm install
pnpm dev
```

Open http://localhost:3008. Include the generated, Git-ignored tarball when copying
this folder outside the repository before publication. Repack and reinstall after
changing the library.

After publication, run
`pnpm add @shadergradient/vue@<published-version>` to replace
the tarball dependency and update the lockfile. No registry version is assumed
to exist yet.

## Nuxt Integration

Keep this starter's `pnpm-workspace.yaml` and `patches/` directory when copying
it. They contain native build approvals and the TresJS 4.3.6 lifecycle patch.
Do not use `--ignore-workspace`: it bypasses those local policies. Installing
the library alone does not apply the consumer-side Tres patch.

The page imports the components directly. `ShaderGradientCanvas` renders its
fallback on the server and initializes WebGL only after browser mounting. There
is no ShaderGradient Nuxt module or need to disable SSR for the page. The fixed
height reserves space before hydration; the pause control complements automatic
reduced-motion handling.

`@nuxt/eslint` generates the project-aware lint configuration during `nuxt prepare`.

```sh
pnpm lint
pnpm typecheck
pnpm build
```

These commands do not verify browser hydration, GLSL compilation, or visual output.