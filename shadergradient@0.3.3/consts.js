// src/consts.ts
var initialActivePreset = 0;
var canvasProps = (pixelDensity) => ({
  dpr: pixelDensity,
  gl: { preserveDrawingBuffer: true }
});
var links = [
  {
    title: "Figma  \u2192",
    link: "https://www.figma.com/community/plugin/958202093377483021/Mesh-Gradient"
  },
  {
    title: "React  \u2192",
    link: "https://codesandbox.io/s/optimistic-benji-pw64i"
  },
  {
    title: "Framer  \u2192",
    link: "https://framer.com/projects/ShaderGradient--7fmA9c0AApv3vyjCPpS3-emceg"
  }
];
var defaultDistance = 14;
var defaultZoom = 1;
var aboutAngles = [190, 130];
var aboutPositions = [0, 11, 0];
var aboutRotations = [0, 10, 50];
var hdrBase = "https://shadergradient.vercel.app";
export {
  aboutAngles,
  aboutPositions,
  aboutRotations,
  canvasProps,
  defaultDistance,
  defaultZoom,
  hdrBase,
  initialActivePreset,
  links
};
