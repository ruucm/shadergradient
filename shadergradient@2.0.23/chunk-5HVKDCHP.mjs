// src/hooks/useInView.ts
import { useEffect, useState, useRef } from "react";
function useInView(enabled = true, threshold = 0.1) {
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef(null);
  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold
      }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [enabled, threshold]);
  return { isInView, containerRef };
}

export {
  useInView
};
