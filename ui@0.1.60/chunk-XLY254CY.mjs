// src/utils.tsx
import { RenderTarget } from "framer";
import { useEffect } from "react";
var cx = (...classes) => classes.filter(Boolean).join(" ");
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
var isCanvas = (() => {
  try {
    return RenderTarget.current() !== RenderTarget.preview;
  } catch (e) {
    return false;
  }
})();
var isDebug = false;
var canvasProps = (pixelDensity, fov) => ({
  dpr: pixelDensity,
  //device pixel ratio - 1 default and fast, 2 detailed and slow
  // mode: 'concurrent' as 'legacy' | 'blocking' | 'concurrent',
  camera: { fov },
  // could be replaced with zoom or distance?
  linear: true,
  //sRGBEncoding
  flat: true,
  //ACESFilmicToneMapping
  gl: { preserveDrawingBuffer: true }
  // to capture the canvas (Figma Plugin)
});

export {
  cx,
  useOnClickOutside,
  isCanvas,
  isDebug,
  canvasProps
};
