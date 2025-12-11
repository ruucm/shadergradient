import {
  loadImage,
  sleep
} from "./chunk-O24SW53Z.mjs";
import {
  __async
} from "./chunk-HXGKXP63.mjs";

// src/overrides/FigmaPlugin/exportImage.ts
function restoreCanvas(originalStyle) {
  const canvasContainer = document.getElementById("gradientCanvas");
  if (canvasContainer && originalStyle) {
    canvasContainer.style.cssText = originalStyle;
    window.dispatchEvent(new Event("resize"));
  }
}
function exportImage(nodeWidth, nodeHeight) {
  return __async(this, null, function* () {
    var _a;
    const canvasContainer = document.getElementById("gradientCanvas");
    const r3fCanvas = (_a = canvasContainer == null ? void 0 : canvasContainer.children[0]) == null ? void 0 : _a.children[0];
    if (!canvasContainer || !r3fCanvas) {
      console.error("Canvas not found");
      throw new Error("Canvas not found");
    }
    const originalContainerStyle = canvasContainer.style.cssText;
    if (nodeWidth && nodeHeight && nodeWidth > 0 && nodeHeight > 0) {
      canvasContainer.style.position = "fixed";
      canvasContainer.style.top = "-9999px";
      canvasContainer.style.left = "-9999px";
      canvasContainer.style.width = nodeWidth + "px";
      canvasContainer.style.height = nodeHeight + "px";
      window.dispatchEvent(new Event("resize"));
      yield sleep(0.5);
    }
    const dataURL = r3fCanvas.toDataURL("image/png", 1);
    const image = yield loadImage(dataURL);
    console.log("Image has loaded");
    const view = yield imageToUint8Array(image);
    console.log(`${view.length} bytes!.`);
    return { bytes: view, originalStyle: originalContainerStyle };
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
  restoreCanvas,
  exportImage
};
