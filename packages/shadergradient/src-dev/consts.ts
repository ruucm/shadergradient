export const canvasProps = (pixelDensity: number, fov: number) => ({
  dpr: pixelDensity, //device pixel ratio - 1 default and fast, 2 detailed and slow
  // mode: 'concurrent' as 'legacy' | 'blocking' | 'concurrent',
  camera: { fov }, // could be replaced with zoom or distance?
  linear: true, //sRGBEncoding
  flat: true, //ACESFilmicToneMapping
  gl: { preserveDrawingBuffer: true }, // to capture the canvas (Figma Plugin)
})

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

export const hdrBase =
  'https://ruucm.github.io/shadergradient/shadergradient@1.0.0'

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
export const envBasePath =
  'https://ruucm.github.io/shadergradient/shadergradient@1.0.0/hdr/'

// ----------------------------- [FIGMA PLUGIN] ----------------------------------
export const STRIPE_BUY_YEARLY_URL = 'https://buy.stripe.com/eVa7uocSxgMnaZi5kl'
export const STRIPE_BUY_MONTHLY_URL =
  'https://buy.stripe.com/28o01W05LeEfgjC5km'
export const STRIPE_BILLING_URL =
  'https://billing.stripe.com/p/login/cN27vf1dL52j5c4cMM'
