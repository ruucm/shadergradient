import React from 'react'
import { EquirectangularReflectionMapping, Texture } from 'three'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { envBasePath } from '@/consts'
import { useRGBELoader } from '../../useRGBELoader'

type Props = {
  background?: boolean | 'only'
  map?: THREE.Texture
  loadingCallback?: (percentage: number) => void
}

const isRef = (obj: any): obj is React.MutableRefObject<THREE.Scene> =>
  obj.current && obj.current.isScene
const resolveScene = (
  scene: THREE.Scene | React.MutableRefObject<THREE.Scene>
) => (isRef(scene) ? scene.current : scene)

export function EnvironmentMap({ background = false }: Props) {
  const city = useRGBELoader('city.hdr', { path: envBasePath })
  const dawn = useRGBELoader('dawn.hdr', { path: envBasePath })
  const lobby = useRGBELoader('lobby.hdr', { path: envBasePath })
  const map = { city, dawn, lobby }

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
        if (background) target.background = oldbg
      }
    }
  }, [defaultScene, map, background])

  const texture: Texture = map
  texture.mapping = EquirectangularReflectionMapping

  return null
}
