import { ShaderGradientCanvas } from 'shadergradient'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <ShaderGradientCanvas pointerEvents='auto' {...props}>
      {children}
    </ShaderGradientCanvas>
  )
}
