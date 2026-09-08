import { expect, test } from '@playwright/test'
import type { Page } from '@playwright/test'
import { PNG } from 'pngjs'

async function update(page: Page, props: Record<string, unknown>, count = 1) {
  await page.evaluate(
    async ({ props, count }) => {
      await (
        window as unknown as {
          gradientFixture: {
            update: (props: object, count: number) => Promise<void>
          }
        }
      ).gradientFixture.update(props, count)
    },
    { props, count }
  )
}

test('presets can be switched', async ({ page }, info) => {
  test.skip(!['vue-dev', 'nuxt-dev'].includes(info.project.name))
  await page.goto('/')
  await page.getByRole('checkbox', { name: 'Pause animation' }).check()
  const canvas = page.locator('canvas').first()
  await expect(canvas).toBeVisible()
  const before = await canvas.screenshot()
  await page.getByRole('combobox', { name: /Preset/ }).selectOption('mint')
  await expect
    .poll(async () => (await canvas.screenshot()).equals(before))
    .toBe(false)
})

test('Nuxt navigation unmounts and recreates the canvas', async ({
  page,
}, info) => {
  test.skip(info.project.name !== 'nuxt-dev')
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await expect(page.locator('canvas')).toBeVisible()
  await page.getByRole('link', { name: 'Away', exact: true }).click()
  await expect(page).toHaveURL(/\/away$/)
  await expect(page.locator('canvas')).toHaveCount(0)
  await page.getByRole('link', { name: 'Back to gradient' }).click()
  await expect(page.locator('canvas')).toBeVisible()
  expect(errors).toEqual([])
})

test('HDR loading, failure fallback and texture disposal', async ({
  page,
}, info) => {
  test.skip(info.project.name !== 'vue-library')
  const requests: string[] = []
  const hdr = Buffer.concat([
    Buffer.from('#?RADIANCE\nFORMAT=32-bit_rle_rgbe\n\n-Y 2 +X 2\n'),
    Buffer.from([
      128, 64, 32, 129, 32, 128, 64, 129, 64, 32, 128, 129, 128, 128, 128, 129,
    ]),
  ])
  await page.route('**/hdr/*.hdr', async (route) => {
    requests.push(new URL(route.request().url()).pathname)
    await route.fulfill(
      route.request().url().endsWith('dawn.hdr')
        ? { status: 404, body: 'Not found' }
        : { status: 200, contentType: 'application/octet-stream', body: hdr }
    )
  })
  await page.goto('/coverage.html')
  await expect(page.locator('canvas')).toBeVisible()
  await update(page, { lightType: 'env', envPreset: 'city' })
  await expect.poll(() => requests).toEqual(['/hdr/city.hdr'])
  await page.locator('canvas').screenshot()
  await update(page, { envPreset: 'dawn' })
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          (
            window as unknown as {
              gradientFixture: { events: { errors: number } }
            }
          ).gradientFixture.events.errors
      )
    )
    .toBe(1)
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          (
            window as unknown as {
              gradientFixture: { events: { texture: number } }
            }
          ).gradientFixture.events.texture
      )
    )
    .toBeGreaterThan(0)
  await expect(page.locator('canvas')).toBeVisible()
  expect(requests).toEqual(['/hdr/city.hdr', '/hdr/dawn.hdr'])
})

test('shader geometry matrix, query, camera, multiple canvases and disposal', async ({
  page,
}, info) => {
  test.skip(info.project.name !== 'vue-library')
  test.setTimeout(180000)
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  await page.goto('/coverage.html')
  const canvas = page.locator('canvas').first()
  await expect(canvas).toBeVisible()
  for (const shader of ['defaults', 'positionMix', 'cosmic', 'glass']) {
    for (const type of ['plane', 'waterPlane', 'sphere']) {
      await update(page, { shader, type, cameraZoom: 8 })
      await expect
        .poll(
          async () => {
            const image = PNG.sync.read(await canvas.screenshot())
            const colors = new Set<string>()
            for (let offset = 0; offset < image.data.length; offset += 400)
              colors.add(
                image.data.subarray(offset, offset + 3).toString('hex')
              )
            return colors.size
          },
          { message: `${shader}/${type} renders pixels` }
        )
        .toBeGreaterThan(20)
      expect(errors, `${shader}/${type}`).toEqual([])
    }
  }
  await update(page, {
    shader: 'defaults',
    type: 'plane',
    enableTransition: false,
    control: 'props',
    color1: '#123456',
    uTime: 2,
  })
  const direct = await canvas.screenshot()
  await update(page, {
    control: 'query',
    urlString:
      '?shader=defaults&type=plane&color1=%23123456&uTime=2&enableTransition=false',
  })
  expect((await canvas.screenshot()).equals(direct)).toBe(true)
  await page.reload()
  await expect(canvas).toBeVisible()
  const cameraBefore = await canvas.screenshot()
  const eventCount = await page.evaluate(
    () =>
      (window as unknown as { gradientFixture: { events: { camera: number } } })
        .gradientFixture.events.camera
  )
  const box = await canvas.boundingBox()
  if (!box) throw new Error('Missing canvas bounds')
  await page.mouse.move(box.x + 200, box.y + 150)
  await page.mouse.down()
  await page.mouse.move(box.x + 280, box.y + 180, { steps: 8 })
  await page.mouse.up()
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          (
            window as unknown as {
              gradientFixture: { events: { camera: number } }
            }
          ).gradientFixture.events.camera
      )
    )
    .toBeGreaterThan(eventCount)
  await expect
    .poll(async () => (await canvas.screenshot()).equals(cameraBefore))
    .toBe(false)
  await update(page, { control: 'props' }, 2)
  await expect(page.locator('canvas')).toHaveCount(2)
  const before = await page.evaluate(() => ({
    ...(
      window as unknown as {
        gradientFixture: { events: Record<string, number> }
      }
    ).gradientFixture.events,
  }))
  await update(page, {}, 0)
  await expect(page.locator('canvas')).toHaveCount(0)
  const after = await page.evaluate(
    () =>
      (
        window as unknown as {
          gradientFixture: { events: Record<string, number> }
        }
      ).gradientFixture.events
  )
  expect(after.geometry).toBeGreaterThan(before.geometry)
  expect(after.material).toBeGreaterThan(before.material)
  expect(errors).toEqual([])
})
