import {
  socket_default
} from "./chunk-H2L7C6FD.mjs";
import {
  __async
} from "./chunk-5BEQP2BQ.mjs";

// src/utils/live-reload/bootstrap.ts
var SOCKET_SERVER_URL = "http://127.0.0.1:8001";
function initLiveReload() {
  return __async(this, null, function* () {
    if (window.framerRealtimeSocket) return;
    try {
      console.log(`[framer-live-esm] Connecting on ${SOCKET_SERVER_URL}`);
      const createdSocket = yield socket_default.connect(SOCKET_SERVER_URL);
      console.log(`[framer-live-esm] Created socket`);
      window.framerRealtimeSocket = createdSocket;
    } catch (err) {
      console.error(`[framer-live-esm] Error trying to create socket `, err);
    }
  });
}

export {
  initLiveReload
};
