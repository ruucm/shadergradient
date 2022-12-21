import { GradientCanvas } from 'shadergradient'
import { usePresetToStore } from 'shadergradient/controls'

export default function Scene({ children, ...props }) {
  usePresetToStore()

  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <GradientCanvas pointerEvents='auto' {...props}>
      {children}
    </GradientCanvas>
  )
}
