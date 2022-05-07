// src/utils/index.ts
import { FiberContextProvider, useFiber } from "./useFiber.js";
var cx = (...classes) => classes.filter((a) => !!a).join(" ");
function dToR(d) {
  return d / 180 * Math.PI;
}
function dToRArr(degrees) {
  return degrees.map((d) => dToR(d));
}
export {
  FiberContextProvider,
  cx,
  dToR,
  dToRArr,
  useFiber
};
