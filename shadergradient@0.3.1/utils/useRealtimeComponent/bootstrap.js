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

// src/utils/useRealtimeComponent/bootstrap.ts
import SocketIO from "./socket.js";
var SOCKET_SERVER_URL = "http://127.0.0.1:8002";
function initLiveReload() {
  return __async(this, null, function* () {
    if (window.framerRealtimeSocket)
      return;
    try {
      console.log(`[framer-live-esm] Connecting on ${SOCKET_SERVER_URL}`);
      const createdSocket = yield SocketIO.connect(SOCKET_SERVER_URL);
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
