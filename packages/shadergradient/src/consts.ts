type CanvasGlOverrides = {
  preserveDrawingBuffer?: boolean
  powerPreference?: WebGLPowerPreference
}

export const canvasProps = (
  pixelDensity: number,
  fov: number,
  glOverrides?: CanvasGlOverrides
) => {
  return {
    dpr: pixelDensity, //device pixel ratio - 1 default and fast, 2 detailed and slow
    // mode: 'concurrent' as 'legacy' | 'blocking' | 'concurrent',
    camera: { fov }, // could be replaced with zoom or distance?
    linear: true, //sRGBEncoding
    flat: true, //ACESFilmicToneMapping
    gl: {
      preserveDrawingBuffer: glOverrides?.preserveDrawingBuffer,
      powerPreference: glOverrides?.powerPreference,
    },
  }
}

export const links = [
  {
    title: 'Figma  →',
    link: 'https://www.figma.com/community/plugin/958202093377483021/Mesh-Gradient',
  },
  {
    title: 'React  →',
    link: 'https://codesandbox.io/s/optimistic-benji-pw64i',
  },
  {
    title: 'Framer  →',
    link: 'https://framer.com/projects/ShaderGradient--7fmA9c0AApv3vyjCPpS3-emceg',
  },
]

// useCameraAnimation

export const defaultPlanesZoom = 1
export const defaultSphereDistance = 14
export const zoomOutPlanes = { zoom: 1, distance: 14 }
export const zoomOutSphere = { zoom: 5, distance: 14 }

export const aboutAngles = [190, 140]
export const aboutPositions = [0, 10, 0]
export const aboutRotations = [0, 10, 50]
export const aboutMobilePositions = [0, 20, 0]

// loading animations
export const mainLoading = {
  // mesh animation
  meshDelay: 0,
  meshDur: 0,

  // rotation animation
  rotDelay: 1.7,
  rotDur: 1,

  // position animation
  posDelay: 1.3,
  posDur: 2.2,

  logoTransition: 3.1, // Timing for the logo
  text: 2.5, // Timing for the preset title appearing

  // mesh
  to: 1, // end factor (0 -> 1) for the mesh noisestrength
}

// environment hdr
export const defaultEnvBasePath =
  'https://ruucm.github.io/shadergradient/ui@0.0.0/assets/hdr/'

// ----------------------------- [FIGMA PLUGIN] ----------------------------------
export const STRIPE_BUY_YEARLY_URL = 'https://buy.stripe.com/00g5kV0g553QcjC9AB'
export const STRIPE_BUY_MONTHLY_URL =
  'https://buy.stripe.com/fZe5kVd2R53QcjC7su'
export const STRIPE_BILLING_URL =
  'https://billing.stripe.com/p/login/aEU8Audql6LagDe9AA' // Customer Portal
