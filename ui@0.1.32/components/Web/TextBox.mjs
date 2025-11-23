"use client";
import "../../chunk-HXGKXP63.mjs";

// src/components/Web/TextBox.tsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ScrollBoxText from "https://framer.com/m/ScrollBoxText-zgHd.js";
import { ControlType } from "framer";
import { jsx, jsxs } from "react/jsx-runtime";
var defaultTextItems = [
  { title: "Shape", gradient: 0 },
  { title: "Colors", gradient: 1 },
  { title: "Noise Strength", gradient: 2 },
  { title: "Noise Density", gradient: 3 },
  { title: "Spiral", gradient: 4 },
  { title: "Speed", gradient: 5 },
  { title: "Grain", gradient: 6 },
  { title: "Lighting", gradient: 7 },
  { title: "Position", gradient: 8 },
  { title: "Rotation", gradient: 9 },
  { title: "Animation", gradient: 10 }
];
function TextBox({
  activeIndex = 0,
  textItems = defaultTextItems,
  transitionDuration = 0.3,
  transitionEase = "easeInOut"
} = {}) {
  const containerRef = useRef(null);
  const [itemHeight, setItemHeight] = useState(80);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const calculateItemHeight = () => {
      const containerHeight = container.clientHeight;
      if (containerHeight <= 0) {
        setTimeout(calculateItemHeight, 100);
        return;
      }
      const newItemHeight = Math.max(50, containerHeight * 0.1);
      setItemHeight(newItemHeight);
    };
    const initialTimeout = setTimeout(calculateItemHeight, 50);
    const resizeObserver = new ResizeObserver(calculateItemHeight);
    resizeObserver.observe(container);
    return () => {
      resizeObserver.disconnect();
      clearTimeout(initialTimeout);
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        transform: `translateY(-${itemHeight / 2}px)`
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0
            },
            children: /* @__PURE__ */ jsx(
              motion.div,
              {
                style: {
                  transform: `translateY(-${itemHeight / 2}px)`
                },
                animate: {
                  y: -activeIndex * itemHeight
                },
                transition: {
                  duration: transitionDuration,
                  ease: transitionEase
                },
                children: textItems.map((item, index) => /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: `${itemHeight}px`,
                      color: "white",
                      fontWeight: "300"
                    },
                    animate: {
                      scale: index === activeIndex ? 1.2 : 1,
                      opacity: index === activeIndex ? 1 : 0.4
                    },
                    transition: {
                      duration: transitionDuration,
                      ease: transitionEase
                    },
                    children: /* @__PURE__ */ jsx(ScrollBoxText, { title: item.title })
                  },
                  index
                ))
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: {
              position: "absolute",
              top: "50%",
              left: "0",
              right: "0",
              height: `${itemHeight}px`,
              transform: "translateY(-50%)",
              pointerEvents: "none"
            },
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 }
          }
        )
      ]
    }
  );
}
TextBox.propertyControls = {
  activeIndex: {
    type: ControlType.Number,
    title: "Active Index",
    defaultValue: 0,
    min: 0,
    step: 1,
    description: "Index of the currently active text item"
  },
  textItems: {
    type: ControlType.Array,
    control: {
      type: ControlType.Object,
      controls: {
        title: { type: ControlType.String, defaultValue: "phrase" },
        gradient: { type: ControlType.Number, defaultValue: 0 }
      }
    },
    defaultValue: defaultTextItems,
    description: "Array of text items to display"
  },
  transitionDuration: {
    type: ControlType.Number,
    title: "Transition Duration",
    defaultValue: 0.3,
    min: 0,
    max: 2,
    step: 0.1,
    description: "Duration of the transition animation in seconds"
  },
  transitionEase: {
    type: ControlType.Enum,
    title: "Transition Ease",
    options: [
      "linear",
      "easeIn",
      "easeOut",
      "easeInOut",
      "circIn",
      "circOut",
      "circInOut",
      "backIn",
      "backOut",
      "backInOut",
      "anticipate"
    ],
    defaultValue: "easeInOut",
    description: "Easing function for the transition"
  }
};
export {
  TextBox as default
};
