import { useEffect, useMemo, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { EffectComposer as EffectComposerImpl } from './lib/pp/from-threejs/postprocessing/EffectComposer'
import { RenderPass } from './lib/pp/from-threejs/postprocessing/RenderPass'
import { HalftonePass } from './lib/pp/HalftonePass'

export function PostProcessing({ disable = false }) {
  const { gl, scene, camera, size } = useThree()

  const composerRef = useRef<EffectComposerImpl | null>(null)
  const halftonePassRef = useRef<HalftonePass | null>(null)

  const halftoneParams = useMemo(
    () => ({
      shape: 1,
      radius: 2,
      rotateR: Math.PI / 12,
      rotateB: (Math.PI / 12) * 2,
      rotateG: (Math.PI / 12) * 3,
      scatter: 1,
      blending: 1,
      blendingMode: 1,
      greyscale: false,
    }),
    []
  )

  useEffect(() => {
    const effectComposer = new EffectComposerImpl(gl)
    const renderPass = new RenderPass(scene, camera)

    const halftonePass = new HalftonePass(
      size.width,
      size.height,
      { ...halftoneParams, disable }
    )

    effectComposer.addPass(renderPass)
    effectComposer.addPass(halftonePass)

    composerRef.current = effectComposer
    halftonePassRef.current = halftonePass

    return () => {
      // Clean up GPU resources to avoid Safari crashes from leaked render targets
      renderPass.dispose?.()

      if (halftonePass.fsQuad?.dispose) halftonePass.fsQuad.dispose()
      halftonePass.material?.dispose?.()

      effectComposer.renderTarget1?.dispose?.()
      effectComposer.renderTarget2?.dispose?.()
      composerRef.current = null
      halftonePassRef.current = null
    }
  }, [camera, gl, halftoneParams, scene])

  useEffect(() => {
    const composer = composerRef.current
    if (!composer) return

    composer.setSize(size.width, size.height)
    halftonePassRef.current?.setSize(size.width, size.height)
  }, [size.height, size.width])

  useEffect(() => {
    if (halftonePassRef.current?.uniforms?.disable) {
      halftonePassRef.current.uniforms.disable.value = disable
    }
  }, [disable])

  useFrame((_, delta) => {
    const composer = composerRef.current
    if (!composer) return

    gl.autoClear = true
    composer.render(delta)
  }, 1)

  return <></>
}
