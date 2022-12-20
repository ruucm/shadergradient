import React from 'react'
import {
  FloatType,
  EquirectangularReflectionMapping,
  CubeTextureLoader,
  Texture,
  Scene,
  Loader,
} from 'three'
import { RGBELoader } from 'three-stdlib'

import { presetsObj, PresetsType } from './environment-assets'
import { useLoader, useThree } from '@react-three/fiber'

const CUBEMAP_ROOT =
  'https://rawcdn.githack.com/pmndrs/drei-assets/aa3600359ba664d546d05821bcbca42013587df2'

type Props = {
  background?: boolean
  files?: string | string[]
  path?: string
  preset?: PresetsType
  scene?: Scene
  extensions?: (loader: Loader) => void
  loadingCallback?: (percentage: number) => void
}

export function Environment({
  background = false,
  files = ['/px.png', '/nx.png', '/py.png', '/ny.png', '/pz.png', '/nz.png'],
  path = '',
  preset = undefined,
  scene,
  extensions,
  loadingCallback,
}: Props) {
  if (preset) {
    if (!(preset in presetsObj)) {
      throw new Error(
        'Preset must be one of: ' + Object.keys(presetsObj).join(', ')
      )
    }
    files = presetsObj[preset]
    path = CUBEMAP_ROOT + '/hdri/'
  }
  const defaultScene = useThree(({ scene }) => scene)
  const isCubeMap = Array.isArray(files)
  const loader = isCubeMap ? CubeTextureLoader : RGBELoader
  const loaderResult: Texture | Texture[] = useLoader(
    loader,
    // @ts-ignore
    isCubeMap ? [files] : files,
    (loader) => {
      loader.setPath(path)
      // @ts-ignore
      loader.setDataType?.(FloatType)
      if (extensions) extensions(loader)
    },
    (xhr) => {
      if (loadingCallback) loadingCallback((xhr.loaded / xhr.total) * 100)
    }
  )
  const texture: Texture = isCubeMap ? loaderResult[0] : loaderResult
  texture.mapping = EquirectangularReflectionMapping

  React.useLayoutEffect(() => {
    const oldbg = scene ? scene.background : defaultScene.background
    const oldenv = scene ? scene.environment : defaultScene.environment
    if (scene) {
      scene.environment = texture
      if (background) scene.background = texture
    } else {
      defaultScene.environment = texture
      if (background) defaultScene.background = texture
    }
    return () => {
      if (scene) {
        scene.environment = oldenv
        scene.background = oldbg
      } else {
        defaultScene.environment = oldenv
        defaultScene.background = oldbg
      }
      // Environment textures are volatile, better dispose and uncache them
      texture.dispose()
    }
  }, [texture, background, scene])

  return null
}
