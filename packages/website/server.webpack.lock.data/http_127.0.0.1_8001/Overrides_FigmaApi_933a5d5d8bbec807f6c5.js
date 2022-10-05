var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/Overrides/FigmaApi.ts
var figma = {};
var getCodeString = (func) => {
  const code = func.toString();
  const body = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
  return body;
};
var postFigmaMessage = (func) => __async(void 0, null, function* () {
  parent.postMessage({
    pluginMessage: {
      type: "execute",
      code: getCodeString(func)
    }
  }, "*");
});
var postFigmaMessageForSnapShot = (func) => __async(void 0, null, function* () {
  const bytes = yield captureCanvas();
  parent.postMessage({
    pluginMessage: {
      type: "SNAPSHOT",
      code: getCodeString(func),
      bytes
    }
  }, "*");
});
function captureCanvas() {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => {
      const image = new Image();
      const r3fCanvas = document.getElementById("gradientCanvas").children[0];
      const dataURL = r3fCanvas.toDataURL("image/png", 1);
      image.src = dataURL;
      image.onload = () => __async(this, null, function* () {
        const view = yield imageToUint8Array(image);
        console.log(`${view.length} bytes`);
        resolve(view);
      });
    });
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
      context.canvas.toBlob((blob) => blob.arrayBuffer().then((buffer) => resolve(new Uint8Array(buffer))).catch(reject));
    });
  });
}
export {
  figma,
  getCodeString,
  postFigmaMessage,
  postFigmaMessageForSnapShot
};
