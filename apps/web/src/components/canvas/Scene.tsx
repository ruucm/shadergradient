import { ShaderGradientCanvas } from 'shadergradient'
// import { GradientCanvas } from 'https://ruucm.github.io/shadergradient/shadergradient@1.1.5/index.mjs' // Also ESM version available (Types are not supported)

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <ShaderGradientCanvas pointerEvents='auto' {...props}>
      {children}
    </ShaderGradientCanvas>
  )
}
