import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Depth, Fresnel, LayerMaterial } from 'lamina'
import { animateT } from '@/types'

type LaminaMaterialProps = {
  animate?: animateT
  color1?: string
  color2?: string
  color3?: string
  uSpeed?: number
  uTime?: number
  uDensity?: number
  uStrength?: number
  reflection?: number
}

export function LaminaMaterial({
  animate = 'on',
  color1 = '#ff0080',
  color2 = '#0aefff',
  color3 = '#ffffff',
  uSpeed = 0.6,
  uTime = 0,
  uDensity = 1,
  uStrength = 1,
  reflection = 0.35,
}: LaminaMaterialProps) {
  const materialRef = useRef<any>(null)

  const density = Math.max(uDensity, 0.2)
  const wave = Math.max(uStrength, 0.1)
  const span = 0.5 + wave * 0.3

  useFrame(({ clock }) => {
    const mat = materialRef.current as any
    if (!mat?.layers?.length) return

    const t = animate === 'on' ? clock.elapsedTime * uSpeed : uTime
    const sin = Math.sin(t / 2)
    const cos = Math.cos(t / 2)

    mat.layers[0]?.origin.set((cos / 2) * wave, 0, 0)
    mat.layers[1]?.origin.set(cos * wave, sin * wave, cos * 0.75 * wave)
    mat.layers[2]?.origin.set(sin * wave, cos * wave, sin * 0.75 * wave)
    mat.layers[3]?.origin.set(cos * wave, sin * wave, cos * wave)
  })

  const near1 = 0.45 * density
  const near2 = 1 * density
  const near3 = 1.6 * density

  return (
    <LayerMaterial ref={materialRef} toneMapped={false}>
      <Depth
        colorA={color1}
        colorB='black'
        alpha={1}
        mode='normal'
        near={near1}
        far={near1 + span}
        origin={[0, 0, 0]}
      />
      <Depth
        colorA={color2}
        colorB={color3}
        alpha={1}
        mode='add'
        near={near2}
        far={near2 + span}
        origin={[0, 1, 1]}
      />
      <Depth
        colorA={color3}
        colorB={color2}
        alpha={1}
        mode='add'
        near={near3}
        far={near3 + span}
        origin={[0, 1, -1]}
      />
      <Depth
        colorA={color1}
        colorB='black'
        alpha={0.9}
        mode='overlay'
        near={near2 + density * 0.6}
        far={near2 + density * 0.6 + span}
        origin={[1, -1, -1]}
      />
      <Fresnel
        mode='add'
        color='white'
        intensity={0.25 + reflection * 0.75}
        power={1.5 + wave * 0.5}
        bias={0.05}
      />
    </LayerMaterial>
  )
}
