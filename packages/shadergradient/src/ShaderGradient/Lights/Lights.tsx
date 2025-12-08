import { LightsT } from '@/types'
import { Suspense } from 'react'
import { EnvironmentMap } from './Environment'

export function Lights({ lightType, brightness, envPreset }: LightsT) {
  return (
    <>
      {/* TODO: support higher version of three 0.154.0 */}
      {/* it has darker reflection with the existing shader (packages/shadergradient/src/shaders/a/fragment.glsl) */}
      {lightType === '3d' && (
        <ambientLight intensity={(brightness || 1) * Math.PI} />
      )}
      {lightType === 'env' && (
        <Suspense fallback={<Loader />}>
          <EnvironmentMap
            envPreset={envPreset}
            background={false}
            loadingCallback={() => void 0}
          />
        </Suspense>
      )}
    </>
  )
}

function Loader() {
  return <ambientLight intensity={0.4} />
}
