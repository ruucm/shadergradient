import React from 'react'
import { PRESETS } from '../../presets'
import { PresetTitle } from './PresetTitle'

export function PresetTitles({ isMobile = false }) {
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
            fontSize={isMobile ? 90 : 120}
          ></PresetTitle>
        )
      })}
    </>
  )
}
