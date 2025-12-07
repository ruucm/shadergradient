import SocketIO from "./socket"
const SOCKET_SERVER_URL = "http://127.0.0.1:8001"

export async function initLiveReload() {
    // @ts-ignore
    if (window.framerRealtimeSocket) return

    try {
        console.log(`[framer-live-esm] Connecting on ${SOCKET_SERVER_URL}`)
        const createdSocket = await SocketIO.connect(SOCKET_SERVER_URL)
        console.log(`[framer-live-esm] Created socket`)
        // @ts-ignore
        window.framerRealtimeSocket = createdSocket
    } catch (err) {
        console.error(`[framer-live-esm] Error trying to create socket `, err)
    }
}
