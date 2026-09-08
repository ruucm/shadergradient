import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const root = fileURLToPath(new URL('../../', import.meta.url))
const pnpm = process.env.npm_execpath
if (!pnpm)
  throw new Error('Run this script through pnpm prepare:e2e or pnpm test:e2e')

function run(args) {
  execFileSync(process.execPath, [pnpm, ...args], {
    cwd: root,
    stdio: 'inherit',
  })
}

run(['--filter', '@shadergradient/vue', 'build'])
for (const name of ['example-vite-vue', 'example-nuxtjs']) {
  const directory = resolve(root, 'apps/examples', name)
  run([
    '--dir',
    'packages/shadergradient-vue',
    'pack',
    '--pack-destination',
    directory,
  ])
  run(['--dir', directory, 'install', '--no-frozen-lockfile'])
  for (const file of ['index.js', 'index.d.ts']) {
    assert.deepEqual(
      readFileSync(
        resolve(directory, 'node_modules/@shadergradient/vue/dist', file)
      ),
      readFileSync(resolve(root, 'packages/shadergradient-vue/dist', file)),
      `${name}: installed ${file} differs from the freshly built package; repack and reinstall`
    )
  }
  console.log(
    `${name}: installed JavaScript and declarations match the fresh build`
  )
}
