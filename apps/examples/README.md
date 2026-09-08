# Standalone Examples

These folders are consumer starters, not workspace development apps. The root
workspace globs deliberately exclude `apps/examples/*`. Each starter owns its
dependencies and configuration. The Vue/Nuxt starters have their own
`pnpm-workspace.yaml`: run `pnpm install` inside their folders so their local
build approvals and Tres lifecycle patches are applied. The React starters,
which do not have a local workspace file, use `pnpm install --ignore-workspace`
while inside this repository.

| Starter | Framework | ShaderGradient dependency |
| --- | --- | --- |
| [example-nextjs](./example-nextjs/README.md) | Next.js / React | Published React package |
| [example-vite-react](./example-vite-react/README.md) | Vite / React | Published React package |
| [example-vite-vue](./example-vite-vue/README.md) | Vite / Vue | Local release tarball until publication |
| [example-nuxtjs](./example-nuxtjs/README.md) | Nuxt / Vue | Local release tarball until publication |

The Vue package is not on npm yet. The new starters document how to build and
pack it into each example directory. Generated tarballs and installed dependencies
are ignored by Git; the source and standalone lockfiles are tracked. A clean
checkout needs the documented pack step before installation. Copy the tarball too
when moving a starter outside the repository before publication.

Once the Vue package is published, replace the local tarball dependencies with an
actual published version and regenerate each starter's lockfile. These examples
must not depend on `workspace:*` packages or shared monorepo ESLint configuration.

For active library development, use `apps/example-vue-dev` or
`apps/example-nuxtjs-dev` instead. Those apps deliberately consume the local
workspace build. The standalone starters consume a snapshot of the packaged output
and need repacking and reinstallation after library changes.