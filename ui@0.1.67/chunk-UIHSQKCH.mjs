import {
  exportGIF
} from "./chunk-3VGG4ZI2.mjs";
import {
  exportImage,
  restoreCanvas
} from "./chunk-LSFLUJDF.mjs";
import {
  exportVideo
} from "./chunk-7DS5IN6Z.mjs";
import {
  useUIStore
} from "./chunk-R6GBIJ5D.mjs";
import {
  __async
} from "./chunk-HXGKXP63.mjs";

// src/overrides/FigmaPlugin/FigmaApi.ts
var figma = {};
var getCodeString = (func) => {
  const code = func.toString();
  const body = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
  return body;
};
var postFigmaMessage = (func) => __async(void 0, null, function* () {
  parent.postMessage(
    {
      pluginMessage: {
        type: "execute",
        code: getCodeString(func)
      }
    },
    "*"
  );
});
var postFigmaMessageForExport = (option, callback, controller) => __async(void 0, null, function* () {
  const { setIsExporting } = useUIStore.getState();
  setIsExporting(true);
  let originalStyle = "";
  try {
    const supportsVideoOnCanvas = option.editorType === "slides" || option.editorType === "buzz";
    if (option.destination === "onCanvas") {
      if (supportsVideoOnCanvas && option.format === "webm") {
        const result = yield exportVideo(option, callback, controller);
        originalStyle = result.originalStyle;
        if (result.bytes) {
          parent.postMessage(
            {
              pluginMessage: {
                type: "SNAPSHOT_VIDEO",
                code: getCodeString(callback),
                bytes: result.bytes
              }
            },
            "*"
          );
        }
        callback(-1);
      } else {
        const result = yield exportGIF(option, callback, controller);
        originalStyle = result.originalStyle;
        parent.postMessage(
          {
            pluginMessage: {
              type: "SNAPSHOT_GIF",
              code: getCodeString(callback),
              bytes: result.bytes
            }
          },
          "*"
        );
        callback(-1);
      }
    } else if (option.destination === "localFile") {
      if (option.format === "gif") {
        const result = yield exportGIF(option, callback, controller);
        originalStyle = result.originalStyle;
      } else if (option.format === "webm") {
        const result = yield exportVideo(option, callback, controller);
        originalStyle = result.originalStyle;
      }
      callback(-1);
    }
  } finally {
    setIsExporting(false);
    restoreCanvas(originalStyle);
  }
});
var postFigmaMessageForSnapShot = (func, nodeWidth, nodeHeight) => __async(void 0, null, function* () {
  const { setIsExporting } = useUIStore.getState();
  setIsExporting(true);
  let originalStyle = "";
  try {
    const result = yield exportImage(nodeWidth, nodeHeight);
    originalStyle = result.originalStyle;
    parent.postMessage(
      {
        pluginMessage: {
          type: "SNAPSHOT",
          //@ts-ignore
          code: getCodeString(func),
          bytes: result.bytes
        }
      },
      "*"
    );
  } finally {
    setIsExporting(false);
    restoreCanvas(originalStyle);
  }
});

export {
  figma,
  getCodeString,
  postFigmaMessage,
  postFigmaMessageForExport,
  postFigmaMessageForSnapShot
};
