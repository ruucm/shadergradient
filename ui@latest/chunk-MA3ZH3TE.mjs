import {
  isValidUrl,
  parseUrlForControls
} from "./chunk-2ZZ6H7J7.mjs";
import {
  useURLQueryState
} from "./chunk-PY6KCJWI.mjs";
import {
  PRESETS
} from "./chunk-LCDF6HP4.mjs";
import {
  useUIStore
} from "./chunk-OOWSMYW2.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-HXGKXP63.mjs";

// src/overrides/Shared.tsx
import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
function HideBanner(Component) {
  return (props) => {
    useEffect(() => {
      const badge = document.getElementById("__framer-badge-container");
      if (badge) badge.remove();
    }, []);
    return /* @__PURE__ */ jsx(Component, __spreadValues({}, props));
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
var href = "https://ruucm.github.io/shadergradient/ui@latest/styles.css";
function TailwindWrapper(Component) {
  return (props) => {
    const tailwindLoaded = useTailwind(href);
    useEffect(() => {
      const badge = document.getElementById("__framer-badge-container");
      if (badge) badge.remove();
    }, []);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        style: __spreadProps(__spreadValues({}, props.style), {
          opacity: tailwindLoaded ? 1 : 0
        })
      })
    );
  };
}
function useTailwind(href2) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const existingLink = Array.from(
      document.head.querySelectorAll("link")
    ).find((link) => link.href === href2);
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href2;
      document.head.appendChild(link);
      setLoaded(true);
      return () => {
        document.head.removeChild(link);
      };
    } else {
      setLoaded(true);
    }
  }, []);
  return loaded;
}

export {
  HideBanner,
  CurrentPreset,
  togglePreset,
  toggleUrl,
  UrlInput,
  TailwindWrapper
};
