import { useUIStore } from '@/store'
import { EnvironmentMap } from './Environment/EnvironmentMap'

export function Lights({ lightType, brightness }: any) {
  const setLoadingPercentage = useUIStore(
    (state: any) => state.setLoadingPercentage
  )

  return (
    <>
      {lightType === 'env' && (
        <EnvironmentMap
          background={true}
          loadingCallback={setLoadingPercentage}
        />
      )}
      {lightType === '3d' && <ambientLight intensity={brightness || 1} />}
    </>
  )
}
