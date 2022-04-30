// src/consts.ts
var initialActivePreset = 0;
var canvasProps = (pixelDensity) => ({
  dpr: pixelDensity
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
var defaultDistance = 10;
var defaultZoom = 1;
var hdrBase = "https://shadergradient-beige.vercel.app";
var brightnessDiff = 0.2;
export {
  brightnessDiff,
  canvasProps,
  defaultDistance,
  defaultZoom,
  hdrBase,
  initialActivePreset,
  links
};
