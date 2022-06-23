export const initialActivePreset = 0

export const canvasProps = (pixelDensity: number) => ({
  dpr: pixelDensity, //device pixel ratio - 1 default and fast, 2 detailed and slow
  // mode: 'concurrent' as 'legacy' | 'blocking' | 'concurrent',
  camera: { fov: 45 }, // could be replaced with zoom or distance?
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

export const defaultDistance = 14
export const defaultZoom = 1
export const sphereZoomOut = 5
export const aboutAngles = [190, 130]
export const aboutPositions = [0, 11, 0]
export const aboutRotations = [0, 10, 50]
export const aboutMobilePositions = [0, 20, 0]

export const hdrBase = 'https://shadergradient.vercel.app'
