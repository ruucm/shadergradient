// src/UI/TextAnimation/TextAnimation.tsx
import { useState as useState2, useEffect as useEffect2 } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

// ../../node_modules/react-intersection-observer/react-intersection-observer.m.js
import * as React2 from "react";
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function getRootId(root) {
  if (!root)
    return "0";
  if (RootIds.has(root))
    return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
function optionsToId(options) {
  return Object.keys(options).sort().filter(function(key) {
    return options[key] !== void 0;
  }).map(function(key) {
    return key + "_" + (key === "root" ? getRootId(options.root) : options[key]);
  }).toString();
}
function createObserver(options) {
  var id = optionsToId(options);
  var instance = observerMap.get(id);
  if (!instance) {
    var elements = /* @__PURE__ */ new Map();
    var thresholds;
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var _elements$get;
        var inView = entry.isIntersecting && thresholds.some(function(threshold) {
          return entry.intersectionRatio >= threshold;
        });
        if (options.trackVisibility && typeof entry.isVisible === "undefined") {
          entry.isVisible = inView;
        }
        (_elements$get = elements.get(entry.target)) == null ? void 0 : _elements$get.forEach(function(callback) {
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
function observe(element, callback, options, fallbackInView) {
  if (options === void 0) {
    options = {};
  }
  if (fallbackInView === void 0) {
    fallbackInView = unsupportedValue;
  }
  if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
    var bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return function() {
    };
  }
  var _createObserver = createObserver(options), id = _createObserver.id, observer = _createObserver.observer, elements = _createObserver.elements;
  var callbacks = elements.get(element) || [];
  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }
  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    callbacks.splice(callbacks.indexOf(callback), 1);
    if (callbacks.length === 0) {
      elements["delete"](element);
      observer.unobserve(element);
    }
    if (elements.size === 0) {
      observer.disconnect();
      observerMap["delete"](id);
    }
  };
}
function useInView(_temp) {
  var _ref = _temp === void 0 ? {} : _temp, threshold = _ref.threshold, delay = _ref.delay, trackVisibility = _ref.trackVisibility, rootMargin = _ref.rootMargin, root = _ref.root, triggerOnce = _ref.triggerOnce, skip = _ref.skip, initialInView = _ref.initialInView, fallbackInView = _ref.fallbackInView;
  var unobserve = React2.useRef();
  var _React$useState = React2.useState({
    inView: !!initialInView
  }), state = _React$useState[0], setState = _React$useState[1];
  var setRef = React2.useCallback(function(node) {
    if (unobserve.current !== void 0) {
      unobserve.current();
      unobserve.current = void 0;
    }
    if (skip)
      return;
    if (node) {
      unobserve.current = observe(node, function(inView, entry) {
        setState({
          inView,
          entry
        });
        if (entry.isIntersecting && triggerOnce && unobserve.current) {
          unobserve.current();
          unobserve.current = void 0;
        }
      }, {
        root,
        rootMargin,
        threshold,
        trackVisibility,
        delay
      }, fallbackInView);
    }
  }, [
    Array.isArray(threshold) ? threshold.toString() : threshold,
    root,
    rootMargin,
    triggerOnce,
    skip,
    trackVisibility,
    fallbackInView,
    delay
  ]);
  React2.useEffect(function() {
    if (!unobserve.current && state.entry && !triggerOnce && !skip) {
      setState({
        inView: !!initialInView
      });
    }
  });
  var result = [setRef, state.inView, state.entry];
  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}

// src/UI/TextAnimation/TextAnimation.tsx
var letterContainerVariants = {
  before: { transition: { staggerChildren: 0.015 } },
  after: { transition: { staggerChildren: 0.03 } }
};
var letterVariants = {
  before: {
    opacity: 0,
    y: 20,
    rotate: -10,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  },
  after: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  }
};
function TextAnimation({
  fontSize,
  color,
  referer = "",
  content,
  delay,
  width = null,
  font = null
}) {
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
  setTimeout(() => {
    setActivePresetInView(true);
  }, delay);
  return /* @__PURE__ */ React.createElement(AnimatePresence, null, activePresetInView && /* @__PURE__ */ React.createElement(motion.div, {
    style: {
      position: "relative",
      wordBreak: "break-word",
      width
    }
  }, /* @__PURE__ */ React.createElement(motion.h1, {
    variants: letterContainerVariants,
    ref,
    initial: "before",
    animate: controls
  }, /* @__PURE__ */ React.createElement("div", {
    style: { textAlign: "left", fontSize, color }
  }, content.split(" ").map((word, wordI) => /* @__PURE__ */ React.createElement("div", {
    key: `word-${word}-${wordI}`,
    style: {
      display: "inline-block"
    }
  }, Array.from(word).map((letter, index) => /* @__PURE__ */ React.createElement(motion.span, {
    key: `${index}-${letter}`,
    style: {
      position: "relative",
      display: "inline-block",
      width: "auto"
    },
    variants: letterVariants,
    transition: { duration: 0.5 }
  }, letter === " " ? "\xA0" : letter)), wordI !== content.split(" ").length - 1 ? "\xA0" : null))))));
}
export {
  TextAnimation
};
