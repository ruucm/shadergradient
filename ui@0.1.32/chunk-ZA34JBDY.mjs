import {
  __spreadProps,
  __spreadValues
} from "./chunk-HXGKXP63.mjs";

// src/components/Web/ScrollProgress.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { ControlType } from "framer";
import { ui } from "https://framer.com/m/ui-gy7Z.js";
import { jsx, jsxs } from "react/jsx-runtime";
var clamp = (value) => Math.min(1, Math.max(0, value));
function ScrollProgress({
  className,
  label = "Scroll progress",
  style,
  steps = 0
}) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const [ratio, setRatio] = useState(0);
  const setHighlightWord = ui.useScrollStore((state) => state.setHighlightWord);
  const styles = useMemo(
    () => ({
      container: __spreadValues({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        maxWidth: "28rem",
        borderRadius: "1.5rem",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(255, 255, 255, 0.05)",
        padding: "1.5rem",
        color: "#fff",
        backdropFilter: "blur(8px)"
      }, style),
      label: {
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.3em",
        color: "rgba(255, 255, 255, 0.6)"
      },
      headingRow: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between"
      },
      value: {
        fontSize: "3rem",
        fontWeight: 600,
        lineHeight: 1,
        fontVariantNumeric: "tabular-nums"
      },
      valueSuffix: {
        marginLeft: "0.25rem",
        fontSize: "1rem",
        fontWeight: 500,
        color: "rgba(255, 255, 255, 0.6)"
      },
      description: {
        fontSize: "0.875rem",
        color: "rgba(255, 255, 255, 0.6)"
      },
      track: {
        height: "0.5rem",
        width: "100%",
        borderRadius: "9999px",
        background: "rgba(255, 255, 255, 0.15)",
        overflow: "hidden"
      },
      fill: {
        height: "100%",
        borderRadius: "9999px",
        background: "#fff",
        transition: "width 150ms ease-out"
      },
      info: {
        fontSize: "0.75rem",
        color: "rgba(255, 255, 255, 0.5)"
      },
      centerLine: {
        pointerEvents: "none",
        position: "absolute",
        left: "1rem",
        right: "1rem",
        top: "50%",
        transform: "translateY(-50%)",
        borderTop: "1px dashed rgba(255, 255, 255, 0.3)"
      }
    }),
    [style]
  );
  useEffect(() => {
    let frame = null;
    const measure = () => {
      frame = null;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const distanceFromTop = -rect.top;
      const nextRatio = rect.height ? clamp(distanceFromTop / rect.height) : 0;
      const nextProgress = Math.round(nextRatio * 100);
      setRatio(
        (prev) => Math.abs(prev - nextRatio) < 1e-3 ? prev : nextRatio
      );
      setProgress((prev) => prev === nextProgress ? prev : nextProgress);
    };
    const handleScroll = () => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(measure);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  useEffect(() => {
    console.log("ScrollProgress progress (%):", progress);
  }, [progress]);
  const hasSteps = typeof steps === "number" && steps > 0;
  const totalSteps = hasSteps ? Math.max(1, Math.round(steps)) : 0;
  const stepValue = useMemo(() => {
    if (!hasSteps) return null;
    if (totalSteps === 1) return 1;
    const scaled = ratio * (totalSteps - 1);
    return Math.min(totalSteps, Math.max(1, Math.round(scaled) + 1));
  }, [hasSteps, ratio, totalSteps]);
  useEffect(() => {
    if (hasSteps && stepValue !== null) {
      console.log(`ScrollProgress step (${totalSteps}):`, stepValue);
      setHighlightWord(stepValue);
    }
  }, [hasSteps, stepValue, totalSteps, setHighlightWord]);
  const displayValue = hasSteps && stepValue !== null ? stepValue : progress;
  return /* @__PURE__ */ jsxs("div", { ref, className, style: styles.container, children: [
    /* @__PURE__ */ jsx("div", { style: styles.label, children: label }),
    /* @__PURE__ */ jsxs("div", { style: styles.headingRow, children: [
      /* @__PURE__ */ jsxs("div", { style: styles.value, children: [
        displayValue,
        !hasSteps && /* @__PURE__ */ jsx("span", { style: styles.valueSuffix, children: "%" })
      ] }),
      /* @__PURE__ */ jsx("span", { style: styles.description, children: "top anchored" })
    ] }),
    /* @__PURE__ */ jsx("div", { style: styles.track, children: /* @__PURE__ */ jsx("div", { style: __spreadProps(__spreadValues({}, styles.fill), { width: `${progress}%` }) }) }),
    /* @__PURE__ */ jsx("p", { style: styles.info, children: "0% when this block first touches the top of the viewport, 100% when it has fully moved above it." }),
    /* @__PURE__ */ jsx("div", { style: styles.centerLine })
  ] });
}
ScrollProgress.defaultProps = {
  label: "Scroll progress",
  steps: 0
};
ScrollProgress.propertyControls = {
  label: {
    type: ControlType.String,
    title: "Label",
    defaultValue: "Scroll progress"
  },
  steps: {
    type: ControlType.Number,
    title: "Steps",
    defaultValue: 0,
    min: 0,
    max: 100,
    displayStepper: true,
    description: "Set to >0 to map to step counts instead of percentage"
  }
};

export {
  ScrollProgress
};
