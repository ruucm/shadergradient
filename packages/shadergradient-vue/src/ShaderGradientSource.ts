import { defineComponent, h, onMounted, onScopeDispose, ref } from 'vue'
import type { PropType } from 'vue'
import { ShaderGradient } from './ShaderGradient'
import { ShaderGradientCanvas } from './ShaderGradientCanvas'
import { gradientProps } from './props'
import { gradientSource } from './shared'

/**
 * Renders one gradient off-screen so any number of `ShaderGradientView`s can show it
 * while a single WebGL context is used.
 */
export const ShaderGradientSource = defineComponent({
  name: 'ShaderGradientSource',
  inheritAttrs: false,
  props: {
    ...gradientProps,
    sourceId: { type: String, required: true },
    size: { type: Number, default: 320 },
    pixelDensity: { type: Number, default: 1 },
    fov: { type: Number, default: 45 },
    envBasePath: { type: String as PropType<string>, default: undefined },
  },
  setup(props) {
    const container = ref<HTMLElement>()
    const source = gradientSource(props.sourceId)

    onMounted(() => {
      const observer = new MutationObserver(() => {
        const canvas = container.value?.querySelector('canvas')
        if (canvas) source.value = canvas
      })
      if (container.value) {
        const canvas = container.value.querySelector('canvas')
        if (canvas) source.value = canvas
        observer.observe(container.value, { childList: true, subtree: true })
      }
      onScopeDispose(() => observer.disconnect())
    })
    onScopeDispose(() => {
      source.value = undefined
    })

    const { sourceId: _id, size: _size, ...gradient } = props

    return () =>
      h(
        'div',
        {
          ref: container,
          'aria-hidden': 'true',
          style: {
            position: 'fixed',
            insetBlockStart: '0',
            insetInlineStart: '0',
            width: `${props.size}px`,
            height: `${props.size}px`,
            opacity: '0',
            pointerEvents: 'none',
            zIndex: '-1',
          },
        },
        [
          h(
            ShaderGradientCanvas,
            {
              lazyLoad: false,
              pixelDensity: props.pixelDensity,
              fov: props.fov,
              ...(props.envBasePath ? { envBasePath: props.envBasePath } : {}),
              preserveDrawingBuffer: true,
            },
            { default: () => h(ShaderGradient, gradient) }
          ),
        ]
      )
  },
})
