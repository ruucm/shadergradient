import { expect, test } from '@playwright/test'
import { PNG } from 'pngjs'

test('mounts and remounts without Vue lifecycle warnings', async ({ page }) => {
  const warnings: string[] = []
  page.on('console', (message) => {
    if (
      message.type() === 'warning' &&
      /provide\(\)|Slot "default"|onUnmounted/.test(message.text())
    ) {
      warnings.push(message.text())
    }
  })
  await page.goto('/')
  await expect(page.locator('canvas').first()).toBeVisible()
  await page.getByRole('checkbox', { name: 'Pause animation' }).check()
  const wrapper = page
    .locator('div[aria-hidden="true"]')
    .filter({ has: page.locator('canvas') })
    .first()
  await wrapper.evaluate((element) => {
    element.setAttribute('data-lifecycle-check', '')
    ;(element as HTMLElement).style.marginTop = '200vh'
  })
  await expect(page.locator('canvas')).toHaveCount(0)
  await page.locator('[data-lifecycle-check]').evaluate((element) => {
    ;(element as HTMLElement).style.marginTop = ''
  })
  await expect(page.locator('canvas').first()).toBeVisible()
  expect(warnings).toEqual([])
})

test('renders an animated gradient and supports pause', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  await page.goto('/')
  const canvas = page.locator('canvas').first()
  await expect(canvas).toBeVisible()
  await expect
    .poll(async () => {
      const image = PNG.sync.read(await canvas.screenshot())
      const colors = new Set<string>()
      for (let offset = 0; offset < image.data.length; offset += 400) {
        colors.add(image.data.subarray(offset, offset + 3).toString('hex'))
      }
      return colors.size
    })
    .toBeGreaterThan(20)
  const initial = await canvas.screenshot()
  await expect
    .poll(async () => (await canvas.screenshot()).equals(initial))
    .toBe(false)
  await page.getByRole('checkbox', { name: 'Pause animation' }).check()
  await expect(
    page.getByRole('checkbox', { name: 'Pause animation' })
  ).toBeChecked()
  await page.evaluate(
    () =>
      new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
      )
  )
  const paused = await canvas.screenshot()
  expect((await canvas.screenshot()).equals(paused)).toBe(true)
  expect(errors).toEqual([])
})

test('respects reduced motion and fits the viewport', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const canvas = page.locator('canvas').first()
  await expect(canvas).toBeVisible()
  await page.evaluate(
    () =>
      new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
      )
  )
  const initial = await canvas.screenshot()
  expect((await canvas.screenshot()).equals(initial)).toBe(true)
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth
    )
  ).toBe(true)
})

test('Nuxt serves a fallback without a server canvas', async ({
  request,
}, testInfo) => {
  test.skip(!testInfo.project.name.startsWith('nuxt'))
  const response = await request.get('/')
  expect(response.ok()).toBe(true)
  const html = await response.text()
  expect(html).toContain('data-gradient-fallback')
  expect(html).not.toMatch(/<canvas(?:\s|>)/)
})
