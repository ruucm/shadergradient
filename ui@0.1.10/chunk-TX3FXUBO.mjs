import {
  exportGIF
} from "./chunk-WZNB7NSE.mjs";
import {
  exportImage
} from "./chunk-OYRRN4FE.mjs";
import {
  exportVideo
} from "./chunk-2EE2NFKS.mjs";
import {
  __async
} from "./chunk-CU5I7XXF.mjs";

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
