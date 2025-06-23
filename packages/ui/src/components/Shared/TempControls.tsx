import { ControlType } from 'framer'
import { m } from '@/modules'

export function ChangeColorButton() {
  const [, setColor1] = m.useQueryState('color1')

  return <button onClick={() => setColor1('#0D77E0')}>useQueryState</button>
}

export function ChangeButton2({ url }) {
  return (
    <button
      onClick={() => {
        console.log('m', m)
        console.log('url', url)
        m.updateGradientState(url)
      }}
    >
      ChangeButton2
    </button>
  )
}

export function ChangeButton3({ url }) {
  const setQueryValue = m.useURLQueryState()

  return <button onClick={() => setQueryValue(url)}>setQueryValue</button>
}

ChangeButton2.propertyControls = {
  url: {
    type: ControlType.String,
  },
}
ChangeButton3.propertyControls = {
  url: {
    type: ControlType.String,
  },
}
