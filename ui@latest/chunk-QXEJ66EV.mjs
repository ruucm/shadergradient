import {
  isDebug
} from "./chunk-ZRY2JHRC.mjs";

// src/components/Web/TriggerSection.tsx
import { ControlType } from "framer";
import { useState, useEffect } from "react";
import { jsx } from "react/jsx-runtime";
function TriggerSection({ width, height, title }) {
  const [isVisible, setIsVisible] = useState(isDebug);
  useEffect(() => {
    if (typeof window === "undefined") return;
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
TriggerSection.propertyControls = {
  title: {
    type: ControlType.String,
    defaultValue: "title"
  }
};

export {
  TriggerSection
};
