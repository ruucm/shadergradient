import {
  CustomizeNumberInput
} from "./chunk-OUDGQEHL.mjs";
import {
  Spacing
} from "./chunk-VDGKXM7B.mjs";
import {
  u
} from "./chunk-2FOTMNF6.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-HXGKXP63.mjs";

// src/components/Web/Customize/CustomizeRangeSlider.tsx
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var CustomizeRangeSlider = ({
  defaultValue,
  setValue,
  step,
  min,
  max
}) => {
  const defaultStart = (defaultValue == null ? void 0 : defaultValue[0]) || min;
  const defaultEnd = (defaultValue == null ? void 0 : defaultValue[1]) || max;
  const [rangeStart, setRangeStart] = useState(defaultStart);
  const [rangeEnd, setRangeEnd] = useState(defaultEnd);
  useEffect(() => {
    var _a, _b;
    const nextStart = Array.isArray(defaultValue) ? (_a = defaultValue == null ? void 0 : defaultValue[0]) != null ? _a : min : min;
    const nextEnd = Array.isArray(defaultValue) ? (_b = defaultValue == null ? void 0 : defaultValue[1]) != null ? _b : max : max;
    setRangeStart(nextStart);
    setRangeEnd(nextEnd);
  }, [defaultValue, min, max]);
  useEffect(() => {
    setValue([rangeStart, rangeEnd]);
  }, [rangeStart, rangeEnd]);
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center w-full", children: [
    /* @__PURE__ */ jsx(
      CustomizeNumberInput,
      {
        value: rangeStart,
        setValue: setRangeStart,
        step
      }
    ),
    /* @__PURE__ */ jsx(Spacing, { className: "w-4" }),
    /* @__PURE__ */ jsx(
      u,
      {
        value: [Number(rangeStart), Number(rangeEnd)],
        step,
        min,
        max,
        onChange: (value, index) => {
          setRangeStart(value[0]);
          setRangeEnd(value[1]);
        },
        defaultValue: [min, max],
        pearling: true,
        minDistance: 0.5,
        withTracks: true,
        className: "bg-primary h-[8px] w-full bg-opacity-20 rounded-full",
        marks: [(min + max) / 2],
        markClassName: "w-mark h-mark bg-primary top-1/2 transform translate-x-1 -translate-y-1/2 slider-mark-center-x",
        thumbClassName: "bg-primary w-thumb h-thumb rounded-full top-1/2 transform -translate-y-1/2 outline-none cursor-pointer",
        trackClassName: "bg-primary h-[8px] rounded-full relative",
        renderTrack: (props, state) => /* @__PURE__ */ jsx(
          "div",
          __spreadProps(__spreadValues({}, props), {
            style: __spreadProps(__spreadValues({}, props.style), {
              opacity: state.index === 1 ? 0.7 : 0
            })
          })
        )
      }
    ),
    /* @__PURE__ */ jsx(Spacing, { className: "w-4" }),
    /* @__PURE__ */ jsx(
      CustomizeNumberInput,
      {
        value: rangeEnd,
        setValue: setRangeEnd,
        step
      }
    )
  ] });
};

export {
  CustomizeRangeSlider
};
