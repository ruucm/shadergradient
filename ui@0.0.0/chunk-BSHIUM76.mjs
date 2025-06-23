import {
  u
} from "./chunk-2FOTMNF6.mjs";
import {
  InputTitle
} from "./chunk-KAMY6Q6K.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WNQUEZJF.mjs";

// src/components/FigmaPlugin/RangeSlider.tsx
import { useState, useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function RangeSlider({
  title,
  defaultValue,
  setValue,
  step,
  min,
  max,
  info,
  infoContent,
  condition
}) {
  const [rangeValue, setRangeValue] = useState(defaultValue);
  const [isMouseOver, setIsMouseOver] = useState(false);
  useEffect(() => {
    setRangeValue(defaultValue);
  }, [defaultValue]);
  useEffect(() => {
    setValue(rangeValue);
  }, [rangeValue]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: 'flex items-center w-full h-[26px] flex-row gap-2 font-["Inter"]',
      children: [
        /* @__PURE__ */ jsx(
          InputTitle,
          {
            title,
            info,
            infoContent,
            condition
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center w-full h-fit flex-row gap-2",
            onMouseOver: () => setIsMouseOver(true),
            onMouseLeave: () => setIsMouseOver(false),
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  value: rangeValue[0],
                  onChange: (e) => {
                    setRangeValue([Number(e.target.value), rangeValue[1]]);
                  },
                  min: 0,
                  className: "font-medium w-[42px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center [&::-webkit-inner-spin-button]:appearance-none " + (isMouseOver === true ? "text-[#ff340a]" : "text-[#000000]"),
                  step
                }
              ),
              /* @__PURE__ */ jsx(
                u,
                {
                  value: rangeValue,
                  step,
                  min,
                  max,
                  onChange: (values) => {
                    setRangeValue(values);
                  },
                  className: "w-full rounded-md bg-[#F2F2F2] cursor-ew-resize overflow-hidden transition-height duration-300 " + (isMouseOver === true ? "h-[26px]" : "h-[5px]"),
                  trackClassName: "h-full duration-300 " + (isMouseOver === true ? "bg-[#ff340a]" : "bg-[#ABABAB]"),
                  renderTrack: (props, state) => /* @__PURE__ */ jsx(
                    "div",
                    __spreadProps(__spreadValues({}, props), {
                      className: "h-full flex relative " + (isMouseOver === true ? "bg-[#ff340a]" : "bg-[#ABABAB]"),
                      style: __spreadProps(__spreadValues({}, props.style), {
                        opacity: state.index === 1 ? 1 : 0
                      })
                    })
                  ),
                  renderThumb: (props, state) => /* @__PURE__ */ jsx(
                    "div",
                    __spreadProps(__spreadValues({}, props), {
                      className: "w-[8px] h-full justify-center items-center flex",
                      children: /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "absolute w-[2px] bg-[#ffffff] rounded-full pointer-events-none duration-200 h-[30%] " + (isMouseOver === true ? "opacity-100" : "opacity-0")
                        }
                      )
                    })
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  value: rangeValue[1],
                  onChange: (e) => {
                    setRangeValue([rangeValue[0], Number(e.target.value)]);
                  },
                  className: "font-medium w-[42px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center [&::-webkit-inner-spin-button]:appearance-none " + (isMouseOver === true ? "text-[#ff340a]" : "text-[#000000]"),
                  step,
                  max
                }
              )
            ]
          }
        )
      ]
    }
  );
}

export {
  RangeSlider
};
