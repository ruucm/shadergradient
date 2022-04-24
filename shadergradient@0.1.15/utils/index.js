// src/utils/index.ts
import {
  FramerCanvas,
  fiberContext,
  FiberContextProvider,
  useFiber
} from "./useFiber.js";
var cx = (...classes) => classes.filter((a) => !!a).join(" ");
export {
  FiberContextProvider,
  FramerCanvas,
  cx,
  fiberContext,
  useFiber
};
