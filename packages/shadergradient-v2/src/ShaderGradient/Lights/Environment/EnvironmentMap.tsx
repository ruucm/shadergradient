import React from 'react'
import { EquirectangularReflectionMapping, Texture } from 'three'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { useRGBELoader } from './useRGBELoader'
import { useShaderGradientCanvasContext } from '@/ShaderGradientCanvas'
import { defaultEnvBasePath } from '@/consts'

type Props = {
  background?: boolean | 'only'
  envPreset?: 'city' | 'dawn' | 'lobby'
  loadingCallback?: (percentage: number) => void
}

const isRef = (obj: any): obj is React.MutableRefObject<THREE.Scene> =>
  obj.current && obj.current.isScene
const resolveScene = (
  scene: THREE.Scene | React.MutableRefObject<THREE.Scene>
) => (isRef(scene) ? scene.current : scene)

export function EnvironmentMap({ background = false, envPreset }: Props) {
  const { envBasePath } = useShaderGradientCanvasContext()
  const path = envBasePath || defaultEnvBasePath
  const city = useRGBELoader('city.hdr', { path })
  const dawn = useRGBELoader('dawn.hdr', { path })
  const lobby = useRGBELoader('lobby.hdr', { path })
  const textures = { city, dawn, lobby }
  const map: THREE.Texture = textures[envPreset]

  const defaultScene = useThree((state) => state.scene)

  React.useLayoutEffect(() => {
    if (map) {
      const target = resolveScene(defaultScene)
      const oldbg = target.background
      const oldenv = target.environment
      if (background !== 'only') target.environment = map
      if (background) target.background = map
      return () => {
        if (background !== 'only') target.environment = oldenv
        if (background) target.background = 'black'
      }
    }
  }, [defaultScene, map, background])

  const texture: Texture = map
  texture.mapping = EquirectangularReflectionMapping

  return null
}
