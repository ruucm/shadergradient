// src/overrides/Web/useFPS.ts
import { useEffect, useRef, useState } from "react";
function useFPS(detailed = false) {
  const [fps, setFps] = useState(0);
  const [avgFps, setAvgFps] = useState(0);
  const [minFps, setMinFps] = useState(Infinity);
  const [maxFps, setMaxFps] = useState(0);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const fpsHistoryRef = useRef([]);
  const rafIdRef = useRef(null);
  useEffect(() => {
    const measureFPS = () => {
      frameCountRef.current++;
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTimeRef.current;
      if (deltaTime >= 1e3) {
        const currentFps = Math.round(
          frameCountRef.current * 1e3 / deltaTime
        );
        setFps(currentFps);
        if (detailed) {
          fpsHistoryRef.current.push(currentFps);
          if (fpsHistoryRef.current.length > 60) {
            fpsHistoryRef.current.shift();
          }
          const avg = fpsHistoryRef.current.reduce((sum, f) => sum + f, 0) / fpsHistoryRef.current.length;
          setAvgFps(Math.round(avg));
          const min = Math.min(...fpsHistoryRef.current);
          const max = Math.max(...fpsHistoryRef.current);
          setMinFps(min);
          setMaxFps(max);
        }
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }
      rafIdRef.current = requestAnimationFrame(measureFPS);
    };
    rafIdRef.current = requestAnimationFrame(measureFPS);
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [detailed]);
  return { fps, avgFps, minFps, maxFps };
}

export {
  useFPS
};
