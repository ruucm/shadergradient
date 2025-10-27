import {
  RGBELoader
} from "./chunk-6A4LZ7FD.mjs";
import {
  useLoader
} from "./chunk-73SH6GTX.mjs";

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
