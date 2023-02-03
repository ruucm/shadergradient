import * as React from 'react'
import { useQueryState } from '@/store'

export const Background = () => {
  const [bgColor1] = useQueryState('bgColor1')
  const [bgColor2] = useQueryState('bgColor2')

  return (
    <div
      style={{
        background: `linear-gradient(40deg, ${bgColor1} 0%, ${bgColor2} 100%)`,
        width: '100%',
        height: '100%',
      }}
    />
  )
}
