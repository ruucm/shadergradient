import assert from 'assert/strict'
import { readFileSync, readdirSync } from 'fs'
import { join, resolve } from 'path'
import { advanceAnimationTime } from '../src/ShaderGradient/Mesh/animationTime'
import { EffectComposer } from '../src/ShaderGradient/PostProcessing/lib/pp/from-threejs/postprocessing/EffectComposer.js'

const test = (name: string, run: () => void) => {
  try {
    run()
    console.log(`✔ ${name}`)
  } catch (error) {
    console.error(`✘ ${name}`)
    throw error
  }
}

const assertClose = (actual: number, expected: number) => {
  assert.ok(
    Math.abs(actual - expected) < 1e-9,
    `Expected ${actual} to be close to ${expected}`
  )
}

const listSourceFiles = (directory: string): string[] =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)

    if (entry.isDirectory()) return listSourceFiles(path)
    return /\.(?:js|ts|tsx)$/.test(entry.name) ? [path] : []
  })

test('accumulates only the supplied frame delta', () => {
  const first = advanceAnimationTime(0, 0.25, {})
  const second = advanceAnimationTime(first.elapsedTime, 0.5, {})

  assert.deepEqual(first, { elapsedTime: 0.25, uTime: 0.25, uLoop: 0 })
  assert.deepEqual(second, { elapsedTime: 0.75, uTime: 0.75, uLoop: 0 })
})

test('supports pause and restart semantics without seeding from the uniform', () => {
  let elapsedTime = 0
  let uTime = 8

  const running = advanceAnimationTime(elapsedTime, 0.5, {})
  elapsedTime = running.elapsedTime
  uTime = running.uTime

  // animate='off' does not call the helper, so both values remain frozen.
  assert.equal(elapsedTime, 0.5)
  assert.equal(uTime, 0.5)

  // animate='on' resets the elapsed ref before the next frame.
  elapsedTime = 0
  const restarted = advanceAnimationTime(elapsedTime, 0.25, {})
  assert.deepEqual(restarted, { elapsedTime: 0.25, uTime: 0.25, uLoop: 0 })
})

test('offsets valid ranges and discards overshoot at the end boundary', () => {
  const config = { range: 'enabled', rangeStart: 2, rangeEnd: 5 }
  const beforeEnd = advanceAnimationTime(2.8, 0.1, config)
  const atEnd = advanceAnimationTime(beforeEnd.elapsedTime, 0.1, config)
  const afterReset = advanceAnimationTime(atEnd.elapsedTime, 0.25, config)

  assertClose(beforeEnd.uTime, 4.9)
  assertClose(beforeEnd.elapsedTime, 2.9)
  assert.deepEqual(atEnd, { elapsedTime: 0, uTime: 2, uLoop: 0 })
  assert.deepEqual(afterReset, { elapsedTime: 0.25, uTime: 2.25, uLoop: 0 })

  const overshoot = advanceAnimationTime(2.9, 0.5, config)
  assert.deepEqual(overshoot, { elapsedTime: 0, uTime: 2, uLoop: 0 })
})

test('falls back to unbounded time for invalid ranges', () => {
  const invalidRanges = [
    { range: 'enabled', rangeStart: 2, rangeEnd: 2 },
    { range: 'enabled', rangeStart: 3, rangeEnd: 2 },
    { range: 'enabled', rangeStart: Number.NaN, rangeEnd: 5 },
    { range: 'enabled', rangeStart: 2, rangeEnd: Number.POSITIVE_INFINITY },
    { range: 'disabled', rangeStart: 2, rangeEnd: 5 },
  ]

  for (const config of invalidRanges) {
    assert.deepEqual(advanceAnimationTime(1, 0.5, config), {
      elapsedTime: 1.5,
      uTime: 1.5,
      uLoop: 0,
    })
  }
})

test('wraps valid loops while retaining the raw elapsed time', () => {
  const frame = advanceAnimationTime(4.9, 0.2, {
    loop: 'on',
    loopDuration: 5,
  })

  assertClose(frame.elapsedTime, 5.1)
  assertClose(frame.uTime, 0.1)
  assert.equal(frame.uLoop, 1)
  assert.equal(frame.uLoopDuration, 5)

  const changedDuration = advanceAnimationTime(frame.elapsedTime, 0, {
    loop: 'on',
    loopDuration: 2,
  })
  assertClose(changedDuration.uTime, 1.1)

  const loopDisabled = advanceAnimationTime(frame.elapsedTime, 0, {
    loop: 'off',
    loopDuration: 5,
  })
  assertClose(loopDisabled.uTime, 5.1)
  assert.equal(loopDisabled.uLoopDuration, undefined)
})

test('gives valid loops precedence over ranges', () => {
  const frame = advanceAnimationTime(4.9, 0.2, {
    loop: 'on',
    loopDuration: 5,
    range: 'enabled',
    rangeStart: 10,
    rangeEnd: 12,
  })

  assertClose(frame.elapsedTime, 5.1)
  assertClose(frame.uTime, 0.1)
  assert.equal(frame.uLoop, 1)
})

test('invalid loop durations disable looping and fall through to ranges', () => {
  const invalidDurations = [0, -1, Number.NaN, Number.POSITIVE_INFINITY]

  for (const loopDuration of invalidDurations) {
    const frame = advanceAnimationTime(0.5, 0.25, {
      loop: 'on',
      loopDuration,
      range: 'enabled',
      rangeStart: 2,
      rangeEnd: 5,
    })

    assert.deepEqual(frame, { elapsedTime: 0.75, uTime: 2.75, uLoop: 0 })
  }
})

test('keeps elapsed state independent between animation instances', () => {
  const first = advanceAnimationTime(0, 0.25, {})
  const second = advanceAnimationTime(0, 1, {})
  const firstAgain = advanceAnimationTime(first.elapsedTime, 0.25, {})

  assert.equal(firstAgain.elapsedTime, 0.5)
  assert.equal(second.elapsedTime, 1)
})

test('does not use the deprecated Clock API in ShaderGradient-owned source', () => {
  const sourceRoot = resolve(process.cwd(), 'src/ShaderGradient')
  const clockReferences = listSourceFiles(sourceRoot)
    .filter((path) => /\bClock\b/.test(readFileSync(path, 'utf8')))
    .map((path) => path.slice(sourceRoot.length + 1))

  assert.deepEqual(clockReferences, [])
})

test('passes explicit and fallback frame deltas through EffectComposer', () => {
  const makeRenderTarget = () => ({
    width: 1,
    height: 1,
    texture: { name: '' },
    clone: makeRenderTarget,
    dispose: () => undefined,
    setSize: () => undefined,
  })
  let currentRenderTarget = null
  const renderer = {
    getRenderTarget: () => currentRenderTarget,
    setRenderTarget: (target) => {
      currentRenderTarget = target
    },
  }
  const composer = new EffectComposer(renderer, makeRenderTarget())
  const deltas: number[] = []

  composer.addPass({
    enabled: true,
    needsSwap: false,
    setSize: () => undefined,
    render: (_renderer, _writeBuffer, _readBuffer, deltaTime) => {
      deltas.push(deltaTime)
    },
  })

  composer.render(0.25)
  composer.render()
  composer.previousFrameTime = performance.now() - 100
  composer.render()

  assert.equal(deltas[0], 0.25)
  assert.equal(deltas[1], 0)
  assert.ok(deltas[2] >= 0.09)
})
