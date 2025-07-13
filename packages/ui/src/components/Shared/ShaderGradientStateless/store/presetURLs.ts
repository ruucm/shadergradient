import { presets } from '@shadergradient/react'

export const initialActivePreset = 0

export const PRESETS = convertPresets(presets)

// export const DEFAUlT_PRESET = '?pixelDensity=1&fov=45'
export const DEFAUlT_PRESET = PRESETS[0].url

function convertPresets(presets: Record<string, any>) {
  const PRESETS = Object.entries(presets).map(([key, value]) => {
    const { title, color, props } = value

    const urlParams = new URLSearchParams(
      Object.entries(props).reduce((acc, [propKey, propValue]) => {
        acc[propKey] =
          typeof propValue === 'boolean' ? String(propValue) : String(propValue)
        return acc
      }, {} as Record<string, string>)
    ).toString()

    return {
      title,
      color,
      url: `?${urlParams}`,
    }
  })

  return PRESETS
}
