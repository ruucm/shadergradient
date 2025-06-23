// src/utils.tsx
import { RenderTarget, addPropertyControls, ControlType } from "framer";
import { useState, useEffect } from "react";
import { jsx } from "react/jsx-runtime";
var cx = (...classes) => classes.filter((a) => !!a).join(" ");
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
var isCanvas = RenderTarget.current() !== RenderTarget.preview;
var isDebug = false;
function TriggerSection({ width, height, title }) {
  const [isVisible, setIsVisible] = useState(isDebug);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.metaKey && event.shiftKey && event.key === "d") {
        setIsVisible((prevState) => !prevState);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: isVisible ? 1 : 0,
        background: "rgba(255, 168, 168, .8)",
        color: "red",
        boxShadow: "inset 0px 0px 0px 2px red",
        fontSize: 8,
        fontFamily: "Inter"
      },
      children: title
    }
  );
}
addPropertyControls(TriggerSection, {
  title: {
    type: ControlType.String,
    defaultValue: "title"
  }
});

export {
  cx,
  useOnClickOutside,
  isCanvas,
  isDebug,
  TriggerSection
};
