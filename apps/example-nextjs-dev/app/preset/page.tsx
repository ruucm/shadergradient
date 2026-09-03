'use client'

import { ShaderGradientCanvas, ShaderGradient, presets } from '@shadergradient/react'
import { useEffect, useState } from 'react'

type PresetProps = Record<string, unknown>

// Full-screen preset preview: /preset?name=silk&uSpeed=0.2&color1=%23ff0000
// Any query param overrides the matching preset prop (numbers are parsed).
export default function PresetPreview() {
  const [props, setProps] = useState<PresetProps | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const name = params.get('name') || 'halo'
    const preset =
      (presets as Record<string, { props: PresetProps }>)[name] || presets.halo

    const overrides: PresetProps = {}
    params.forEach((value, key) => {
      if (key === 'name') return
      const num = Number(value)
      overrides[key] = value !== '' && !Number.isNaN(num) ? num : value
    })

    setProps({ ...preset.props, ...overrides })
  }, [])

  if (!props) return null

  return (
    <div className='h-screen w-screen'>
      <ShaderGradientCanvas>
        <ShaderGradient {...props} />
      </ShaderGradientCanvas>
    </div>
  )
}
