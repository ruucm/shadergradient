// src/consts.ts
var canvasProps = (pixelDensity, fov, glOverrides) => {
  return {
    dpr: pixelDensity,
    //device pixel ratio - 1 default and fast, 2 detailed and slow
    // mode: 'concurrent' as 'legacy' | 'blocking' | 'concurrent',
    camera: { fov },
    // could be replaced with zoom or distance?
    linear: true,
    //sRGBEncoding
    flat: true,
    //ACESFilmicToneMapping
    gl: {
      preserveDrawingBuffer: glOverrides == null ? void 0 : glOverrides.preserveDrawingBuffer,
      powerPreference: glOverrides == null ? void 0 : glOverrides.powerPreference
    }
  };
};
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
var mainLoading = {
  // mesh animation
  meshDelay: 0,
  meshDur: 0,
  // rotation animation
  rotDelay: 1.7,
  rotDur: 1,
  // position animation
  posDelay: 1.3,
  posDur: 2.2,
  logoTransition: 3.1,
  // Timing for the logo
  text: 2.5,
  // Timing for the preset title appearing
  // mesh
  to: 1
  // end factor (0 -> 1) for the mesh noisestrength
};
var defaultEnvBasePath = "https://ruucm.github.io/shadergradient/ui@0.0.0/assets/hdr/";
var STRIPE_BUY_YEARLY_URL = "https://buy.stripe.com/00g5kV0g553QcjC9AB";
var STRIPE_BUY_MONTHLY_URL = "https://buy.stripe.com/fZe5kVd2R53QcjC7su";
var STRIPE_BILLING_URL = "https://billing.stripe.com/p/login/aEU8Audql6LagDe9AA";

export {
  canvasProps,
  links,
  defaultPlanesZoom,
  defaultSphereDistance,
  zoomOutPlanes,
  zoomOutSphere,
  aboutAngles,
  aboutPositions,
  aboutRotations,
  aboutMobilePositions,
  mainLoading,
  defaultEnvBasePath,
  STRIPE_BUY_YEARLY_URL,
  STRIPE_BUY_MONTHLY_URL,
  STRIPE_BILLING_URL
};
