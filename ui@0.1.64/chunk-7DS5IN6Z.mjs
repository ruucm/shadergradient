import {
  sleep
} from "./chunk-O24SW53Z.mjs";
import {
  __async
} from "./chunk-HXGKXP63.mjs";

// src/overrides/FigmaPlugin/exportVideo.ts
var stopped = false;
var mediaRecorder = null;
var recordedChunks = [];
function exportVideo(option, callback, controller) {
  return __async(this, null, function* () {
    const { rangeStart, rangeEnd, destination, nodeWidth, nodeHeight } = option;
    const duration = rangeEnd - rangeStart;
    stopped = false;
    const signal = controller.signal;
    signal.addEventListener("abort", () => {
      callback(-1);
      stopped = true;
      if (mediaRecorder) mediaRecorder.stop();
    });
    const canvasContainer = document.getElementById("gradientCanvas");
    const originalStyle = (canvasContainer == null ? void 0 : canvasContainer.style.cssText) || "";
    if (canvasContainer && nodeWidth && nodeHeight && nodeWidth > 0 && nodeHeight > 0) {
      canvasContainer.style.position = "fixed";
      canvasContainer.style.top = "-9999px";
      canvasContainer.style.left = "-9999px";
      canvasContainer.style.width = nodeWidth + "px";
      canvasContainer.style.height = nodeHeight + "px";
      window.dispatchEvent(new Event("resize"));
      yield sleep(0.5);
    }
    const blob = yield recordVideo(duration, callback);
    if (stopped || !blob) return { originalStyle };
    if (destination === "onCanvas") {
      const arrayBuffer = yield blob.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      return { bytes, originalStyle };
    } else {
      downloadVideo(blob);
      return { originalStyle };
    }
  });
}
function recordVideo(duration, callback) {
  return __async(this, null, function* () {
    return new Promise((resolve) => __async(this, null, function* () {
      var _a;
      const canvasContainer = document.getElementById("gradientCanvas");
      const r3fCanvas = (_a = canvasContainer == null ? void 0 : canvasContainer.children[0]) == null ? void 0 : _a.children[0];
      if (!r3fCanvas || !canvasContainer) {
        console.error("Canvas not found");
        resolve(null);
        return;
      }
      recordedChunks = [];
      const stream = r3fCanvas.captureStream();
      mediaRecorder = new MediaRecorder(stream, {
        mimeType: "video/webm;codecs=h264",
        videoBitsPerSecond: 25e6
        // 25 Mbps for higher quality
      });
      const interval = setInterval(() => {
        callback((prev) => {
          const progress = prev + 1 / duration;
          if (progress >= 1) clearInterval(interval);
          return progress;
        });
      }, 1e3);
      mediaRecorder.addEventListener("dataavailable", (e) => {
        if (e.data.size > 0) {
          recordedChunks.push(e.data);
        }
      });
      mediaRecorder.addEventListener("stop", () => {
        clearInterval(interval);
        if (!stopped) {
          const blob = new Blob(recordedChunks, { type: "video/webm" });
          resolve(blob);
        } else {
          resolve(null);
        }
      });
      mediaRecorder.start();
      yield sleep(duration);
      mediaRecorder.stop();
    }));
  });
}
function downloadVideo(blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style.display = "none";
  a.href = url;
  a.download = "shadergradient.webm";
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

export {
  exportVideo
};
