// src/consts.ts
var initialActivePreset = 0;
var canvasProps = (pixelDensity, fov) => ({
  dpr: pixelDensity,
  camera: { fov },
  linear: true,
  flat: true,
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
var defaultPlanesZoom = 1;
var defaultSphereDistance = 14;
var zoomOutPlanes = { zoom: 1, distance: 14 };
var zoomOutSphere = { zoom: 5, distance: 14 };
var aboutAngles = [190, 140];
var aboutPositions = [0, 10, 0];
var aboutRotations = [0, 10, 50];
var aboutMobilePositions = [0, 20, 0];
var hdrBase = "https://shadergradient.vercel.app";
var mainLoading = {
  meshDelay: 2,
  meshDur: 1.8,
  rotDelay: 1.7,
  rotDur: 1,
  posDelay: 1.3,
  posDur: 2.2,
  logoTransition: 3.1,
  text: 2.5,
  to: 1
};
var envBasePath = "https://shadergradient.vercel.app/hdr/";
export {
  aboutAngles,
  aboutMobilePositions,
  aboutPositions,
  aboutRotations,
  canvasProps,
  defaultPlanesZoom,
  defaultSphereDistance,
  envBasePath,
  hdrBase,
  initialActivePreset,
  links,
  mainLoading,
  zoomOutPlanes,
  zoomOutSphere
};
