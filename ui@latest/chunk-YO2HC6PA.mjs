import {
  exportGIF
} from "./chunk-R7YRQLUE.mjs";
import {
  exportImage
} from "./chunk-RRRK7IDF.mjs";
import {
  exportVideo
} from "./chunk-X4IK7C4U.mjs";
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
  if (option.destination === "onCanvas") {
    const bytes = yield exportGIF(option, callback, controller);
    parent.postMessage(
      {
        pluginMessage: {
          type: "SNAPSHOT_GIF",
          code: getCodeString(callback),
          bytes
        }
      },
      "*"
    );
  } else if (option.destination === "localFile") {
    if (option.format === "gif") yield exportGIF(option, callback, controller);
    else if (option.format === "webm")
      yield exportVideo(option, callback, controller);
  }
});
var postFigmaMessageForSnapShot = (func) => __async(void 0, null, function* () {
  const bytes = yield exportImage();
  parent.postMessage(
    {
      pluginMessage: {
        type: "SNAPSHOT",
        //@ts-ignore
        code: getCodeString(func),
        bytes
      }
    },
    "*"
  );
});

export {
  figma,
  getCodeString,
  postFigmaMessage,
  postFigmaMessageForExport,
  postFigmaMessageForSnapShot
};
