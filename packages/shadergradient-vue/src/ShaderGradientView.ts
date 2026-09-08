import { defineComponent, h, mergeProps, onMounted, onScopeDispose, ref } from 'vue'
import { gradientSource, registerView } from './shared'

/** Shows a `ShaderGradientSource` without allocating a WebGL context of its own. */
export const ShaderGradientView = defineComponent({
  name: 'ShaderGradientView',
  inheritAttrs: false,
  props: {
    sourceId: { type: String, required: true },
    pixelDensity: { type: Number, default: 1 },
  },
  setup(props, { attrs }) {
    const canvas = ref<HTMLCanvasElement>()
    const source = gradientSource(props.sourceId)

    onMounted(() => {
      const element = canvas.value
      if (!element) return
      const context = element.getContext('2d')
      if (!context) return

      let visible = true
      const observer = new IntersectionObserver(
        ([entry]) => {
          visible = entry?.isIntersecting ?? false
        },
        { rootMargin: '200px' }
      )
      observer.observe(element)

      const draw = () => {
        const from = source.value
        if (!visible || !from || !from.width || !from.height) return
        const width = Math.round(element.clientWidth * props.pixelDensity)
        const height = Math.round(element.clientHeight * props.pixelDensity)
        if (!width || !height) return
        if (element.width !== width || element.height !== height) {
          element.width = width
          element.height = height
        }
        // The source is square, so the shorter side is covered and the rest is cropped.
        const scale = Math.max(width / from.width, height / from.height)
        const drawWidth = from.width * scale
        const drawHeight = from.height * scale
        context.drawImage(
          from,
          (width - drawWidth) / 2,
          (height - drawHeight) / 2,
          drawWidth,
          drawHeight
        )
      }

      const stop = registerView(draw)
      onScopeDispose(() => {
        stop()
        observer.disconnect()
      })
    })

    return () =>
      h(
        'canvas',
        mergeProps(
          {
            ref: canvas,
            'aria-hidden': 'true',
            style: { width: '100%', height: '100%', display: 'block', pointerEvents: 'none' },
          },
          attrs
        )
      )
  },
})
