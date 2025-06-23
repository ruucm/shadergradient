import { ControlType } from 'framer'
import {
  useQueryState,
  useURLQueryState,
} from '@/components/Shared/ShaderGradientStateless'

export function ChangeColorButton() {
  const [, setColor1] = useQueryState('color1')

  return <button onClick={() => setColor1('#0D77E0')}>useQueryState</button>
}

export function ChangeButton3({ url }) {
  const setQueryValue = useURLQueryState()

  return <button onClick={() => setQueryValue(url)}>setQueryValue</button>
}
ChangeButton3.propertyControls = {
  url: {
    type: ControlType.String,
  },
}
