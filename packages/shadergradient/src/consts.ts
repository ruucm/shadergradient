export const initialActivePreset = 0

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

export const hdrBase = 'https://shadergradient.vercel.app'

// loading animations
export const mainLoading = {
  // times
  meshDelay: 2, // duration of gradient remain static
  meshDur: 2, // duration of gradient becoming 3d

  rotDelay: 1.8,
  rotDur: 1.6, // rotation twice

  posDelay: 4.4,
  posDur: 0.3,

  end: 4.3, //  Timing for the texts. Should be bigger than rotDelay + rotDur
  // mesh
  to: 1, // end factor (0 -> 1) for the mesh noisestrength
}

// environment hdr
export const envBasePath = 'https://shadergradient.vercel.app/hdr/'
