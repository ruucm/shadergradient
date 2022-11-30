// src/utils/index.ts
import { FiberContextProvider, useFiber } from "./useFiber.js";
var cx = (...classes) => classes.filter((a) => !!a).join(" ");
function dToR(d) {
  return d / 180 * Math.PI;
}
function dToRArr(degrees) {
  return degrees.map((d) => dToR(d));
}
var sleep = (sec) => {
  return new Promise((resolve) => setTimeout(resolve, sec * 1e3));
};
function formatUrlString(urlString) {
  return urlString.replace("http://localhost:3001/customize", "").replace("https://shadergradient.co/customize", "");
}
export {
  FiberContextProvider,
  cx,
  dToR,
  dToRArr,
  formatUrlString,
  sleep,
  useFiber
};
