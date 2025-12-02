import {
  useURLQueryState
} from "./chunk-PY6KCJWI.mjs";
import {
  PRESETS
} from "./chunk-LCDF6HP4.mjs";
import {
  useUIOverrideStore,
  useUIStore
} from "./chunk-UISFNSH4.mjs";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-HXGKXP63.mjs";

// src/overrides/Web/UI.tsx
import { useState, useEffect, useRef } from "react";
import { jsx } from "react/jsx-runtime";
import { createElement } from "react";
function ArrowLeft(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const activePreset = useUIStore((state) => state.activePreset);
    const setActivePreset = useUIStore((state) => state.setActivePreset);
    const setQueryValue = useURLQueryState();
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
        onClick: () => {
          let presetNumber;
          if (activePreset !== 0) {
            presetNumber = activePreset - 1;
          } else {
            presetNumber = PRESETS.length - 1;
          }
          setActivePreset(presetNumber);
          setQueryValue(PRESETS[presetNumber].url);
        }
      })
    );
  };
}
function ArrowRight(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const activePreset = useUIStore((state) => state.activePreset);
    const setActivePreset = useUIStore((state) => state.setActivePreset);
    const setQueryValue = useURLQueryState();
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
        onClick: () => {
          console.log("onClick");
          let presetNumber;
          if (activePreset !== PRESETS.length - 1) {
            presetNumber = activePreset + 1;
          } else {
            presetNumber = 0;
          }
          setActivePreset(presetNumber);
          setQueryValue(PRESETS[presetNumber].url);
        }
      })
    );
  };
}
function InitCustomize(Component) {
  return (props) => {
    const initialPresetNumber = 0;
    const setActivePreset = useUIStore((state) => state.setActivePreset);
    const setQueryValue = useURLQueryState();
    useEffect(() => {
      setActivePreset(initialPresetNumber);
      setQueryValue(PRESETS[initialPresetNumber].url);
    }, []);
    return /* @__PURE__ */ jsx(Component, __spreadValues({}, props));
  };
}
function PresetIndex(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const activePreset = useUIStore((state) => state.activePreset);
    return /* @__PURE__ */ createElement(Component, __spreadProps(__spreadValues({}, props), { key: activePreset, content: `0${activePreset}` }));
  };
}
function PresetTitle(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const activePreset = useUIStore((state) => state.activePreset);
    const presetTitle = PRESETS[activePreset].title;
    return /* @__PURE__ */ createElement(Component, __spreadProps(__spreadValues({}, props), { key: activePreset, content: presetTitle }));
  };
}
function withClickOutsideClosed(Component) {
  return (props) => {
    const ref = useRef(null);
    const [variant, setVariant] = useState(props.variant);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setVariant("Closed");
          setTimeout(() => {
            setVariant(props.variant);
          }, 500);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    return /* @__PURE__ */ createElement(
      Component,
      __spreadProps(__spreadValues({}, props), {
        key: variant,
        ref,
        variant
      })
    );
  };
}
var getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
var rgbToHex = (r, g, b) => "#" + [r, g, b].map((x) => {
  const hex = x.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}).join("");
function randomGradient(Component) {
  return (props) => {
    const randomColor = useUIOverrideStore((state) => state.randomColor);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        color1: "rgb(" + randomColor[0][0] + ", " + randomColor[0][1] + ", " + randomColor[0][2] + ")",
        color2: "rgb(" + randomColor[1][0] + ", " + randomColor[1][1] + ", " + randomColor[1][2] + ")",
        color3: "rgb(" + randomColor[2][0] + ", " + randomColor[2][1] + ", " + randomColor[2][2] + ")"
      })
    );
  };
}
function randomText(Component) {
  return (props) => {
    const randomColor = useUIOverrideStore((state) => state.randomColor);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        text: `${rgbToHex(
          randomColor[0][0],
          randomColor[0][1],
          randomColor[0][2]
        )} - ${rgbToHex(
          randomColor[1][0],
          randomColor[1][1],
          randomColor[1][2]
        )} - ${rgbToHex(
          randomColor[2][0],
          randomColor[2][1],
          randomColor[2][2]
        )}`
      })
    );
  };
}
function randomBtn(Component) {
  return (props) => {
    const setRandomColor = useUIOverrideStore((state) => state.setRandomColor);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        whileHover: { scale: 1.05 },
        onClick: () => {
          console.log("onClick");
          setRandomColor([
            [getRandomInt(255), getRandomInt(255), getRandomInt(255)],
            [getRandomInt(255), getRandomInt(255), getRandomInt(255)],
            [getRandomInt(255), getRandomInt(255), getRandomInt(255)]
          ]);
        }
      })
    );
  };
}
function time(Component) {
  return (props) => {
    const slider2 = useUIOverrideStore((state) => state.slider);
    const [hour, setHour] = useState(7);
    const [min, setMin] = useState(0);
    const [totalMin, setTotalMin] = useState(0);
    useEffect(() => {
      setTotalMin(900 * slider2 / 100);
      setHour(7 + Math.floor(totalMin / 60));
      setMin(Math.floor(totalMin % 60));
    }, [slider2]);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        text: min < 10 ? `${hour}:0${min}` : `${hour}:${min}`
      })
    );
  };
}
function slider(Component) {
  return (props) => {
    const setSlider = useUIOverrideStore((state) => state.setSlider);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        onChange: (e) => {
          setSlider(e);
        }
      })
    );
  };
}
var toRGBArray = (rgbStr) => rgbStr == null ? void 0 : rgbStr.match(/\d+/g).map(Number);
function sliderSmartComp(Component) {
  return (props) => {
    const slider2 = useUIOverrideStore((state) => state.slider);
    var initial1 = toRGBArray(props.initialColor1);
    var initial2 = toRGBArray(props.initialColor2);
    var initial3 = toRGBArray(props.initialColor3);
    var switch1 = toRGBArray(props.switchColor1);
    var switch2 = toRGBArray(props.switchColor2);
    var switch3 = toRGBArray(props.switchColor3);
    const init1 = "rgb(" + Math.round(initial1[0] - (initial1[0] - switch1[0]) * slider2 / 100) + ", " + Math.round(initial1[1] - (initial1[1] - switch1[1]) * slider2 / 100) + ", " + Math.round(initial1[2] - (initial1[2] - switch1[2]) * slider2 / 100) + ")";
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        initialColor1: "rgb(" + Math.round(
          initial1[0] - (initial1[0] - switch1[0]) * slider2 / 100
        ) + ", " + Math.round(
          initial1[1] - (initial1[1] - switch1[1]) * slider2 / 100
        ) + ", " + Math.round(
          initial1[2] - (initial1[2] - switch1[2]) * slider2 / 100
        ) + ")",
        initialColor2: "rgb(" + Math.round(
          initial2[0] - (initial2[0] - switch2[0]) * slider2 / 100
        ) + ", " + Math.round(
          initial2[1] - (initial2[1] - switch2[1]) * slider2 / 100
        ) + ", " + Math.round(
          initial2[2] - (initial2[2] - switch2[2]) * slider2 / 100
        ) + ")",
        initialColor3: "rgb(" + Math.round(
          initial3[0] - (initial3[0] - switch3[0]) * slider2 / 100
        ) + ", " + Math.round(
          initial3[1] - (initial3[1] - switch3[1]) * slider2 / 100
        ) + ", " + Math.round(
          initial3[2] - (initial3[2] - switch3[2]) * slider2 / 100
        ) + ")"
      })
    );
  };
}
function toggleSmartComp(Component) {
  return (props) => {
    const toggle = useUIOverrideStore((state) => state.toggle);
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { variant: toggle === true ? "Switch" : "Initial" }));
  };
}
function textClipper(Component) {
  return (props) => {
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        style: {
          color: "rgb(255,255,255)",
          background: "#000000",
          mixBlendMode: "multiply"
        }
      })
    );
  };
}
function WebStatelessOverride(Component) {
  return (props) => {
    const easyView = useUIStore((state) => state.easyView);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        pointerEvents: easyView === true ? "auto" : "none"
      })
    );
  };
}
function WebEasyViewControl(Component) {
  return (props) => {
    const easyView = useUIStore((state) => state.easyView);
    const setEasyView = useUIStore((state) => state.setEasyView);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        variant: easyView === true ? "Clicked" : "Default",
        onClick: () => {
          setEasyView(!easyView);
        }
      })
    );
  };
}
function WebEasyViewInfo(Component) {
  return (props) => {
    const easyView = useUIStore((state) => state.easyView);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        style: { display: easyView === true ? "flex" : "none" }
      })
    );
  };
}

export {
  ArrowLeft,
  ArrowRight,
  InitCustomize,
  PresetIndex,
  PresetTitle,
  withClickOutsideClosed,
  randomGradient,
  randomText,
  randomBtn,
  time,
  slider,
  sliderSmartComp,
  toggleSmartComp,
  textClipper,
  WebStatelessOverride,
  WebEasyViewControl,
  WebEasyViewInfo
};
