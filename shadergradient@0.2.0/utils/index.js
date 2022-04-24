// src/utils/index.ts
import { FiberContextProvider, useFiber } from "./useFiber.js";
var cx = (...classes) => classes.filter((a) => !!a).join(" ");
export {
  FiberContextProvider,
  cx,
  useFiber
};
