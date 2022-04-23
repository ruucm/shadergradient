import React from 'react'
import { useQueryState } from '../hooks/index'
import { Radio } from './Radio'

export function ShapeControls() {
  const [shader, setShader] = useQueryState('shader')

  return (
    <div>
      <Radio
        name='shader'
        value='defaults'
        setValue={setShader}
        check={shader === 'defaults'}
        label='Defaults'
      />
      <Radio
        name='shader'
        value='snakeHalftone'
        setValue={setShader}
        check={shader === 'snakeHalftone'}
        label='SnakeHalftone'
      />
      <Radio
        name='shader'
        value='noise'
        setValue={setShader}
        check={shader === 'noise'}
        label='noise'
      />
    </div>
  )
}
