import {
  u
} from "../../chunk-2FOTMNF6.mjs";
import "../../chunk-5DN6VBB3.mjs";
import {
  __spreadProps,
  __spreadValues
} from "../../chunk-CU5I7XXF.mjs";

// src/components/FigmaPlugin/Test.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function Test({
  defaultValue,
  setValue,
  step,
  min,
  max
}) {
  const [sharedValue, setSharedValue] = React.useState(defaultValue);
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  React.useEffect(() => {
    setSharedValue(defaultValue);
  }, []);
  React.useEffect(() => {
    setValue(sharedValue);
  }, [sharedValue]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex items-center w-full h-fit flex-row gap-3",
      onMouseOver: () => setIsMouseOver(true),
      onMouseLeave: () => setIsMouseOver(false),
      children: [
        /* @__PURE__ */ jsx(
          u,
          {
            value: Number(sharedValue),
            step,
            min,
            max,
            onChange: (value, index) => setSharedValue(value),
            className: "w-full rounded-md bg-[#F2F2F2] cursor-ew-resize overflow-hidden transition-height duration-300 " + (isMouseOver === true ? "h-[26px]" : "h-[5px]"),
            thumbClassName: "hidden display-none",
            thumbActiveClassName: "hidden display-none",
            trackClassName: "h-full duration-300 " + (isMouseOver === true ? "bg-[#ff340a]" : "bg-[#ABABAB]"),
            renderTrack: (props, state) => /* @__PURE__ */ jsx(
              "div",
              __spreadProps(__spreadValues({}, props), {
                style: __spreadProps(__spreadValues({}, props.style), {
                  opacity: state.index === 1 ? 0 : 1
                })
              })
            ),
            renderThumb: (props, state) => /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({}, props), { children: state.valueNow }))
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: sharedValue,
            onChange: (e) => setSharedValue(e.target.value),
            className: "w-[42px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center"
          }
        )
      ]
    }
  );
}
export {
  Test
};
