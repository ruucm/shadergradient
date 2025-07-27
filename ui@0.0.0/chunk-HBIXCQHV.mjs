import {
  useUIStore
} from "./chunk-DM3CGC3K.mjs";
import {
  useURLQueryState
} from "./chunk-NIDT47ZR.mjs";
import {
  PRESETS
} from "./chunk-SKKGTYWU.mjs";
import {
  isValidUrl,
  parseUrlForControls
} from "./chunk-2ZZ6H7J7.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/overrides/Shared.tsx
import { useState } from "react";
import { jsx } from "react/jsx-runtime";
function HideBanner(Component) {
  return (props) => {
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { style: { zIndex: 1e10 } }));
  };
}
function CurrentPreset(Component) {
  return (props) => {
    const activePreset = useUIStore((state) => state.activePreset);
    const presetTitle = PRESETS[activePreset].title;
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { text: presetTitle }));
  };
}
function togglePreset(Component) {
  return (props) => {
    const setInputMode = useUIStore((state) => state.setInputMode);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        onClick: () => {
          setInputMode("preset");
          console.log("preset");
        }
      })
    );
  };
}
function toggleUrl(Component) {
  return (props) => {
    const setInputMode = useUIStore((state) => state.setInputMode);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        onClick: () => {
          setInputMode("url");
          console.log("url");
        }
      })
    );
  };
}
function UrlInput(Component) {
  return (props) => {
    const setQueryValue = useURLQueryState();
    const setUrlInput = useUIStore((state) => state.setUrlInput);
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(true);
    let variant = "default";
    if (value) {
      if (valid) variant = "valid";
      else variant = "invalid";
    }
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        onChange: (e) => {
          const value2 = e.target.value;
          setValue(value2);
          console.log(isValidUrl(value2));
          if (isValidUrl(value2)) {
            setValid(true);
            setQueryValue(value2);
            setUrlInput(value2);
            console.log(parseUrlForControls(value2));
          } else {
            setValid(false);
          }
        }
      })
    );
  };
}

export {
  HideBanner,
  CurrentPreset,
  togglePreset,
  toggleUrl,
  UrlInput
};
