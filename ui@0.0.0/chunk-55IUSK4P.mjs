import {
  presets
} from "./chunk-CIS2NEPW.mjs";

// src/components/Shared/ShaderGradientStateless/store/presetURLs.ts
var initialActivePreset = 0;
var PRESETS = convertPresets(presets);
var DEFAUlT_PRESET = PRESETS[0].url;
function convertPresets(presets2) {
  const PRESETS2 = Object.entries(presets2).map(([key, value]) => {
    const { title, color, props } = value;
    const urlParams = new URLSearchParams(
      Object.entries(props).reduce((acc, [propKey, propValue]) => {
        acc[propKey] = typeof propValue === "boolean" ? String(propValue) : String(propValue);
        return acc;
      }, {})
    ).toString();
    return {
      title,
      color,
      url: `?${urlParams}`
    };
  });
  return PRESETS2;
}

export {
  initialActivePreset,
  PRESETS,
  DEFAUlT_PRESET
};
