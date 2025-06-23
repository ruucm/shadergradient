// src/utils.tsx
import { RenderTarget } from "framer";
import { useEffect } from "react";
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

export {
  cx,
  useOnClickOutside,
  isCanvas,
  isDebug
};
