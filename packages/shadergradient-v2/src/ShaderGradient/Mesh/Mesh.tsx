import { useFrame } from '@react-three/fiber'
import { Geometry } from './Geometry'
import { useMaterials } from './useMaterials'
import { useRef } from 'react'
import { MeshT } from '@/types'

export function Mesh({ type, color1, color2, color3 }: MeshT): JSX.Element {
  const materialRef: any = useRef()
  useMaterials({ color1, color2, color3 })

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    if (materialRef.current) {
      materialRef.current.userData.uTime.value = elapsedTime
    }
  })

  return (
    <mesh>
      <Geometry type={type} />
      {/* @ts-ignore */}
      <colorShiftMaterial ref={materialRef} />
    </mesh>
  )
}
