// src/UI/Cursor/Cursor.tsx
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursorStore } from "../../store.js";
function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorSize = 28;
  const motionCursorSize = useMotionValue(28);
  const springConfig = { damping: 30, stiffness: 150, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const cursorSizeSpring = useSpring(motionCursorSize, springConfig);
  const hover = useCursorStore((state) => state.hover);
  let timer;
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - motionCursorSize.prev / 2);
      cursorY.set(e.clientY - motionCursorSize.prev / 2);
      if (hover === "default") {
        motionCursorSize.set(14);
      } else if (hover === "button") {
        motionCursorSize.set(100);
      } else if (hover === "arrowBtn") {
        motionCursorSize.set(40);
      } else if (hover === "arrowUp" || hover === "arrowDown") {
        motionCursorSize.set(80);
      } else if (hover === "preview") {
        motionCursorSize.set(0);
      }
      clearTimeout(timer);
      timer = setTimeout(mouseStopped, 100);
    };
    const mouseStopped = () => {
      if (hover === "default") {
        motionCursorSize.set(28);
      } else if (hover === "button") {
        motionCursorSize.set(100);
      } else if (hover === "arrowBtn") {
        motionCursorSize.set(40);
      } else if (hover === "arrowUp" || hover === "arrowDown") {
        motionCursorSize.set(80);
      } else if (hover === "preview") {
        motionCursorSize.set(0);
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [hover]);
  return /* @__PURE__ */ React.createElement(motion.div, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 10,
      width: cursorSizeSpring,
      height: cursorSizeSpring,
      borderRadius: 100,
      mixBlendMode: hover === "default" || hover === "button" ? "difference" : "normal",
      background: "white",
      translateX: cursorXSpring,
      translateY: cursorYSpring,
      pointerEvents: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: '"Inter", sans-serif'
    }
  }, /* @__PURE__ */ React.createElement(motion.div, {
    style: {
      display: hover === "arrowUp" ? "flex" : "none",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 50,
      textAlign: "center",
      color: "#FF430A"
    },
    animate: {
      scale: hover === "arrowUp" ? 1 : 0,
      rotate: hover === "arrowUp" ? -15 : 15
    },
    transition: {
      springConfig
    }
  }, "\u2191"), /* @__PURE__ */ React.createElement(motion.div, {
    style: {
      display: hover === "arrowDown" ? "flex" : "none",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 50,
      textAlign: "center",
      color: "#FF430A"
    },
    animate: {
      scale: hover === "arrowDown" ? 1 : 0,
      rotate: hover === "arrowDown" ? 15 : -15
    },
    transition: {
      springConfig
    }
  }, "\u2193"));
}
Cursor.defaultProps = {};
export {
  Cursor
};
