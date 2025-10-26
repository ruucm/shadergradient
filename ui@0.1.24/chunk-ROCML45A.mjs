import {
  loadImage
} from "./chunk-6SYBY3Y5.mjs";
import {
  __async
} from "./chunk-CU5I7XXF.mjs";

// src/overrides/FigmaPlugin/exportImage.ts
function exportImage() {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      const r3fCanvas = document.getElementById("gradientCanvas").children[0].children[0];
      const dataURL = r3fCanvas.toDataURL("image/png", 1);
      const image = yield loadImage(dataURL);
      console.log("Image has loaded");
      const view = yield imageToUint8Array(image);
      console.log(`${view.length} bytes!.`);
      resolve(view);
    }));
  });
}
function imageToUint8Array(image) {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.canvas.width = image.width;
      context.canvas.height = image.height;
      context.drawImage(image, 0, 0);
      context.canvas.toBlob(
        (blob) => blob.arrayBuffer().then((buffer) => resolve(new Uint8Array(buffer))).catch(reject)
      );
    });
  });
}

export {
  exportImage
};
