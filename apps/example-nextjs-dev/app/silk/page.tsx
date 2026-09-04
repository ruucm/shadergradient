'use client'

import {
  ShaderGradientCanvas,
  ShaderGradient,
  presets,
} from '@shadergradient/react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

// Renders a silk preset full-screen (?preset=aurora, default: silk). Any
// preset prop can be overridden via the query string for quick tuning,
// e.g. /silk?preset=pearl&uStrength=1
function SilkDemo() {
  const params = useSearchParams()
  const overrides: Record<string, any> = {}
  params.forEach((value, key) => {
    const n = Number(value)
    overrides[key] = value === '' || Number.isNaN(n) ? value : n
  })

  const { preset = 'silk', ...rest } = overrides
  const base = (presets as any)[preset] ?? presets.silk
  const props = { ...base.props, ...rest } as any

  return (
    <div className='h-screen w-screen bg-black'>
      <ShaderGradientCanvas
        pixelDensity={props.pixelDensity}
        fov={props.fov}
        preserveDrawingBuffer
      >
        <ShaderGradient {...props} />
      </ShaderGradientCanvas>
    </div>
  )
}

export default function Page() {
  return (
    <Suspense>
      <SilkDemo />
    </Suspense>
  )
}
