import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@/shaders'
import * as sceneShader from '@/shaders/a'

export function useMaterials({ color1, color2, color3 }) {
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
}
