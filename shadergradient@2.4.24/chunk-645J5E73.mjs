import {
  RGBELoader
} from "./chunk-OFV4WCHT.mjs";
import {
  useLoader
} from "./chunk-KYSXTOJZ.mjs";

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
