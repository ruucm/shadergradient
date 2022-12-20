import { CubeTexture, Texture } from 'three'
import { RGBELoader } from 'three-stdlib'
import { useLoader } from '@react-three/fiber'

type Options = {
  path: string
}

export function useRGBELoader(file: string, { path }: Options): CubeTexture {
  const cubeTexture: Texture | Texture[] = useLoader(
    // @ts-ignore
    RGBELoader,
    file,
    (loader) => loader.setPath(path)
  )
  return cubeTexture
}
