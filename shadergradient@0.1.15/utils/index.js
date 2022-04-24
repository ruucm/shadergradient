// src/utils/index.ts
import { FiberCanvas, FiberContextProvider, useFiber } from "./useFiber.js";
var cx = (...classes) => classes.filter((a) => !!a).join(" ");
export {
  FiberCanvas,
  FiberContextProvider,
  cx,
  useFiber
};
