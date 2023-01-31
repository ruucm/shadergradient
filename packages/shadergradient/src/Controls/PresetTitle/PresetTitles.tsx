import { PRESETS, useUIStore } from '@/store'
import { PresetTitle } from './PresetTitle'

export function PresetTitles({
  isMobile = false,
  fontSize = 120,
  arrowOn = true,
}) {
  const activePreset = useUIStore((state) => state.activePreset)
  const isDefaultPreset = activePreset === -1

  return (
    <>
      {isDefaultPreset && (
        <PresetTitle
          index={0}
          color={PRESETS[0].color}
          key={0}
          title={
            0 < 10
              ? '0' + Number(0).toString() + ' ' + PRESETS[0].title
              : Number(0).toString() + ' ' + PRESETS[0].title
          }
          isMobile={isMobile}
          arrowOn={arrowOn}
          fontSize={fontSize}
          isDefaultPreset
        />
      )}
      {PRESETS.map((item, index) => {
        return (
          <PresetTitle
            index={index}
            color={item.color}
            key={index}
            title={
              index < 10
                ? '0' + index.toString() + ' ' + item.title
                : index.toString() + ' ' + item.title
            }
            isMobile={isMobile}
            arrowOn={arrowOn}
            fontSize={fontSize}
          />
        )
      })}
    </>
  )
}
