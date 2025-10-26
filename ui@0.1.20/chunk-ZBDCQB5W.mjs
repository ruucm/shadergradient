import {
  useStore
} from "./chunk-PE5NPLJ7.mjs";
import {
  isDebug
} from "./chunk-ZRY2JHRC.mjs";
import {
  useScrollableBoxStore
} from "./chunk-P642UK3P.mjs";
import {
  __async,
  __spreadValues
} from "./chunk-HXGKXP63.mjs";

// src/components/Web/ScrollableBox.tsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ScrollBoxText from "https://framer.com/m/ScrollBoxText-zgHd.js";
import { jsx, jsxs } from "react/jsx-runtime";
var textItems = [
  "Shape",
  "Colors",
  "Noise Strength",
  "Noise Density",
  "Spiral",
  "Speed",
  "Grain",
  "Lighting",
  "Position",
  "Rotation",
  "Animation",
  "",
  // end space
  "",
  // end space
  "",
  // end space
  "",
  // end space
  "",
  // end space
  ""
  // end space
];
var visibleItems = 13;
var visibleDelay = 0.3;
function ScrollableTextBox() {
  var _a;
  const containerRef = useRef(null);
  const { activeIndex, setActiveIndex } = useScrollableBoxStore();
  const [, setStore] = useStore();
  const [itemHeight, setItemHeight] = useState(80);
  const [isVisible, setIsVisible] = useState(false);
  const audioContextRef = useRef(null);
  const tickSoundBufferRef = useRef(null);
  const lastSoundIndexRef = useRef(-1);
  useEffect(() => {
    const fetchSound = () => __async(this, null, function* () {
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioContextRef.current = audioContext;
        const response = yield fetch(
          "https://ruucm.github.io/shadergradient/ui@0.0.0/assets/sounds/tick.mp3"
        );
        const arrayBuffer = yield response.arrayBuffer();
        const audioBuffer = yield audioContext.decodeAudioData(arrayBuffer);
        tickSoundBufferRef.current = audioBuffer;
      } catch (error) {
        console.log("Could not load tick sound:", error);
      }
    });
    fetchSound();
  }, []);
  const playTickSound = () => {
    if (audioContextRef.current && tickSoundBufferRef.current) {
      const source = audioContextRef.current.createBufferSource();
      const gainNode = audioContextRef.current.createGain();
      source.buffer = tickSoundBufferRef.current;
      gainNode.gain.value = 0.5;
      source.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);
      source.start(0);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, visibleDelay * 1e3);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const container = containerRef.current;
    if (!container || itemHeight === 0) return;
    const targetScrollTop = activeIndex * itemHeight;
    container.scrollTop = targetScrollTop;
    if (isDebug) {
      console.log("Restored scroll position:", targetScrollTop);
      console.log("Restored activeIndex:", activeIndex);
    }
    setStore({ highlightWord: activeIndex });
  }, [itemHeight]);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const calculateItemHeight = () => {
      const containerHeight = container.clientHeight;
      if (containerHeight <= 0) {
        setTimeout(calculateItemHeight, 100);
        return;
      }
      const newItemHeight = Math.max(50, containerHeight * (1 / visibleItems));
      setItemHeight(newItemHeight);
      if (isDebug) {
        console.log("containerHeight", containerHeight);
        console.log("newItemHeight", newItemHeight);
      }
    };
    const initialTimeout = setTimeout(calculateItemHeight, 50);
    const resizeObserver = new ResizeObserver(calculateItemHeight);
    resizeObserver.observe(container);
    const style = container.style;
    style.setProperty("-webkit-scrollbar", "none");
    style.setProperty("-webkit-scrollbar-track", "none");
    style.setProperty("-webkit-scrollbar-thumb", "none");
    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const currentIndex = Math.round(scrollTop / itemHeight);
      const result = Math.max(0, Math.min(currentIndex, textItems.length - 1));
      setActiveIndex(result);
      setStore({ highlightWord: result });
      if (result !== lastSoundIndexRef.current) {
        lastSoundIndexRef.current = result;
        playTickSound();
      }
    };
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      clearTimeout(initialTimeout);
    };
  }, [itemHeight, isVisible]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        // position: "relative",
        width: "100%",
        // height: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "sticky",
        top: 0,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out"
        // paddingTop: "25vh",
        // paddingBottom: "25vh",
        // top: "50%",
        // transform: "translateY(-50%)",
        // background: "rgba(0,255,0,0.25)", // debug
      },
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            ref: containerRef,
            style: __spreadValues({
              position: "relative",
              height: "100%",
              overflowY: "scroll",
              scrollSnapType: "y mandatory",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              overflowX: "hidden"
            }, isDebug ? { background: "rgba(0,255,0,0.25)" } : {}),
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    height: `${(((_a = containerRef.current) == null ? void 0 : _a.clientHeight) || 0) / 2 - itemHeight / 2}px`
                  }
                }
              ),
              textItems.map((text, index) => /* @__PURE__ */ jsx(
                motion.div,
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: `${itemHeight}px`,
                    scrollSnapAlign: "center",
                    color: "white",
                    fontWeight: "300"
                    // border: "1px solid red", // debug
                  },
                  animate: {
                    scale: index === activeIndex ? 1.2 : 1,
                    opacity: index === activeIndex ? 1 : 0.4
                  },
                  transition: {
                    duration: 0.4,
                    ease: "easeOut"
                  },
                  children: /* @__PURE__ */ jsx(ScrollBoxText, { title: text })
                },
                index
              ))
            ]
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
            transition: { duration: 0.5 },
            children: /* @__PURE__ */ jsx(
              motion.div,
              {
                style: {
                  height: "100%"
                  // background: "rgba(255, 255, 255, 0.1)",
                  // backdropFilter: "blur(4px)",
                  // borderTop: "1px solid rgba(255, 255, 255, 0.2)", // debug
                  // borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                },
                children: isDebug && /* @__PURE__ */ jsxs("div", { children: [
                  "activeIndex: ",
                  activeIndex
                ] })
              }
            )
          }
        )
      ]
    }
  );
}

export {
  ScrollableTextBox
};
