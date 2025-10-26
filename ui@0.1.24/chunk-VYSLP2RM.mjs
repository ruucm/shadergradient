// src/components/Shared/TextAnimation.tsx
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function TextAnimation({
  fontSize,
  color,
  content,
  delay,
  width = null,
  yBefore = 20,
  isFramerCanvas = false,
  fontFamily = '"Lora", serif'
}) {
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
    if (typeof window === "undefined") return;
    const timer = setTimeout(() => {
      setActivePresetInView(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return /* @__PURE__ */ jsx(Fragment, { children: activePresetInView && /* @__PURE__ */ jsx(
    motion.div,
    {
      style: {
        position: "relative",
        wordBreak: "break-word",
        width: width === 0 ? "fit-content" : width
      },
      children: /* @__PURE__ */ jsx(
        motion.h1,
        {
          variants: letterContainerVariants,
          ref,
          initial: isFramerCanvas ? "after" : "before",
          animate: controls,
          children: /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                textAlign: "left",
                fontSize,
                color,
                fontWeight: 500,
                fontFamily
              },
              children: content.split(" ").map((word, wordI) => /* @__PURE__ */ jsxs(
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
              ))
            }
          )
        }
      )
    }
  ) });
}

export {
  TextAnimation
};
