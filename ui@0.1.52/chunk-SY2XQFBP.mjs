import {
  sleep
} from "./chunk-RDD4GF6E.mjs";
import {
  __async
} from "./chunk-HXGKXP63.mjs";

// src/overrides/FigmaPlugin/exportVideo.ts
var stopped = false;
function exportVideo(option, callback, controller) {
  return __async(this, null, function* () {
    const { rangeStart, rangeEnd } = option;
    const duration = rangeEnd - rangeStart;
    stopped = false;
    recordVideo(duration);
    const signal = controller.signal;
    signal.addEventListener("abort", () => {
      callback(-1);
      stopped = true;
      clearInterval(interval);
      mediaRecorder.stop();
    });
    const interval = setInterval(() => {
      callback((prev) => {
        const progress = prev + 1 / duration;
        if (progress >= 1) clearInterval(interval);
        return progress;
      });
    }, 1e3);
  });
}
var mediaRecorder;
var recordedChunks = [];
function recordVideo(duration) {
  return __async(this, null, function* () {
    const r3fCanvas = document.getElementById("gradientCanvas").children[0].children[0];
    recordedChunks = [];
    const stream = r3fCanvas.captureStream();
    mediaRecorder = new MediaRecorder(stream, {
      mimeType: "video/webm;codecs=h264",
      videoBitsPerSecond: 8e6
      // 8 Mbps
    });
    mediaRecorder.addEventListener("dataavailable", (e) => {
      if (e.data.size > 0) {
        recordedChunks.push(e.data);
      }
    });
    mediaRecorder.addEventListener("stop", () => {
      if (!stopped) downloadVideo();
    });
    mediaRecorder.start();
    yield sleep(duration);
    mediaRecorder.stop();
  });
}
function downloadVideo() {
  const blob = new Blob(recordedChunks, {
    type: "video/webm"
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "shadergradient.webm";
  a.click();
  window.URL.revokeObjectURL(url);
}

export {
  exportVideo,
  recordVideo
};
