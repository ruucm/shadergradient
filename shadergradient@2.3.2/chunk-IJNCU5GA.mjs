import {
  useRGBELoader
} from "./chunk-PDTGKIU6.mjs";
import {
  useShaderGradientCanvasContext
} from "./chunk-Z3GKY7BO.mjs";
import {
  useThree
} from "./chunk-4MOUWEMW.mjs";
import {
  EquirectangularReflectionMapping
} from "./chunk-Z4XR7UL5.mjs";
import {
  defaultEnvBasePath
} from "./chunk-WPNBLVEI.mjs";

// src/ShaderGradient/Lights/Environment/EnvironmentMap.tsx
import React from "react";
var isRef = (obj) => obj.current && obj.current.isScene;
var resolveScene = (scene) => isRef(scene) ? scene.current : scene;
function EnvironmentMap({ background = false, envPreset }) {
  const { envBasePath } = useShaderGradientCanvasContext();
  const path = envBasePath || defaultEnvBasePath;
  const city = useRGBELoader("city.hdr", { path });
  const dawn = useRGBELoader("dawn.hdr", { path });
  const lobby = useRGBELoader("lobby.hdr", { path });
  const textures = { city, dawn, lobby };
  const map = textures[envPreset];
  const defaultScene = useThree((state) => state.scene);
  React.useLayoutEffect(() => {
    if (map) {
      const target = resolveScene(defaultScene);
      const oldbg = target.background;
      const oldenv = target.environment;
      if (background !== "only") target.environment = map;
      if (background) target.background = map;
      return () => {
        if (background !== "only") target.environment = oldenv;
        if (background) target.background = "black";
      };
    }
  }, [defaultScene, map, background]);
  const texture = map;
  texture.mapping = EquirectangularReflectionMapping;
  return null;
}

export {
  EnvironmentMap
};
