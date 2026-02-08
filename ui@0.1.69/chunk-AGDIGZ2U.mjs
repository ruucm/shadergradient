// src/overrides/Web/useMemory.ts
import { useEffect, useState } from "react";
var toMB = (bytes) => typeof bytes === "number" ? Math.round(bytes / 1024 / 1024) : void 0;
function useMemoryStats(pollInterval = 1500) {
  const [stats, setStats] = useState({ supported: false });
  useEffect(() => {
    if (typeof performance === "undefined") return;
    let isMounted = true;
    const perfWithMemory = performance;
    const deviceMemoryGB = typeof navigator !== "undefined" && "deviceMemory" in navigator ? Number(navigator.deviceMemory) : void 0;
    if (!perfWithMemory.memory) {
      setStats({
        supported: false,
        deviceMemoryGB,
        message: "performance.memory not exposed"
      });
      return;
    }
    const update = () => {
      const { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit } = perfWithMemory.memory;
      if (!isMounted) return;
      setStats({
        supported: true,
        usedMB: toMB(usedJSHeapSize),
        totalMB: toMB(totalJSHeapSize),
        limitMB: toMB(jsHeapSizeLimit),
        deviceMemoryGB
      });
    };
    update();
    const intervalId = window.setInterval(update, pollInterval);
    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, [pollInterval]);
  return stats;
}

export {
  useMemoryStats
};
