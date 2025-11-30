import {
  GIFEncoder
} from "./chunk-YFGZA6BU.mjs";
import {
  applyPalette
} from "./chunk-DC3YOL4Q.mjs";
import {
  quantize
} from "./chunk-BI4IT72G.mjs";
import {
  loadImage,
  sleep
} from "./chunk-JFVMQNKM.mjs";
import {
  __async
} from "./chunk-HXGKXP63.mjs";

// src/overrides/FigmaPlugin/exportGIF.ts
var stopped = false;
function exportGIF(option, callback, controller) {
  return __async(this, null, function* () {
    stopped = false;
    const { rangeStart, rangeEnd, setAnimate, setUTime, frameRate, grain } = option;
    const frameRateInterval = 1 / frameRate;
    const delay = frameRateInterval * 1e3;
    setAnimate("off");
    setUTime(rangeStart);
    const duration = rangeEnd - rangeStart;
    const totalFrames = Math.ceil(duration * frameRate);
    console.log("totalFrames", totalFrames);
    console.log("duration", duration);
    return new Promise((resolve, reject) => __async(this, null, function* () {
      const frames = new Array(totalFrames).fill(0).map((_, i) => i);
      const signal = controller.signal;
      signal.addEventListener("abort", () => {
        stopped = true;
        setAnimate("on");
        callback(-1);
        reject(new Error("Export was cancelled"));
      });
      try {
        const gif = GIFEncoder();
        for (let i of frames) {
          if (stopped) {
            break;
          }
          const playhead = rangeStart + i / frameRate;
          setUTime(playhead);
          const [imageData, width, height] = yield getImage();
          const { data } = imageData;
          const format = "rgb444";
          const palette = quantize(data, 256, { format });
          const index = applyPalette(data, palette, format);
          yield gif.writeFrame(index, width, height, { palette, delay });
          console.log("GIF Frame has written");
          yield sleep(0.01);
          callback(i / (totalFrames - 1));
        }
        if (!stopped) {
          gif.finish();
          const buffer = gif.bytesView();
          if (option.destination === "localFile") {
            download(buffer, "shadergradient.gif", { type: "image/gif" });
          }
          setAnimate("on");
          const b64 = yield base64_arraybuffer(buffer);
          const dataURL = "data:image/gif;base64," + b64;
          resolve(gifToUint8Array(dataURL));
        }
      } catch (error) {
        console.error("Export error:", error);
        setAnimate("on");
        callback(-1);
        reject(error);
      } finally {
        if (stopped) {
          setAnimate("on");
        }
      }
    }));
  });
}
function gifToUint8Array(dataURL) {
  return __async(this, null, function* () {
    const binaryString = atob(dataURL.split(",")[1]);
    const uint8Array = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++)
      uint8Array[i] = binaryString.charCodeAt(i);
    return uint8Array;
  });
}
function download(buf, filename, type) {
  const blob = buf instanceof Blob ? buf : new Blob([buf], { type });
  downloadBlob(blob, filename);
}
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
}
function getImage() {
  return __async(this, null, function* () {
    const r3fCanvas = document.getElementById("gradientCanvas").children[0].children[0];
    const dataURL = r3fCanvas.toDataURL("image/png", 1);
    const image = yield loadImage(dataURL);
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.canvas.width = image.width;
    context.canvas.height = image.height;
    context.drawImage(image, 0, 0);
    return [
      new ImageData(
        context.getImageData(
          0,
          0,
          context.canvas.width,
          context.canvas.height
        ).data,
        context.canvas.width,
        context.canvas.height
      ),
      image.width,
      image.height
    ];
  });
}
var base64_arraybuffer = (data) => __async(void 0, null, function* () {
  const base64url = yield new Promise((r) => {
    const reader = new FileReader();
    reader.onload = () => r(reader.result);
    reader.readAsDataURL(new Blob([data]));
  });
  return base64url.substring(base64url.indexOf(",") + 1);
});

export {
  exportGIF
};
