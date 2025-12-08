import {
  __spreadProps,
  __spreadValues
} from "./chunk-HXGKXP63.mjs";

// src/components/Shared/TextAnimation.tsx
import { ControlType, RenderTarget } from "framer";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { jsx, jsxs } from "react/jsx-runtime";
var currentTarget = RenderTarget.current();
var isOnCanvas = currentTarget === RenderTarget.canvas;
function TextAnimation({
  fontSize,
  color,
  content,
  delay = 100,
  width = null,
  yBefore = 20,
  fontFamily = '"Lora", serif'
}) {
  const textStyles = {
    textAlign: "left",
    fontSize,
    color,
    fontWeight: 500,
    fontFamily
  };
  const letterContainerVariants = {
    before: { transition: { staggerChildren: 0.015 } },
    after: { transition: { staggerChildren: 0.015 } }
  };
  const letterVariants = {
    before: {
      opacity: 0,
      y: yBefore,
      rotate: -15,
      scale: 0.4,
      transition: {
        type: "spring",
        duration: 0.4,
        damping: 10
      }
    },
    after: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 0.4,
        damping: 10
        // stiffness: 80,
      }
    }
  };
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();
  const [activePresetInView, setActivePresetInView] = useState(false);
  useEffect(() => {
    if (inView) {
      controls.start("after");
    } else {
      controls.start("before");
    }
  }, [controls, inView]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActivePresetInView(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      style: {
        position: "relative",
        wordBreak: "break-word",
        width: width === 0 ? "fit-content" : width
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: __spreadProps(__spreadValues({}, textStyles), {
              opacity: 0,
              pointerEvents: "none",
              userSelect: "none",
              whiteSpace: "pre-wrap"
            }),
            children: content
          }
        ),
        /* @__PURE__ */ jsx(
          motion.h1,
          {
            variants: letterContainerVariants,
            ref,
            initial: isOnCanvas ? "after" : "before",
            animate: isOnCanvas ? "after" : controls,
            "aria-hidden": true,
            style: __spreadProps(__spreadValues({}, textStyles), {
              position: "absolute",
              inset: 0,
              margin: 0,
              width: "100%",
              pointerEvents: "none"
            }),
            children: /* @__PURE__ */ jsx("div", { children: content.split(" ").map((word, wordI) => /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  display: "inline-block"
                },
                children: [
                  Array.from(word).map((letter, index) => /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      style: {
                        position: "relative",
                        display: "inline-block",
                        width: "auto"
                      },
                      variants: letterVariants,
                      children: letter === " " ? "\xA0" : letter
                    },
                    `${index}-${letter}`
                  )),
                  wordI !== content.split(" ").length - 1 ? "\xA0" : null
                ]
              },
              `word-${word}-${wordI}`
            )) })
          }
        )
      ]
    }
  );
}
TextAnimation.propertyControls = {
  width: { type: ControlType.Number, defaultValue: 300 },
  content: { type: ControlType.String, defaultValue: "Hello World" },
  color: { type: ControlType.Color, defaultValue: "#ffffff" },
  fontSize: { type: ControlType.Number, defaultValue: 20 },
  fontFamily: { type: ControlType.String, defaultValue: "Lora" }
};

export {
  TextAnimation
};
