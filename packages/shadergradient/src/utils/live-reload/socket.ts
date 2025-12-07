import { io, Socket } from "socket.io-client"

export default {
    connect(endpoint: string): Promise<Socket> {
        return new Promise((resolve, reject) => {
            const socket = io(endpoint)
            socket.on("connect", () => {
                console.log(`[framer-live-esm] Socket connected`)
                return resolve(socket)
            })
            socket.on("reconnect", (data: any) => {
                console.error(`[framer-live-esm] Socket reconnected`)
            })
            socket.on("connect_error", (err: any) => {
                console.error(
                    `[framer-live-esm] Socket had a connection error: ${err.message}`,
                    socket
                )
                return reject(err)
            })
            socket.on("connect_timeout", (err: any) => {
                console.error(
                    `[framer-live-esm] Socket connection timed out: ${err.message}`
                )
                return reject(err)
            })
        })
    },
}
