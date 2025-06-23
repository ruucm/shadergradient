import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-WNQUEZJF.mjs";

// src/overrides/Shared.tsx
import * as m from "https://ruucm.github.io/shadergradient/shadergradient@2.0.29/ShaderGradientStateless/index.mjs";
import { PRESETS } from "https://ruucm.github.io/shadergradient/shadergradient@2.0.29/ShaderGradientStateless/store/presetURLs.mjs";
import * as ui from "https://ruucm.github.io/shadergradient/ui@0.0.0/index.mjs";
import { useState, useEffect } from "react";
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0";
import { jsx } from "react/jsx-runtime";
import { createElement } from "react";
function ArrowLeft(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const activePreset = ui.useUIStore((state) => state.activePreset);
    const setActivePreset = ui.useUIStore((state) => state.setActivePreset);
    const setQueryValue = m.useURLQueryState();
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
    const activePreset = ui.useUIStore((state) => state.activePreset);
    const setActivePreset = ui.useUIStore((state) => state.setActivePreset);
    const setQueryValue = m.useURLQueryState();
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
function PresetIndex(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const activePreset = ui.useUIStore((state) => state.activePreset);
    return /* @__PURE__ */ createElement(Component, __spreadProps(__spreadValues({}, props), { key: activePreset, content: `0${activePreset}` }));
  };
}
function PresetTitle(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const activePreset = ui.useUIStore((state) => state.activePreset);
    const presetTitle = PRESETS[activePreset].title;
    return /* @__PURE__ */ createElement(Component, __spreadProps(__spreadValues({}, props), { key: activePreset, content: presetTitle }));
  };
}
var useStore = createStore({
  randomColor: [
    [100, 180, 255],
    [92, 92, 124],
    [200, 200, 200]
  ],
  slider: 0,
  toggle: false
});
var getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
var rgbToHex = (r, g, b) => "#" + [r, g, b].map((x) => {
  const hex = x.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}).join("");
function randomGradient(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    console.log("store.randomColor", store.randomColor);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        color1: "rgb(" + store.randomColor[0][0] + ", " + store.randomColor[0][1] + ", " + store.randomColor[0][2] + ")",
        color2: "rgb(" + store.randomColor[1][0] + ", " + store.randomColor[1][1] + ", " + store.randomColor[1][2] + ")",
        color3: "rgb(" + store.randomColor[2][0] + ", " + store.randomColor[2][1] + ", " + store.randomColor[2][2] + ")"
      })
    );
  };
}
function randomText(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        text: `${rgbToHex(
          store.randomColor[0][0],
          store.randomColor[0][1],
          store.randomColor[0][2]
        )} - ${rgbToHex(
          store.randomColor[1][0],
          store.randomColor[1][1],
          store.randomColor[1][2]
        )} - ${rgbToHex(
          store.randomColor[2][0],
          store.randomColor[2][1],
          store.randomColor[2][2]
        )}`
      })
    );
  };
}
function randomBtn(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        whileHover: { scale: 1.05 },
        onClick: () => {
          console.log("onClick");
          setStore({
            randomColor: [
              [getRandomInt(255), getRandomInt(255), getRandomInt(255)],
              [getRandomInt(255), getRandomInt(255), getRandomInt(255)],
              [getRandomInt(255), getRandomInt(255), getRandomInt(255)]
            ]
          });
        }
      })
    );
  };
}
function time(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const [hour, setHour] = useState(7);
    const [min, setMin] = useState(0);
    const [totalMin, setTotalMin] = useState(0);
    useEffect(() => {
      setTotalMin(900 * store.slider / 100);
      setHour(7 + Math.floor(totalMin / 60));
      setMin(Math.floor(totalMin % 60));
    }, [store.slider]);
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
    const [store, setStore] = useStore();
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        onChange: (e) => {
          setStore({ slider: e });
        }
      })
    );
  };
}
var toRGBArray = (rgbStr) => rgbStr == null ? void 0 : rgbStr.match(/\d+/g).map(Number);
function sliderSmartComp(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    var initial1 = toRGBArray(props.initialColor1);
    var initial2 = toRGBArray(props.initialColor2);
    var initial3 = toRGBArray(props.initialColor3);
    var switch1 = toRGBArray(props.switchColor1);
    var switch2 = toRGBArray(props.switchColor2);
    var switch3 = toRGBArray(props.switchColor3);
    const init1 = "rgb(" + Math.round(
      initial1[0] - (initial1[0] - switch1[0]) * store.slider / 100
    ) + ", " + Math.round(
      initial1[1] - (initial1[1] - switch1[1]) * store.slider / 100
    ) + ", " + Math.round(
      initial1[2] - (initial1[2] - switch1[2]) * store.slider / 100
    ) + ")";
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        initialColor1: "rgb(" + Math.round(
          initial1[0] - (initial1[0] - switch1[0]) * store.slider / 100
        ) + ", " + Math.round(
          initial1[1] - (initial1[1] - switch1[1]) * store.slider / 100
        ) + ", " + Math.round(
          initial1[2] - (initial1[2] - switch1[2]) * store.slider / 100
        ) + ")",
        initialColor2: "rgb(" + Math.round(
          initial2[0] - (initial2[0] - switch2[0]) * store.slider / 100
        ) + ", " + Math.round(
          initial2[1] - (initial2[1] - switch2[1]) * store.slider / 100
        ) + ", " + Math.round(
          initial2[2] - (initial2[2] - switch2[2]) * store.slider / 100
        ) + ")",
        initialColor3: "rgb(" + Math.round(
          initial3[0] - (initial3[0] - switch3[0]) * store.slider / 100
        ) + ", " + Math.round(
          initial3[1] - (initial3[1] - switch3[1]) * store.slider / 100
        ) + ", " + Math.round(
          initial3[2] - (initial3[2] - switch3[2]) * store.slider / 100
        ) + ")"
      })
    );
  };
}
function toggleSmartComp(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        variant: store.toggle === true ? "Switch" : "Initial"
      })
    );
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

export {
  ArrowLeft,
  ArrowRight,
  PresetIndex,
  PresetTitle,
  randomGradient,
  randomText,
  randomBtn,
  time,
  slider,
  sliderSmartComp,
  toggleSmartComp,
  textClipper
};
