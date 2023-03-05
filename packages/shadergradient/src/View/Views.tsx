import { Canvas } from '@react-three/fiber'
import { useSceneContext } from './context'
import { View } from '@/drei/View'
import { Gradient } from '@/Gradient'
import { DEBUG } from './consts'
import { Box } from '..'

export function Views({ items }) {
  const ctx: any = useSceneContext()
  if (!ctx) return null

  return (
    <Canvas
      eventSource={ctx.container}
      resize={{ offsetSize: true }}
      style={{
        background: DEBUG ? 'hsla(100, 100%, 50%, 0.3)' : 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      {items.map((item, id) => (
        <View track={ctx.viewRefs[id]}>
          <Gradient control='props' color1={item.color1} grain={item.grain} />
          <Box position={[0, 0, 0]} color={item.color1} />
        </View>
      ))}
    </Canvas>
  )
}
