import {
  RGBELoader
} from "./chunk-FO6QGQLC.mjs";
import {
  useLoader
} from "./chunk-NLXVRQGB.mjs";

// src/ShaderGradient/Lights/Environment/useRGBELoader.ts
function useRGBELoader(file, { path }) {
  const cubeTexture = useLoader(
    // @ts-ignore
    RGBELoader,
    file,
    (loader) => loader.setPath(path)
  );
  return cubeTexture;
}

export {
  useRGBELoader
};
