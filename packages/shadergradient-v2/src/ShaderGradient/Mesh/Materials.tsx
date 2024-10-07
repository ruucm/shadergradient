import { extend, useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@/shaders/shaderMaterial'
import * as sceneShader from '@/shaders/a'
import { useRef, useEffect, useState } from 'react'

export function Materials({ color1, color2, color3 }): JSX.Element {
  const extended = useExtend({ color1, color2, color3 })
  const materialRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    if (materialRef.current) {
      materialRef.current.userData.uTime.value = elapsedTime
    }
  })

  return (
    <>
      {/* @ts-ignore */}
      {extended && <colorShiftMaterial ref={materialRef} />}
    </>
  )
}

function useExtend({ color1, color2, color3 }) {
  const [extended, setExtended] = useState(false)

  useEffect(() => {
    const ColorShiftMaterial = shaderMaterial(
      {
        colors: [color1, color2, color3],
        uTime: 0.0,
        uWidth: 10,
        uHeight: 10,

        uAmplitude: 2,
      },
      sceneShader.vertexShader,
      sceneShader.fragmentShader
    )

    extend({ ColorShiftMaterial })
    setExtended(true)
  }, [])

  return extended
}
