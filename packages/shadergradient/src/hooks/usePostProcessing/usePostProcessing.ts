import { useEffect, useMemo } from 'react'
import { useFiber } from '../../useFiber'
import { EffectComposer as EffectComposerImpl } from './lib/pp/from-threejs/postprocessing/EffectComposer'
import { RenderPass } from './lib/pp/from-threejs/postprocessing/RenderPass'
import { HalftonePass } from './lib/pp/HalftonePass'

export function usePostProcessing({ on = false, grain = false }) {
  const { useThree, useFrame } = useFiber()

  const { gl, scene, camera, size } = useThree()

  const composer = useMemo(() => {
    // Initialize composer
    const effectComposer = new EffectComposerImpl(gl)
    // Add render pass
    effectComposer.addPass(new RenderPass(scene, camera))

    // Create & add a halftone pass
    const halftoneParams = {
      shape: 1,
      radius: 2,
      rotateR: Math.PI / 12,
      rotateB: (Math.PI / 12) * 2,
      rotateG: (Math.PI / 12) * 3,
      scatter: 1,
      blending: 1,
      blendingMode: 1,
      greyscale: false,
      disable: !grain,
    }
    const halftonePass = new HalftonePass(
      size.width,
      size.height,
      halftoneParams
    )
    effectComposer.addPass(halftonePass)

    return effectComposer
  }, [gl, scene, camera, size, grain])

  useEffect(() => composer?.setSize(size.width, size.height), [composer, size])
  useFrame(
    (_, delta) => void ((gl.autoClear = true), on && composer.render(delta)),
    1
  )
}
