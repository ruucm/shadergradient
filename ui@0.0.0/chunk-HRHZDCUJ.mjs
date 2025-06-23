import {
  __spreadProps,
  __spreadValues
} from "./chunk-WNQUEZJF.mjs";

// src/components/Web/SimpleSlider.tsx
import { ControlType, RenderTarget, withCSS } from "framer";
import {
  animate,
  transform,
  motion,
  useTransform
} from "framer-motion";
import { useRef, useState, useCallback } from "react";
import {
  isMotionValue,
  useOnChange,
  useAutoMotionValue
} from "https://framer.com/m/framer/default-utils.js@^0.45.0";
import { throttle } from "https://framer.com/m/framer/lodash.js@0.3.0";
import { jsx, jsxs } from "react/jsx-runtime";
var SimpleSlider = withCSS(
  function Slider(props) {
    const {
      value: valueProp,
      trackHeight,
      fillColor,
      focusColor,
      min,
      max,
      onChange,
      onChangeLive,
      onMax,
      onMin,
      trackColor,
      trackRadius,
      knobSize,
      knobColor,
      constrainKnob,
      shadow,
      shouldAnimateChange,
      transition,
      overdrag,
      knobSetting,
      style
    } = props;
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const onCanvas = RenderTarget.current() === RenderTarget.canvas;
    const shouldAnimate = shouldAnimateChange && !onCanvas;
    const isConstrained = constrainKnob && knobSetting === "Show" /* Show */;
    const showKnob = knobSetting !== "Hide" /* Hide */;
    const input = useRef();
    const knobPadding = 8;
    const updateValue = useCallback(
      (newVal, target) => {
        throttledInputUpdate(newVal);
        if (onChange) onChange(newVal);
        if (shouldAnimate) animate(target, newVal, transition);
        else requestAnimationFrame(() => target.set(newVal));
      },
      [transition, shouldAnimate, onChange]
    );
    const value = useAutoMotionValue(valueProp, {
      onChange: updateValue,
      transform: (value2) => transform(value2, [0, 100], [min, max])
    });
    const knobX = useTransform(value, [min, max], ["0%", "100%"]);
    const normalizedValue = useTransform(value, [min, max], [0, 1]);
    const throttledInputUpdate = useCallback(
      throttle((val) => {
        var _a;
        if ((_a = input.current) == null ? void 0 : _a.value) input.current.value = val;
      }, 100),
      [input]
    );
    useOnChange(value, (val) => {
      if (isMotionValue(valueProp)) throttledInputUpdate(val);
      if (onMax && val >= max) onMax();
      if (onMin && val <= min) onMin();
      if (onChangeLive) onChangeLive(val);
    });
    const handleInputChange = (e) => {
      updateValue(parseFloat(e.target.value), value);
    };
    const handleMouseDown = (e) => {
      if (parseFloat(e.target.value) !== 0)
        updateValue(parseFloat(e.target.value), value);
    };
    const handleMouseUp = () => {
    };
    const totalKnobWidth = showKnob ? knobSize + knobPadding : knobPadding;
    const totalHeight = Math.max(knobSize + knobPadding, trackHeight);
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: "framer-default-slider",
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        style: __spreadProps(__spreadValues({
          position: "relative"
        }, style), {
          alignItems: "center",
          justifyContent: "flex-start",
          border: `0px solid ${focusColor}`,
          "--framer-default-slider-height": totalHeight,
          "--framer-default-slider-width": totalKnobWidth
        }),
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: input,
              style: __spreadValues(__spreadProps(__spreadValues({
                flexShrink: 0,
                minHeight: totalHeight,
                opacity: 0,
                margin: 0,
                display: "flex"
              }, style), {
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
              }), !isConstrained && {
                width: `calc(100% + ${totalKnobWidth}px)`,
                marginLeft: -totalKnobWidth / 2
              }),
              onFocus: () => setFocused(true),
              onBlur: () => setFocused(false),
              type: "range",
              min,
              max,
              defaultValue: -1,
              step: "any",
              onChange: handleInputChange,
              onMouseDown: handleMouseDown,
              onMouseUp: handleMouseUp
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                background: trackColor,
                position: "absolute",
                top: `calc(50% - ${Math.ceil(trackHeight / 2)}px)`,
                borderRadius: trackRadius,
                display: "flex",
                height: trackHeight,
                width: "100%",
                transformOrigin: "left",
                pointerEvents: "none",
                overflow: "hidden"
              },
              children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  style: {
                    height: trackHeight,
                    width: "100%",
                    background: fillColor,
                    scaleX: normalizedValue,
                    position: "absolute",
                    top: `calc(50% - ${Math.ceil(trackHeight / 2)}px)`,
                    transformOrigin: "left",
                    pointerEvents: "none"
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              style: __spreadValues({
                x: knobX,
                position: "absolute",
                display: "flex",
                width: "100%",
                top: `calc(50% - ${Math.floor(knobSize / 2)}px)`,
                pointerEvents: "none"
              }, isConstrained ? {
                width: `calc(100% - ${knobSize}px`,
                left: 0
              } : {
                width: `100%`,
                left: -knobSize / 2
              }),
              children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: false,
                  animate: {
                    scale: hovered && knobSetting === "Hover" /* Hover */ || knobSetting === "Show" /* Show */ ? 1 : 0
                  },
                  transition: {
                    type: "spring",
                    stiffness: 900,
                    damping: 40
                  },
                  style: {
                    transformOrigin: "50% 50%",
                    width: knobSize,
                    height: knobSize,
                    borderRadius: "50%",
                    background: knobColor,
                    pointerEvents: "none",
                    boxShadow: `0px 1px 2px 0px ${shadow}, 
                                0px 2px 4px 0px ${shadow}, 
                                0px 4px 8px 0px ${shadow}`
                  }
                }
              )
            }
          )
        ]
      }
    );
  },
  [
    ".framer-default-slider input[type=range] {  width: 100%; height: 100% background:transparent margin: 0;}",
    ".framer-default-slider input[type=range]:focus { outline: none; }",
    ".framer-default-slider input[type=range]::-ms-track { width: 100%; cursor: pointer; background: transparent; border-color: transparent; color: transparent; }",
    ".framer-default-slider input[type=range]::-webkit-slider-thumb { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }",
    ".framer-default-slider input[type=range]::-moz-range-thumb { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }",
    ".framer-default-slider input[type=range]::-ms-thumb  { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }"
  ]
);
SimpleSlider.displayName = "SimpleSlider";
SimpleSlider.defaultProps = {
  height: 20,
  width: 200,
  trackHeight: 4,
  fillColor: "#09F",
  trackColor: "#DDD",
  knobColor: "#FFF",
  focusColor: "rgba(0, 153, 255,0)",
  shadow: "rgba(0,0,0,0.1)",
  knobSize: 20,
  overdrag: true,
  min: 0,
  max: 100,
  value: 50,
  trackRadius: 5,
  knobSetting: "Show" /* Show */,
  constrainKnob: false,
  transition: {
    type: "spring",
    delay: 0,
    stiffness: 750,
    damping: 50
  },
  shouldAnimateChange: true
};
SimpleSlider.propertyControls = {
  fillColor: {
    title: "Tint",
    type: ControlType.Color
  },
  trackColor: {
    title: "Track",
    type: ControlType.Color
  },
  knobColor: {
    title: "Knob",
    type: ControlType.Color
  },
  shadow: { type: ControlType.Color, title: "Shadow" },
  // focusColor: {
  //     title: "Focus",
  //     type: ControlType.Color,
  // },
  shouldAnimateChange: {
    type: ControlType.Boolean,
    title: "Changes",
    enabledTitle: "Animate",
    disabledTitle: "Instant"
  },
  transition: {
    type: ControlType.Transition,
    defaultValue: SimpleSlider.defaultProps.transition
  },
  knobSetting: {
    type: ControlType.Enum,
    displaySegmentedControl: true,
    title: "Knob",
    options: ["Hide", "Hover", "Show"]
  },
  constrainKnob: {
    type: ControlType.Boolean,
    title: "Constrain",
    enabledTitle: "Yes",
    disabledTitle: "No",
    hidden: ({ knobSetting }) => knobSetting !== "Show" /* Show */
  },
  knobSize: {
    type: ControlType.Number,
    title: "Knob",
    min: 10,
    max: 100,
    hidden: ({ knobSetting }) => knobSetting === "Hide" /* Hide */
  },
  value: {
    type: ControlType.Number,
    title: "Value",
    min: 0,
    max: 100,
    unit: "%"
  },
  trackHeight: {
    title: "Height",
    type: ControlType.Number,
    min: 0
  },
  min: {
    title: "Min",
    type: ControlType.Number,
    displayStepper: true
  },
  trackRadius: {
    type: ControlType.Number,
    displayStepper: true,
    min: 0,
    max: 200,
    title: "Radius"
  },
  max: {
    title: "Max",
    type: ControlType.Number,
    displayStepper: true
  },
  onChange: { type: ControlType.EventHandler },
  onMax: { type: ControlType.EventHandler },
  onMin: { type: ControlType.EventHandler }
};

export {
  SimpleSlider
};
