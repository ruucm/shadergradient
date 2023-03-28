import { GradientCanvas } from 'shadergradient'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <GradientCanvas pointerEvents='auto' {...props}>
      {children}
    </GradientCanvas>
  )
}
