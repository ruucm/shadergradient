import { useUIStore } from '@/store'
import { EnvironmentMap } from './Environment'
import { Suspense, useEffect } from 'react'
import { useProgress } from './useProgress'
import { Html } from './Html'

export function Lights({ lightType, brightness, envPreset }: any) {
  const setLoadingPercentage = useUIStore(
    (state: any) => state.setLoadingPercentage
  )

  return (
    <>
      {lightType === '3d' && <ambientLight intensity={brightness || 1} />}
      {lightType === 'env' && (
        <Suspense fallback={<Loader />}>
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

function Loader() {
  const { progress } = useProgress()
  return (
    <>
      <ambientLight />
      {/* <pointLight position={[10, 10, 10]} /> */}
      <Html
        center
        style={{
          color: 'white',
          position: 'fixed',
          whiteSpace: 'nowrap',
          fontSize: '18px',
        }}
      >
        {progress}% loaded
      </Html>
    </>
  )
}
