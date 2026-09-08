import { TresCanvas } from '@tresjs/core'
import { LinearSRGBColorSpace, NoToneMapping, PerspectiveCamera } from 'three'
import {
  computed,
  defineComponent,
  h,
  mergeProps,
  onMounted,
  onScopeDispose,
  provide,
  ref,
  shallowRef,
  watch,
  watchEffect,
} from 'vue'
import type { InjectionKey, PropType, Ref } from 'vue'
import { defaultEnvBasePath } from '../../shadergradient/src/consts'

export const canvasContext: InjectionKey<{
  envBasePath: Ref<string>
  reducedMotion: Ref<boolean>
}> = Symbol('ShaderGradientCanvas')

export const ShaderGradientCanvas = defineComponent({
  name: 'ShaderGradientCanvas',
  inheritAttrs: false,
  props: {
    pixelDensity: { type: Number, default: 1 },
    fov: { type: Number, default: 45 },
    pointerEvents: {
      type: String as PropType<'none' | 'auto'>,
      default: 'none',
    },
    envBasePath: { type: String, default: defaultEnvBasePath },
    lazyLoad: { type: Boolean, default: true },
    threshold: { type: Number, default: 0.1 },
    rootMargin: { type: String, default: '0px' },
    preserveDrawingBuffer: { type: Boolean, default: false },
    powerPreference: {
      type: String as PropType<WebGLPowerPreference>,
      default: 'default',
    },
  },
  setup(props, { attrs, slots }) {
    const container = ref<HTMLElement>()
    const mounted = ref(false)
    const visible = ref(false)
    const reducedMotion = ref(false)
    const camera = shallowRef<PerspectiveCamera>()
    const canvasElement = shallowRef<HTMLCanvasElement>()

    // Browsers keep a dropped context alive until garbage collection and evict the
    // oldest ones once too many exist, so the context is released with its canvas.
    function releaseContext() {
      const canvas = canvasElement.value
      canvasElement.value = undefined
      if (!canvas) return
      const gl =
        (canvas.getContext('webgl2') as WebGL2RenderingContext | null) ??
        (canvas.getContext('webgl') as WebGLRenderingContext | null)
      if (gl && !gl.isContextLost()) gl.getExtension('WEBGL_lose_context')?.loseContext()
    }

    watch(
      visible,
      (isVisible, wasVisible) => {
        if (wasVisible && !isVisible) releaseContext()
      },
      { flush: 'sync' }
    )
    provide(canvasContext, {
      envBasePath: computed(() => props.envBasePath),
      reducedMotion,
    })

    onMounted(() => {
      camera.value = new PerspectiveCamera(props.fov, 1, 0.1, 1000)
      camera.value.position.set(0, 0, 14)
      const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
      const updatePreference = () => {
        reducedMotion.value = preference.matches
      }
      updatePreference()
      preference.addEventListener('change', updatePreference)
      const stop = watchEffect((cleanup) => {
        if (!props.lazyLoad || !('IntersectionObserver' in window)) {
          visible.value = true
          return
        }
        const observer = new IntersectionObserver(
          ([entry]) => {
            visible.value = entry.isIntersecting
          },
          { threshold: props.threshold, rootMargin: props.rootMargin }
        )
        if (container.value) observer.observe(container.value)
        cleanup(() => observer.disconnect())
      })
      const canvasWatcher = new MutationObserver(() => {
        const canvas = container.value?.querySelector('canvas')
        if (canvas) canvasElement.value = canvas
      })
      if (container.value) canvasWatcher.observe(container.value, { childList: true, subtree: true })
      cleanupMounted = () => {
        stop()
        canvasWatcher.disconnect()
        preference.removeEventListener('change', updatePreference)
      }
      mounted.value = true
    })
    let cleanupMounted = () => {}
    onScopeDispose(() => {
      releaseContext()
      cleanupMounted()
    })
    watchEffect(() => {
      if (!camera.value) return
      camera.value.fov = props.fov
      camera.value.updateProjectionMatrix()
    })

    return () =>
      h(
        'div',
        mergeProps(
          {
            ref: container,
            'aria-hidden': 'true',
            style: {
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            },
          },
          attrs
        ),
        [
          mounted.value && visible.value && camera.value
            ? h(
                TresCanvas,
                {
                  camera: camera.value,
                  dpr: props.pixelDensity,
                  outputColorSpace: LinearSRGBColorSpace,
                  toneMapping: NoToneMapping,
                  alpha: true,
                  antialias: true,
                  enableProvideBridge: true,
                  preserveDrawingBuffer: props.preserveDrawingBuffer,
                  powerPreference: props.powerPreference,
                  style: { pointerEvents: props.pointerEvents },
                },
                { default: () => slots.default?.() }
              )
            : slots.fallback?.(),
        ]
      )
  },
})
