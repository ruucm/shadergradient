import { PRESETS } from '@/store'
import { PresetTitle } from './PresetTitle'

export function PresetTitles({
  isMobile = false,
  fontSize = 120,
  arrowOn = true,
  isFramerCanvas = false,
}) {
  return (
    <>
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
            isFramerCanvas={isFramerCanvas}
          ></PresetTitle>
        )
      })}
    </>
  )
}
