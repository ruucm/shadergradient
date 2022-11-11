import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import { ThreeCanvas } from '@remotion/three'
import { useVideoConfig } from 'remotion'
import { LCanvas, Gradient } from 'shadergradient'

const uSpeed = 0.4
const remotionFrameFix = 1 / 80

export const GradientBackground = () => {
  const { width, height } = useVideoConfig()

  return (
    <LCanvas
      importedFiber={{
        ...fiber,
        ...drei,
        ...reactSpring,
        Canvas: ThreeCanvas,
      }}
      width={width}
      height={height}
      style={{
        position: 'absolute',
        top: 0,
      }}
    >
      <Gradient
        cDistance={2}
        cPolarAngle={125}
        uSpeed={uSpeed * remotionFrameFix}
      />
    </LCanvas>
  )
}
