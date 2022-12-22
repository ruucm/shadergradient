import { useUIStore } from '@/store'
import { EnvironmentMap } from './Environment'
import { Suspense } from 'react'

export function Lights({ lightType, brightness, envPreset }: any) {
  const setLoadingPercentage = useUIStore(
    (state: any) => state.setLoadingPercentage
  )

  return (
    <>
      {lightType === '3d' && <ambientLight intensity={brightness || 1} />}
      {lightType === 'env' && (
        <Suspense fallback={null}>
          <EnvironmentMap
            envPreset={envPreset}
            background={true}
            loadingCallback={setLoadingPercentage}
          />
        </Suspense>
      )}
    </>
  )
}
