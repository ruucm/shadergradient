export function mstoMinAndSec(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = parseInt((millis % 60000 / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
export function secondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return minutes + ":" + (s < 10 ? "0" : "") + s;
}

export const __FramerMetadata__ = {"exports":{"mstoMinAndSec":{"type":"function","annotations":{"framerContractVersion":"1"}},"secondsToMinutes":{"type":"function","annotations":{"framerContractVersion":"1"}}}}
//# sourceMappingURL=./time.map