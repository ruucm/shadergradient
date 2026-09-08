import { createApp, h, nextTick, reactive } from 'vue'
import {
  ShaderGradient,
  ShaderGradientCanvas,
  presets,
} from '@shadergradient/vue'
import type { ShaderGradientProps } from '@shadergradient/vue'
import { BufferGeometry, Material, Texture } from 'three'

const state = reactive({
  props: {
    ...presets.halo.props,
    animate: 'off',
    grain: 'off',
  } as ShaderGradientProps,
  count: 1,
})
const events = { camera: 0, errors: 0, geometry: 0, material: 0, texture: 0 }
for (const [kind, prototype] of [
  ['geometry', BufferGeometry.prototype],
  ['material', Material.prototype],
  ['texture', Texture.prototype],
] as const) {
  const dispose = prototype.dispose
  prototype.dispose = function () {
    events[kind]++
    dispose.call(this)
  }
}
Object.assign(window, {
  gradientFixture: {
    events,
    async update(props: ShaderGradientProps, count = state.count) {
      state.props = { ...state.props, ...props }
      state.count = count
      await nextTick()
    },
  },
})
createApp({
  render: () =>
    h(
      'main',
      Array.from({ length: state.count }, (_, index) =>
        h(
          ShaderGradientCanvas,
          {
            key: index,
            style: { height: '320px', width: '480px' },
            lazyLoad: false,
            pointerEvents: 'auto',
            envBasePath: '/hdr/',
          },
          {
            default: () =>
              h(ShaderGradient, {
                ...state.props,
                onCameraUpdate: () => events.camera++,
                onError: () => events.errors++,
              }),
          }
        )
      )
    ),
}).mount('#app')
