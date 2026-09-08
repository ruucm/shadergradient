import { useLoop, useTresContext } from '@tresjs/core'
import CameraControls from 'camera-controls'
import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import {
  computed,
  defineComponent,
  h,
  inject,
  onScopeDispose,
  ref,
  watch,
  watchEffect,
} from 'vue'
import { HalftoneShader } from '../../shadergradient/src/ShaderGradient/PostProcessing/lib/pp/HalftoneShader.js'
import { defaultEnvBasePath } from '../../shadergradient/src/consts'
import { canvasContext } from './ShaderGradientCanvas'
import { createMaterial, updateMaterial } from './material'
import type { ResolvedGradientProps } from './material'
import { gradientProps } from './props'
import type { ShaderGradientProps } from './props'

const queryOptions: Record<string, readonly string[]> = {
  type: ['plane', 'sphere', 'waterPlane'],
  shader: ['defaults', 'positionMix', 'cosmic', 'glass'],
  animate: ['on', 'off'],
  loop: ['on', 'off'],
  range: ['enabled', 'disabled'],
  lightType: ['3d', 'env'],
  envPreset: ['city', 'dawn', 'lobby'],
  grain: ['on', 'off'],
}

export const ShaderGradient = defineComponent({
  name: 'ShaderGradient',
  inheritAttrs: false,
  props: gradientProps,
  emits: {
    cameraUpdate: (_updates: Partial<ShaderGradientProps>) => true,
    error: (_error: unknown) => true,
  },
  setup(passedProps, { emit }) {
    const context = useTresContext()

    // Renderers hold a WebGL context that browsers only reclaim on garbage collection,
    // and they evict the oldest one once too many exist. The reference is captured while
    // the component lives, because the context ref is already cleared during teardown.
    let activeRenderer: THREE.WebGLRenderer | undefined
    watchEffect(() => {
      activeRenderer = context.renderer.value ?? activeRenderer
    })
    onScopeDispose(() => {
      if (!activeRenderer) return
      const renderer = activeRenderer
      activeRenderer = undefined
      renderer.dispose()
      renderer.forceContextLoss()
    })
    const canvas = inject(canvasContext, {
      envBasePath: ref(defaultEnvBasePath),
      reducedMotion: ref(false),
    })
    const props = computed(() => {
      if (passedProps.control !== 'query') return passedProps
      const source = passedProps.urlString
      const query = new URLSearchParams(
        source.slice(source.indexOf('?') + 1).split('#')[0]
      )
      const overrides: Record<string, string | number | boolean> = {}
      for (const [key, fallback] of Object.entries(passedProps)) {
        if (key === 'control' || key === 'urlString') continue
        const value = query.get(key)
        if (value === null || value === '') continue
        if (typeof fallback === 'number') {
          if (Number.isFinite(Number(value))) overrides[key] = Number(value)
        } else if (typeof fallback === 'boolean') {
          if (value === 'true' || value === 'false')
            overrides[key] = value === 'true'
        } else if (!queryOptions[key] || queryOptions[key].includes(value)) {
          overrides[key] = value
        }
      }
      return { ...passedProps, ...overrides } as ResolvedGradientProps
    })

    const group = new THREE.Group()
    const mesh = new THREE.Mesh<
      THREE.BufferGeometry,
      THREE.MeshPhysicalMaterial
    >()
    const ambient = new THREE.AmbientLight()
    const axes = new THREE.AxesHelper(5)
    mesh.name = 'shadergradient-mesh'
    group.add(mesh, ambient, axes)
    const materialVersion = ref(0)
    const environmentReady = ref(false)

    watch(
      () => props.value.type,
      (type) => {
        const previous = mesh.geometry
        mesh.geometry =
          type === 'sphere'
            ? new THREE.IcosahedronGeometry(1, 64)
            : new THREE.PlaneGeometry(
                10,
                10,
                type === 'waterPlane' ? 192 : 1,
                192
              )
        previous.dispose()
      },
      { immediate: true }
    )
    watch(
      () => [props.value.type, props.value.shader],
      () => {
        const previous = mesh.material
        mesh.material = createMaterial(props.value)
        previous.dispose()
        materialVersion.value++
      },
      { immediate: true }
    )
    watchEffect(() => {
      void materialVersion.value
      const settings = props.value
      updateMaterial(mesh.material, settings)
      mesh.position.set(
        settings.positionX,
        settings.positionY,
        settings.positionZ
      )
      mesh.rotation.set(
        ...([settings.rotationX, settings.rotationY, settings.rotationZ].map(
          THREE.MathUtils.degToRad
        ) as [number, number, number])
      )
      ambient.intensity =
        settings.lightType === '3d'
          ? settings.brightness * Math.PI
          : environmentReady.value
          ? 0
          : 0.4
      axes.visible = settings.toggleAxis
    })

    let elapsed = props.value.uTime
    watch(
      () => props.value.uTime,
      (value) => {
        elapsed = value
      }
    )
    const loop = useLoop()
    const animation = loop.onBeforeRender(({ delta }) => {
      const settings = props.value
      if (settings.animate === 'on' && !canvas.reducedMotion.value)
        elapsed += delta
      let time = elapsed
      if (
        settings.loop === 'on' &&
        Number.isFinite(settings.loopDuration) &&
        settings.loopDuration > 0
      ) {
        time =
          ((time % settings.loopDuration) + settings.loopDuration) %
          settings.loopDuration
      } else if (
        settings.range === 'enabled' &&
        Number.isFinite(settings.rangeStart) &&
        Number.isFinite(settings.rangeEnd) &&
        settings.rangeEnd > settings.rangeStart
      ) {
        time =
          settings.rangeStart +
          (((time % (settings.rangeEnd - settings.rangeStart)) +
            settings.rangeEnd -
            settings.rangeStart) %
            (settings.rangeEnd - settings.rangeStart))
      }
      mesh.material.userData.uTime.value = time
    })
    onScopeDispose(animation.off)

    CameraControls.install({ THREE })
    watch(
      [context.camera, context.renderer],
      ([camera, renderer], _previous, cleanup) => {
        if (!(camera instanceof THREE.PerspectiveCamera)) return
        const controls = new CameraControls(camera, renderer.domElement)
        controls.maxDistance = 1000
        controls.restThreshold = 0.01
        controls.dollySpeed = 5
        controls.mouseButtons.right = CameraControls.ACTION.NONE
        controls.touches.two = CameraControls.ACTION.NONE
        controls.touches.three = CameraControls.ACTION.NONE
        let initialized = false
        const stop = watch(
          () => [props.value, canvas.reducedMotion.value],
          () => {
            const settings = props.value
            const transition =
              initialized &&
              settings.enableTransition &&
              !canvas.reducedMotion.value
            controls.smoothTime = canvas.reducedMotion.value
              ? 0
              : settings.smoothTime
            controls.draggingSmoothTime = canvas.reducedMotion.value ? 0 : 0.25
            controls.mouseButtons.wheel = controls.mouseButtons.middle =
              settings.type === 'sphere'
                ? CameraControls.ACTION.ZOOM
                : CameraControls.ACTION.DOLLY
            void controls.rotateTo(
              THREE.MathUtils.degToRad(settings.cAzimuthAngle),
              THREE.MathUtils.degToRad(settings.cPolarAngle),
              transition
            )
            void controls.dollyTo(
              settings.zoomOut || settings.type === 'sphere'
                ? 14
                : settings.cDistance,
              transition
            )
            void controls.zoomTo(
              settings.type === 'sphere'
                ? settings.zoomOut
                  ? 5
                  : settings.cameraZoom
                : 1,
              transition
            )
            initialized = true
          },
          { immediate: true, deep: true }
        )
        const onRest = () =>
          emit('cameraUpdate', {
            cAzimuthAngle: Math.round(
              THREE.MathUtils.radToDeg(controls.azimuthAngle)
            ),
            cPolarAngle: Math.round(
              THREE.MathUtils.radToDeg(controls.polarAngle)
            ),
            ...(props.value.type === 'sphere'
              ? { cameraZoom: camera.zoom }
              : { cDistance: controls.distance }),
          })
        controls.addEventListener('rest', onRest)
        const frame = loop.onBeforeRender(({ delta }) => controls.update(delta))
        cleanup(() => {
          stop()
          frame.off()
          controls.removeEventListener('rest', onRest)
          controls.dispose()
        })
      },
      { immediate: true }
    )

    watchEffect((cleanup) => {
      if (props.value.lightType !== 'env') return
      const scene = context.scene.value
      const previous = scene.environment
      let active = true
      let texture: THREE.DataTexture | undefined
      const basePath = canvas.envBasePath.value.replace(/\/?$/, '/')
      new RGBELoader().load(
        `${basePath}${props.value.envPreset}.hdr`,
        (loaded) => {
          if (!active) {
            loaded.dispose()
            return
          }
          texture = loaded
          texture.mapping = THREE.EquirectangularReflectionMapping
          scene.environment = texture
          environmentReady.value = true
        },
        undefined,
        (error) => {
          if (active) emit('error', error)
        }
      )
      cleanup(() => {
        active = false
        environmentReady.value = false
        if (scene.environment === texture) scene.environment = previous
        texture?.dispose()
      })
    })

    let composer: EffectComposer | undefined
    watchEffect((cleanup) => {
      const camera = context.camera.value
      if (props.value.grain === 'off' || !camera) return
      const renderer = context.renderer.value
      const effect = new EffectComposer(renderer)
      const renderPass = new RenderPass(context.scene.value, camera)
      const grainPass = new ShaderPass(HalftoneShader)
      effect.addPass(renderPass)
      effect.addPass(grainPass)
      composer = effect
      const stop = watchEffect(() => {
        const width = context.sizes.width.value
        const height = context.sizes.height.value
        effect.setPixelRatio(renderer.getPixelRatio())
        effect.setSize(width, height)
        grainPass.uniforms.width.value = width
        grainPass.uniforms.height.value = height
        grainPass.uniforms.blending.value = props.value.grainBlending
      })
      cleanup(() => {
        stop()
        composer = undefined
        grainPass.dispose()
        renderPass.dispose()
        effect.dispose()
      })
    })
    const rendering = loop.render(({ delta }) => {
      if (composer) composer.render(delta)
      else if (context.camera.value)
        context.renderer.value.render(context.scene.value, context.camera.value)
    })
    onScopeDispose(() => {
      rendering.off()
      mesh.geometry.dispose()
      mesh.material.dispose()
      axes.dispose()
    })

    return () => h('primitive', { object: group, dispose: null })
  },
})
