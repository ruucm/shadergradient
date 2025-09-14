// src/components/Shared/TextHover.tsx
import { motion } from "framer-motion";
import { jsx, jsxs } from "react/jsx-runtime";
var letterContainerVariants = {
  initial: { transition: { staggerChildren: 0.015 } },
  default: { transition: { staggerChildren: 0.015 } },
  hover: { transition: { staggerChildren: 0.03 } }
};
var letterVariants = {
  initial: {
    opacity: 0,
    y: 60,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  },
  default: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 200
    }
  },
  hover: {
    opacity: 1,
    y: -4,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  }
};
function TextHover({
  fontSize,
  color,
  content,
  delay = 0,
  width = null,
  font = null,
  border = false,
  fontWeight = 400,
  isFramerCanvas = false
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      style: {
        position: "relative",
        wordBreak: "break-word",
        maxWidth: width === 0 ? "fit-content" : width,
        width: "fit-content",
        height: "fit-content",
        fontFamily: '"' + font + '", san-serif',
        display: "flex",
        flexDirection: "column",
        color,
        whiteSpace: "nowrap",
        userSelect: "none"
      },
      children: /* @__PURE__ */ jsxs(
        motion.h1,
        {
          variants: letterContainerVariants,
          initial: isFramerCanvas ? "default" : "initial",
          whileInView: "default",
          whileHover: "hover",
          style: {
            fontWeight,
            margin: 0,
            width: "fit-content",
            userSelect: "none"
          },
          transition: { delay },
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  textAlign: "left",
                  fontSize,
                  color,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  height: "fit-content"
                },
                children: content.split(" ").map((word, wordI) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    style: {
                      height: "fit-content",
                      display: "flex",
                      alignItems: "center"
                    },
                    children: [
                      Array.from(word).map((letter, index) => /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          style: {
                            width: "fit-content",
                            height: "fit-content",
                            overflow: "hidden",
                            position: "relative",
                            display: "inline-block"
                          },
                          children: /* @__PURE__ */ jsx(
                            motion.span,
                            {
                              variants: letterVariants,
                              transition: { duration: 0.5 },
                              style: {
                                position: "relative",
                                display: "inline-block"
                              },
                              children: letter === " " ? "\xA0" : letter
                            }
                          )
                        },
                        `${index}-${letter}`
                      )),
                      wordI !== content.split(" ").length - 1 ? "\xA0" : null
                    ]
                  },
                  `word-${word}-${wordI}`
                ))
              }
            ),
            border && /* @__PURE__ */ jsx(
              motion.div,
              {
                style: { background: color, height: 2, marginTop: 3 },
                initial: { width: 0 },
                animate: { width: "100%" },
                transition: { delay: delay + 0.5 }
              }
            )
          ]
        }
      )
    }
  );
}

export {
  TextHover
};
