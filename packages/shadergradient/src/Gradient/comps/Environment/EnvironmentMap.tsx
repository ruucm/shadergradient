import React from 'react'
import { EquirectangularReflectionMapping, Texture } from 'three'
import * as THREE from 'three'
import { useFiber } from '../../../utils/index'

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

export function EnvironmentMap({ background = false, map }: Props) {
  const { useThree } = useFiber()
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
