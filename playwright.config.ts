import { defineConfig } from '@playwright/test'

const useDevServers = process.env.E2E_USE_DEV_SERVERS === '1'
const apps = [
  {
    name: 'vue-library',
    port: 3105,
    command: 'pnpm --filter example-vue-dev dev --port 3105',
  },
  {
    name: 'vue-dev',
    port: 3105,
    command: 'pnpm --filter example-vue-dev dev --port 3105',
  },
  {
    name: 'nuxt-dev',
    port: 3106,
    command: 'pnpm --filter example-nuxtjs-dev dev --port 3106',
  },
  {
    name: 'vue-standalone',
    port: 3107,
    command: 'pnpm --dir apps/examples/example-vite-vue dev --port 3107',
  },
  {
    name: 'nuxt-standalone',
    port: 3108,
    command: 'pnpm --dir apps/examples/example-nuxtjs dev --port 3108',
  },
]

export default defineConfig({
  testDir: './tests/browser',
  workers: 1,
  timeout: 60000,
  expect: { timeout: 15000 },
  reporter: 'list',
  use: {
    browserName: 'chromium',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: apps.flatMap(({ name, port }) => [
    {
      name,
      use: {
        baseURL: `http://localhost:${useDevServers ? port - 100 : port}`,
        viewport: { width: 1280, height: 900 },
      },
    },
    {
      name: `${name}-mobile`,
      use: {
        baseURL: `http://localhost:${useDevServers ? port - 100 : port}`,
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ]),
  webServer: useDevServers
    ? []
    : apps
        .filter((app) => app.name !== 'vue-library')
        .map(({ port, command }) => ({
          command: command.replace(
            /^pnpm/,
            process.env.npm_execpath
              ? `"${process.execPath}" "${process.env.npm_execpath}"`
              : 'corepack pnpm'
          ),
          url: `http://localhost:${port}`,
          reuseExistingServer: false,
          timeout: 120000,
        })),
})
