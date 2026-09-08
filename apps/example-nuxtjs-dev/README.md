# ShaderGradient Nuxt Development Example

Nuxt 4 example consuming the local `@shadergradient/vue` package. Requires Node
22.19+, 24.11+, or 26+ within the ranges in package.json.

From the repository root:

```sh
pnpm install
pnpm --filter @shadergradient/vue build
pnpm --filter example-nuxtjs-dev dev
```

Open http://localhost:3006. The standalone Vue/Vite example uses port 3005 and
the Next.js example uses port 3004.

SSR remains enabled. The page imports the Vue package directly, renders a fixed-height
fallback on the server, and lets `ShaderGradientCanvas` mount TresJS in the browser.
There is no Nuxt module, `.client.vue` wrapper, or `<ClientOnly>` hiding the package's
SSR behavior. Preset and pause controls exercise Vue reactivity after hydration.

```sh
pnpm --filter example-nuxtjs-dev lint
pnpm --filter example-nuxtjs-dev typecheck
pnpm --filter example-nuxtjs-dev build
pnpm --filter example-nuxtjs-dev preview
```

Run `pnpm --filter @shadergradient/vue dev` in a separate terminal while changing
the renderer. The example consumes its built output. Nuxt generates its type
configuration with `nuxt prepare` during installation.