import {
  RGBELoader
} from "./chunk-M6YQJKKS.mjs";

// src/ShaderGradient/Lights/Environment/useRGBELoader.ts
import { useLoader } from "@react-three/fiber";
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
