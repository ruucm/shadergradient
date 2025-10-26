// src/components/Shared/TextAnimation.tsx
import { useState as useState2, useEffect as useEffect2 } from "react";
import { motion, useAnimation } from "framer-motion";

// ../../node_modules/.pnpm/react-intersection-observer@9.16.0_react-dom@19.1.1_react@18.3.1__react@18.3.1/node_modules/react-intersection-observer/dist/index.mjs
import * as React from "react";
import * as React2 from "react";
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function getRootId(root) {
  if (!root) return "0";
  if (RootIds.has(root)) return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
function optionsToId(options) {
  return Object.keys(options).sort().filter(
    (key) => options[key] !== void 0
  ).map((key) => {
    return `${key}_${key === "root" ? getRootId(options.root) : options[key]}`;
  }).toString();
}
function createObserver(options) {
  const id = optionsToId(options);
  let instance = observerMap.get(id);
  if (!instance) {
    const elements = /* @__PURE__ */ new Map();
    let thresholds;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        var _a;
        const inView = entry.isIntersecting && thresholds.some((threshold) => entry.intersectionRatio >= threshold);
        if (options.trackVisibility && typeof entry.isVisible === "undefined") {
          entry.isVisible = inView;
        }
        (_a = elements.get(entry.target)) == null ? void 0 : _a.forEach((callback) => {
          callback(inView, entry);
        });
      });
    }, options);
    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
    instance = {
      id,
      observer,
      elements
    };
    observerMap.set(id, instance);
  }
  return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
  if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
    const bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return () => {
    };
  }
  const { id, observer, elements } = createObserver(options);
  const callbacks = elements.get(element) || [];
  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }
  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    callbacks.splice(callbacks.indexOf(callback), 1);
    if (callbacks.length === 0) {
      elements.delete(element);
      observer.unobserve(element);
    }
    if (elements.size === 0) {
      observer.disconnect();
      observerMap.delete(id);
    }
  };
}
function useInView({
  threshold,
  delay,
  trackVisibility,
  rootMargin,
  root,
  triggerOnce,
  skip,
  initialInView,
  fallbackInView,
  onChange
} = {}) {
  var _a;
  const [ref, setRef] = React2.useState(null);
  const callback = React2.useRef(onChange);
  const [state, setState] = React2.useState({
    inView: !!initialInView,
    entry: void 0
  });
  callback.current = onChange;
  React2.useEffect(
    () => {
      if (skip || !ref) return;
      let unobserve;
      unobserve = observe(
        ref,
        (inView, entry) => {
          setState({
            inView,
            entry
          });
          if (callback.current) callback.current(inView, entry);
          if (entry.isIntersecting && triggerOnce && unobserve) {
            unobserve();
            unobserve = void 0;
          }
        },
        {
          root,
          rootMargin,
          threshold,
          // @ts-ignore
          trackVisibility,
          // @ts-ignore
          delay
        },
        fallbackInView
      );
      return () => {
        if (unobserve) {
          unobserve();
        }
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(threshold) ? threshold.toString() : threshold,
      ref,
      root,
      rootMargin,
      triggerOnce,
      skip,
      trackVisibility,
      fallbackInView,
      delay
    ]
  );
  const entryTarget = (_a = state.entry) == null ? void 0 : _a.target;
  const previousEntryTarget = React2.useRef(void 0);
  if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {
    previousEntryTarget.current = entryTarget;
    setState({
      inView: !!initialInView,
      entry: void 0
    });
  }
  const result = [setRef, state.inView, state.entry];
  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}

// src/components/Shared/TextAnimation.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function TextAnimation({
  fontSize,
  color,
  content,
  delay,
  width = null,
  yBefore = 20,
  isFramerCanvas = false,
  fontFamily = '"Lora", serif'
}) {
  const letterContainerVariants = {
    before: { transition: { staggerChildren: 0.015 } },
    after: { transition: { staggerChildren: 0.015 } }
  };
  const letterVariants = {
    before: {
      opacity: 0,
      y: yBefore,
      rotate: -15,
      scale: 0.4,
      transition: {
        type: "spring",
        duration: 0.4,
        damping: 10
      }
    },
    after: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 0.4,
        damping: 10
        // stiffness: 80,
      }
    }
  };
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const [activePresetInView, setActivePresetInView] = useState2(false);
  useEffect2(() => {
    if (inView) {
      controls.start("after");
    } else {
      controls.start("before");
    }
  }, [controls, inView]);
  useEffect2(() => {
    if (typeof window === "undefined") return;
    const timer = setTimeout(() => {
      setActivePresetInView(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return /* @__PURE__ */ jsx(Fragment, { children: activePresetInView && /* @__PURE__ */ jsx(
    motion.div,
    {
      style: {
        position: "relative",
        wordBreak: "break-word",
        width: width === 0 ? "fit-content" : width
      },
      children: /* @__PURE__ */ jsx(
        motion.h1,
        {
          variants: letterContainerVariants,
          ref,
          initial: isFramerCanvas ? "after" : "before",
          animate: controls,
          children: /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                textAlign: "left",
                fontSize,
                color,
                fontWeight: 500,
                fontFamily
              },
              children: content.split(" ").map((word, wordI) => /* @__PURE__ */ jsxs(
                "div",
                {
                  style: {
                    display: "inline-block"
                  },
                  children: [
                    Array.from(word).map((letter, index) => /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        style: {
                          position: "relative",
                          display: "inline-block",
                          width: "auto"
                        },
                        variants: letterVariants,
                        children: letter === " " ? "\xA0" : letter
                      },
                      `${index}-${letter}`
                    )),
                    wordI !== content.split(" ").length - 1 ? "\xA0" : null
                  ]
                },
                `word-${word}-${wordI}`
              ))
            }
          )
        }
      )
    }
  ) });
}

export {
  TextAnimation
};
