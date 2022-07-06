import { CubeTexture, Texture } from 'three'
import { RGBELoader } from 'three-stdlib'
import { useFiber } from '../utils/index'

type Options = {
  path: string
}

export function useRGBELoader(file: string, { path }: Options): CubeTexture {
  const { useLoader } = useFiber()

  const cubeTexture: Texture | Texture[] = useLoader(
    RGBELoader,
    file,
    (loader) => loader.setPath(path)
  )
  return cubeTexture
}
