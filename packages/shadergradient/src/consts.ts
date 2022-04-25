export const initialActivePreset = 0

export const canvasProps = (pixelDensity: number) => ({
  dpr: pixelDensity, //device pixel ratio - 1 default and fast, 2 detailed and slow
  // mode: 'concurrent' as 'legacy' | 'blocking' | 'concurrent',
  // camera: { fov: 45 }, // could be replaced with zoom or distance?
  // linear: true, //sRGBEncoding
  // flat: true, //ACESFilmicToneMapping
})
