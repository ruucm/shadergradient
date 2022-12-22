import { envBasePath } from '@/consts'
import { useUIStore } from '@/store'
import { EnvironmentMap } from './Environment'
import { useRGBELoader } from './Environment/useRGBELoader'

export function Lights({ lightType, brightness, envPreset }: any) {
  const city = useRGBELoader('city.hdr', { path: envBasePath })
  const dawn = useRGBELoader('dawn.hdr', { path: envBasePath })
  const lobby = useRGBELoader('lobby.hdr', { path: envBasePath })
  const textures = { city, dawn, lobby }
  const map = textures[envPreset]

  const setLoadingPercentage = useUIStore(
    (state: any) => state.setLoadingPercentage
  )

  return (
    <>
      {lightType === '3d' && <ambientLight intensity={brightness || 1} />}
      {lightType === 'env' && (
        <EnvironmentMap
          map={map}
          background={true}
          loadingCallback={setLoadingPercentage}
        />
      )}
    </>
  )
}
