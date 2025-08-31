import { ShaderGradientCanvas } from '@shadergradient/react'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <ShaderGradientCanvas style={{ pointerEvents: 'auto' }} {...props}>
      {children}
    </ShaderGradientCanvas>
  )
}
