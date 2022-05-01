import * as React from 'react'
import { useQueryState } from '../../../hooks/index'
import { Radio } from '../../../Radio'
import { InputPanel } from '../InputPanel'

type ToolsPropsT = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Tools: React.FC<ToolsPropsT> = () => {
  const [wireframe, setWireframe] = useQueryState('wireframe')
  const [axesHelper, setAxesHelper] = useQueryState('axesHelper')
  const [gizmoHelper, setGizmoHelper] = useQueryState('gizmoHelper')

  return (
    <div className='flex flex-col gap-3'>
      <InputPanel title='Wireframe'>
        <Radio
          name='wireframe'
          value='enable'
          setValue={setWireframe}
          check={wireframe === 'enable'}
          label='On'
        />
        <Radio
          name='wireframe'
          value='false'
          setValue={setWireframe}
          check={wireframe === 'false'}
          label='Off'
        />
      </InputPanel>

      <InputPanel title='Axes'>
        <Radio
          name='axesHelper'
          value='on'
          setValue={setAxesHelper}
          check={axesHelper === 'on'}
          label='On'
        />
        <Radio
          name='axesHelper'
          value='off'
          setValue={setAxesHelper}
          check={axesHelper === 'off'}
          label='Off'
        />
      </InputPanel>

      <InputPanel title='Gizmo'>
        <Radio
          name='gizmoHelper'
          value='show'
          setValue={setGizmoHelper}
          check={gizmoHelper === 'show'}
          label='On'
        />
        <Radio
          name='gizmoHelper'
          value='hide'
          setValue={setGizmoHelper}
          check={gizmoHelper === 'hide'}
          label='Off'
        />
      </InputPanel>
    </div>
  )
}
