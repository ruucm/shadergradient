// src/utils/index.ts
function degToRad(deg) {
  return deg * (Math.PI / 180);
}
function dToR(d) {
  return d / 180 * Math.PI;
}
function dToRArr(degrees) {
  return degrees.map((d) => dToR(d));
}
function formatUrlString(urlString) {
  return urlString.replace("http://localhost:3001/customize", "").replace("https://shadergradient.co/customize", "").replace("https://www.shadergradient.co/customize", "");
}

export {
  degToRad,
  dToR,
  dToRArr,
  formatUrlString
};
