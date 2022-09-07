// src/UI/PreviewBtn/PreviewWrapper.tsx
import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { useUIStore } from "../../store.js";
function PreviewWrapper() {
  const previewAnim = useAnimation();
  const [wWidth, setwWidth] = React.useState(0);
  const [wHeight, setwHeight] = React.useState(0);
  const mode = useUIStore((state) => state.mode);
  const handleResize = () => {
    setwWidth(window.innerWidth);
    setwHeight(window.innerHeight);
  };
  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [handleResize]);
  React.useEffect(() => {
    if (mode === "mobile") {
      previewAnim.start({
        width: wHeight * 0.75 * 0.55,
        height: wHeight * 0.75,
        background: "none",
        boxShadow: "0 0 0 1000px white",
        borderRadius: 15,
        top: "12.5vh",
        left: (wWidth - wHeight * 0.75 * 0.55) / 2
      });
    } else if (mode === "web") {
      previewAnim.start({
        width: wHeight * 0.75 * 1.5,
        height: wHeight * 0.75,
        background: "none",
        boxShadow: "0 0 0 1000px white",
        borderRadius: 15,
        top: "12.5vh",
        left: (wWidth - wHeight * 0.75 * 1.5) / 2
      });
    } else if (mode === "full") {
      previewAnim.start({
        width: "100vw",
        height: "100vh",
        boxShadow: "0 0 0 0 white",
        borderRadius: 0,
        position: "absolute",
        top: 0,
        left: 0,
        background: "none",
        zIndex: 0
      });
    } else if (mode === "about") {
    }
  }, [mode, wWidth, wHeight]);
  return /* @__PURE__ */ React.createElement(motion.div, {
    initial: {
      width: "100vw",
      height: "100vh",
      boxShadow: "0 0 0 0 white",
      borderRadius: 0,
      position: "absolute",
      top: 0,
      left: 0,
      background: "transparent",
      zIndex: 0
    },
    animate: previewAnim,
    transition: {
      duration: 0.5
    }
  });
}
PreviewWrapper.defaultProps = {};
export {
  PreviewWrapper
};