import {
  parseUrlForControls
} from "./chunk-2ZZ6H7J7.mjs";
import {
  PRESETS
} from "./chunk-MB44DXHQ.mjs";
import {
  useUIStore
} from "./chunk-WK37AIEF.mjs";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/overrides/FramerPlugin.tsx
import { useState, useEffect } from "react";
import { jsx } from "react/jsx-runtime";
function updateTheme(Component) {
  return (props) => {
    const [theme, setTheme] = useState("");
    useEffect(() => {
      setTheme(document.body.dataset.framerTheme);
      console.log(props);
    }, []);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        variant: theme === "light" ? "preset" : "dark"
      })
    );
  };
}
function AddToCanvas(Component) {
  return (props) => {
    const activePreset = useUIStore((state) => state.activePreset);
    const inputMode = useUIStore((state) => state.inputMode);
    const urlInput = useUIStore((state) => state.urlInput);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        variant: inputMode === "preset" || inputMode === "url" && urlInput !== "" ? "Active" : "Inactive",
        onClick: () => __async(this, null, function* () {
          if (inputMode === "url" && urlInput !== "") {
            console.log(parseUrlForControls(urlInput));
            window.parent.postMessage(
              __spreadValues({
                message: "ADD_TO_CANVAS"
              }, parseUrlForControls(urlInput)),
              "*"
            );
          } else if (inputMode === "preset") {
            const activePresetUrl = "https://shadergradient.co/customize" + PRESETS[activePreset].url;
            console.log(parseUrlForControls(activePresetUrl));
            window.parent.postMessage(
              __spreadValues({
                message: "ADD_TO_CANVAS"
              }, parseUrlForControls(activePresetUrl)),
              "*"
            );
          }
        })
      })
    );
  };
}

export {
  updateTheme,
  AddToCanvas
};
