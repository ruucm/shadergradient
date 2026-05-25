// src/hooks/useInView.ts
import { useEffect, useState, useRef } from "react";
function useInView(enabled = true, threshold = 0.1, rootMargin = "0px") {
  const [isInView, setIsInView] = useState(!enabled);
  const containerRef = useRef(null);
  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin
      }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [enabled, threshold, rootMargin]);
  return { isInView, containerRef };
}

export {
  useInView
};
