var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));

// ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/setPrototypeOf.js
var require_setPrototypeOf = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/setPrototypeOf.js"(exports, module) {
    function _setPrototypeOf(t2, e2) {
      return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
        return t3.__proto__ = e3, t3;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t2, e2);
    }
    module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/inheritsLoose.js
var require_inheritsLoose = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/inheritsLoose.js"(exports, module) {
    var setPrototypeOf = require_setPrototypeOf();
    function _inheritsLoose(t2, o2) {
      t2.prototype = Object.create(o2.prototype), t2.prototype.constructor = t2, setPrototypeOf(t2, o2);
    }
    module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
    function _extends8() {
      return module.exports = _extends8 = Object.assign ? Object.assign.bind() : function(n2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var t2 = arguments[e2];
          for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
        }
        return n2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends8.apply(null, arguments);
    }
    module.exports = _extends8, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var require_objectWithoutPropertiesLoose = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
    function _objectWithoutPropertiesLoose6(r2, e2) {
      if (null == r2) return {};
      var t2 = {};
      for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
        if (-1 !== e2.indexOf(n2)) continue;
        t2[n2] = r2[n2];
      }
      return t2;
    }
    module.exports = _objectWithoutPropertiesLoose6, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// src/utils.ts
import { useEffect } from "react";
var cx = (...classes) => classes.filter((a2) => !!a2).join(" ");
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// src/Button.tsx
import { jsx } from "react/jsx-runtime";
var ButtonKind = {
  primary: "bg-primary text-white",
  secondary: "ring-1 ring-primary text-primary"
};
var Button = (_a) => {
  var _b = _a, {
    kind = "primary",
    children
  } = _b, rest = __objRest(_b, [
    "kind",
    "children"
  ]);
  return /* @__PURE__ */ jsx(
    "button",
    __spreadProps(__spreadValues({
      className: cx("h-button font-medium rounded w-full", ButtonKind[kind])
    }, rest), {
      children
    })
  );
};

// src/TextAnimation.tsx
import { useState as useState2, useEffect as useEffect3 } from "react";
import { motion, useAnimation } from "framer-motion";

// ../../node_modules/.pnpm/react-intersection-observer@9.16.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-intersection-observer/dist/index.mjs
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

// src/TextAnimation.tsx
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
function TextAnimation({
  fontSize,
  color: color2,
  content,
  delay,
  width = null,
  yBefore = 20,
  isFramerCanvas = false,
  fontFamily = '"Lora", serif'
}) {
  const letterContainerVariants2 = {
    before: { transition: { staggerChildren: 0.015 } },
    after: { transition: { staggerChildren: 0.015 } }
  };
  const letterVariants2 = {
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
  useEffect3(() => {
    if (inView) {
      controls.start("after");
    } else {
      controls.start("before");
    }
  }, [controls, inView]);
  setTimeout(() => {
    setActivePresetInView(true);
  }, delay);
  return /* @__PURE__ */ jsx2(Fragment, { children: activePresetInView && /* @__PURE__ */ jsx2(
    motion.div,
    {
      style: {
        position: "relative",
        wordBreak: "break-word",
        width: width === 0 ? "fit-content" : width
      },
      children: /* @__PURE__ */ jsx2(
        motion.h1,
        {
          variants: letterContainerVariants2,
          ref,
          initial: isFramerCanvas ? "after" : "before",
          animate: controls,
          children: /* @__PURE__ */ jsx2(
            "div",
            {
              style: {
                textAlign: "left",
                fontSize,
                color: color2,
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
                    Array.from(word).map((letter, index) => /* @__PURE__ */ jsx2(
                      motion.span,
                      {
                        style: {
                          position: "relative",
                          display: "inline-block",
                          width: "auto"
                        },
                        variants: letterVariants2,
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

// src/TextHover.tsx
import { motion as motion2 } from "framer-motion";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var letterContainerVariants = {
  initial: { transition: { staggerChildren: 0.015 } },
  default: { transition: { staggerChildren: 0.015 } },
  hover: { transition: { staggerChildren: 0.03 } }
};
var letterVariants = {
  initial: {
    opacity: 0,
    y: 60,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  },
  default: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 200
    }
  },
  hover: {
    opacity: 1,
    y: -4,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  }
};
function TextHover({
  fontSize,
  color: color2,
  content,
  delay = 0,
  width = null,
  font = null,
  border = false,
  fontWeight = 400,
  isFramerCanvas = false
}) {
  return /* @__PURE__ */ jsx3(
    motion2.div,
    {
      style: {
        position: "relative",
        wordBreak: "break-word",
        maxWidth: width === 0 ? "fit-content" : width,
        width: "fit-content",
        height: "fit-content",
        fontFamily: '"' + font + '", san-serif',
        display: "flex",
        flexDirection: "column",
        color: color2,
        whiteSpace: "nowrap",
        userSelect: "none"
      },
      children: /* @__PURE__ */ jsxs2(
        motion2.h1,
        {
          variants: letterContainerVariants,
          initial: isFramerCanvas ? "default" : "initial",
          whileInView: "default",
          whileHover: "hover",
          style: {
            fontWeight,
            margin: 0,
            width: "fit-content",
            userSelect: "none"
          },
          transition: { delay },
          children: [
            /* @__PURE__ */ jsx3(
              "div",
              {
                style: {
                  textAlign: "left",
                  fontSize,
                  color: color2,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  height: "fit-content"
                },
                children: content.split(" ").map((word, wordI) => /* @__PURE__ */ jsxs2(
                  "div",
                  {
                    style: {
                      height: "fit-content",
                      display: "flex",
                      alignItems: "center"
                    },
                    children: [
                      Array.from(word).map((letter, index) => /* @__PURE__ */ jsx3(
                        motion2.div,
                        {
                          style: {
                            width: "fit-content",
                            height: "fit-content",
                            overflow: "hidden",
                            position: "relative",
                            display: "inline-block"
                          },
                          children: /* @__PURE__ */ jsx3(
                            motion2.span,
                            {
                              variants: letterVariants,
                              transition: { duration: 0.5 },
                              style: {
                                position: "relative",
                                display: "inline-block"
                              },
                              children: letter === " " ? "\xA0" : letter
                            }
                          )
                        },
                        `${index}-${letter}`
                      )),
                      wordI !== content.split(" ").length - 1 ? "\xA0" : null
                    ]
                  },
                  `word-${word}-${wordI}`
                ))
              }
            ),
            border && /* @__PURE__ */ jsx3(
              motion2.div,
              {
                style: { background: color2, height: 2, marginTop: 3 },
                initial: { width: 0 },
                animate: { width: "100%" },
                transition: { delay: delay + 0.5 }
              }
            )
          ]
        }
      )
    }
  );
}

// ../../node_modules/.pnpm/react-slider@2.0.6_react@18.3.1/node_modules/react-slider/dist/es/prod/components/ReactSlider/ReactSlider.mjs
var import_inheritsLoose = __toESM(require_inheritsLoose(), 1);
import t from "react";
function s(e2) {
  return e2 && e2.stopPropagation && e2.stopPropagation(), e2 && e2.preventDefault && e2.preventDefault(), false;
}
function n(e2) {
  return null == e2 ? [] : Array.isArray(e2) ? e2.slice() : [e2];
}
function i(e2) {
  return null !== e2 && 1 === e2.length ? e2[0] : e2.slice();
}
function o(e2) {
  Object.keys(e2).forEach((t2) => {
    "undefined" != typeof document && document.addEventListener(t2, e2[t2], false);
  });
}
function r(e2, t2) {
  return a(function(e3, t3) {
    let s2 = e3;
    s2 <= t3.min && (s2 = t3.min);
    s2 >= t3.max && (s2 = t3.max);
    return s2;
  }(e2, t2), t2);
}
function a(e2, t2) {
  const s2 = (e2 - t2.min) % t2.step;
  let n2 = e2 - s2;
  return 2 * Math.abs(s2) >= t2.step && (n2 += s2 > 0 ? t2.step : -t2.step), parseFloat(n2.toFixed(5));
}
var p = function(p2) {
  function u2(e2) {
    var a2;
    (a2 = p2.call(this, e2) || this).onKeyUp = () => {
      a2.onEnd();
    }, a2.onMouseUp = () => {
      a2.onEnd(a2.getMouseEventMap());
    }, a2.onTouchEnd = (e3) => {
      e3.preventDefault(), a2.onEnd(a2.getTouchEventMap());
    }, a2.onBlur = () => {
      a2.setState({ index: -1 }, a2.onEnd(a2.getKeyDownEventMap()));
    }, a2.onMouseMove = (e3) => {
      a2.setState({ pending: true });
      const t2 = a2.getMousePosition(e3), s2 = a2.getDiffPosition(t2[0]), n2 = a2.getValueFromPosition(s2);
      a2.move(n2);
    }, a2.onTouchMove = (e3) => {
      if (e3.touches.length > 1) return;
      a2.setState({ pending: true });
      const t2 = a2.getTouchPosition(e3);
      if (void 0 === a2.isScrolling) {
        const e4 = t2[0] - a2.startPosition[0], s3 = t2[1] - a2.startPosition[1];
        a2.isScrolling = Math.abs(s3) > Math.abs(e4);
      }
      if (a2.isScrolling) return void a2.setState({ index: -1 });
      const s2 = a2.getDiffPosition(t2[0]), n2 = a2.getValueFromPosition(s2);
      a2.move(n2);
    }, a2.onKeyDown = (e3) => {
      if (!(e3.ctrlKey || e3.shiftKey || e3.altKey || e3.metaKey)) switch (a2.setState({ pending: true }), e3.key) {
        case "ArrowLeft":
        case "ArrowDown":
        case "Left":
        case "Down":
          e3.preventDefault(), a2.moveDownByStep();
          break;
        case "ArrowRight":
        case "ArrowUp":
        case "Right":
        case "Up":
          e3.preventDefault(), a2.moveUpByStep();
          break;
        case "Home":
          e3.preventDefault(), a2.move(a2.props.min);
          break;
        case "End":
          e3.preventDefault(), a2.move(a2.props.max);
          break;
        case "PageDown":
          e3.preventDefault(), a2.moveDownByStep(a2.props.pageFn(a2.props.step));
          break;
        case "PageUp":
          e3.preventDefault(), a2.moveUpByStep(a2.props.pageFn(a2.props.step));
      }
    }, a2.onSliderMouseDown = (e3) => {
      if (!a2.props.disabled && 2 !== e3.button) {
        if (a2.setState({ pending: true }), !a2.props.snapDragDisabled) {
          const t2 = a2.getMousePosition(e3);
          a2.forceValueFromPosition(t2[0], (e4) => {
            a2.start(e4, t2[0]), o(a2.getMouseEventMap());
          });
        }
        s(e3);
      }
    }, a2.onSliderClick = (e3) => {
      if (!a2.props.disabled && a2.props.onSliderClick && !a2.hasMoved) {
        const t2 = a2.getMousePosition(e3), s2 = r(a2.calcValue(a2.calcOffsetFromPosition(t2[0])), a2.props);
        a2.props.onSliderClick(s2);
      }
    }, a2.createOnKeyDown = (e3) => (t2) => {
      a2.props.disabled || (a2.start(e3), o(a2.getKeyDownEventMap()), s(t2));
    }, a2.createOnMouseDown = (e3) => (t2) => {
      if (a2.props.disabled || 2 === t2.button) return;
      a2.setState({ pending: true });
      const n2 = a2.getMousePosition(t2);
      a2.start(e3, n2[0]), o(a2.getMouseEventMap()), s(t2);
    }, a2.createOnTouchStart = (e3) => (t2) => {
      if (a2.props.disabled || t2.touches.length > 1) return;
      a2.setState({ pending: true });
      const s2 = a2.getTouchPosition(t2);
      a2.startPosition = s2, a2.isScrolling = void 0, a2.start(e3, s2[0]), o(a2.getTouchEventMap()), function(e4) {
        e4.stopPropagation && e4.stopPropagation();
      }(t2);
    }, a2.handleResize = () => {
      const e3 = window.setTimeout(() => {
        a2.pendingResizeTimeouts.shift(), a2.resize();
      }, 0);
      a2.pendingResizeTimeouts.push(e3);
    }, a2.renderThumb = (e3, t2) => {
      const s2 = a2.props.thumbClassName + " " + a2.props.thumbClassName + "-" + t2 + " " + (a2.state.index === t2 ? a2.props.thumbActiveClassName : ""), n2 = { ref: (e4) => {
        a2["thumb" + t2] = e4;
      }, key: a2.props.thumbClassName + "-" + t2, className: s2, style: e3, onMouseDown: a2.createOnMouseDown(t2), onTouchStart: a2.createOnTouchStart(t2), onFocus: a2.createOnKeyDown(t2), tabIndex: 0, role: "slider", "aria-orientation": a2.props.orientation, "aria-valuenow": a2.state.value[t2], "aria-valuemin": a2.props.min, "aria-valuemax": a2.props.max, "aria-label": Array.isArray(a2.props.ariaLabel) ? a2.props.ariaLabel[t2] : a2.props.ariaLabel, "aria-labelledby": Array.isArray(a2.props.ariaLabelledby) ? a2.props.ariaLabelledby[t2] : a2.props.ariaLabelledby, "aria-disabled": a2.props.disabled }, o2 = { index: t2, value: i(a2.state.value), valueNow: a2.state.value[t2] };
      return a2.props.ariaValuetext && (n2["aria-valuetext"] = "string" == typeof a2.props.ariaValuetext ? a2.props.ariaValuetext : a2.props.ariaValuetext(o2)), a2.props.renderThumb(n2, o2);
    }, a2.renderTrack = (e3, t2, s2) => {
      const n2 = { key: a2.props.trackClassName + "-" + e3, className: a2.props.trackClassName + " " + a2.props.trackClassName + "-" + e3, style: a2.buildTrackStyle(t2, a2.state.upperBound - s2) }, o2 = { index: e3, value: i(a2.state.value) };
      return a2.props.renderTrack(n2, o2);
    };
    let u3 = n(e2.value);
    u3.length || (u3 = n(e2.defaultValue)), a2.pendingResizeTimeouts = [];
    const h2 = [];
    for (let t2 = 0; t2 < u3.length; t2 += 1) u3[t2] = r(u3[t2], e2), h2.push(t2);
    return a2.resizeObserver = null, a2.resizeElementRef = t.createRef(), a2.state = { index: -1, upperBound: 0, sliderLength: 0, value: u3, zIndices: h2 }, a2;
  }
  (0, import_inheritsLoose.default)(u2, p2);
  var h = u2.prototype;
  return h.componentDidMount = function() {
    "undefined" != typeof window && (this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(this.resizeElementRef.current), this.resize());
  }, u2.getDerivedStateFromProps = function(e2, t2) {
    const s2 = n(e2.value);
    return s2.length ? t2.pending ? null : { value: s2.map((t3) => r(t3, e2)) } : null;
  }, h.componentDidUpdate = function() {
    0 === this.state.upperBound && this.resize();
  }, h.componentWillUnmount = function() {
    this.clearPendingResizeTimeouts(), this.resizeObserver && this.resizeObserver.disconnect();
  }, h.onEnd = function(e2) {
    e2 && function(e3) {
      Object.keys(e3).forEach((t2) => {
        "undefined" != typeof document && document.removeEventListener(t2, e3[t2], false);
      });
    }(e2), this.hasMoved && this.fireChangeEvent("onAfterChange"), this.setState({ pending: false }), this.hasMoved = false;
  }, h.getValue = function() {
    return i(this.state.value);
  }, h.getClosestIndex = function(e2) {
    let t2 = Number.MAX_VALUE, s2 = -1;
    const { value: n2 } = this.state, i2 = n2.length;
    for (let o2 = 0; o2 < i2; o2 += 1) {
      const i3 = this.calcOffset(n2[o2]), r2 = Math.abs(e2 - i3);
      r2 < t2 && (t2 = r2, s2 = o2);
    }
    return s2;
  }, h.getMousePosition = function(e2) {
    return [e2["page" + this.axisKey()], e2["page" + this.orthogonalAxisKey()]];
  }, h.getTouchPosition = function(e2) {
    const t2 = e2.touches[0];
    return [t2["page" + this.axisKey()], t2["page" + this.orthogonalAxisKey()]];
  }, h.getKeyDownEventMap = function() {
    return { keydown: this.onKeyDown, keyup: this.onKeyUp, focusout: this.onBlur };
  }, h.getMouseEventMap = function() {
    return { mousemove: this.onMouseMove, mouseup: this.onMouseUp };
  }, h.getTouchEventMap = function() {
    return { touchmove: this.onTouchMove, touchend: this.onTouchEnd };
  }, h.getValueFromPosition = function(e2) {
    const t2 = e2 / (this.state.sliderLength - this.state.thumbSize) * (this.props.max - this.props.min);
    return r(this.state.startValue + t2, this.props);
  }, h.getDiffPosition = function(e2) {
    let t2 = e2 - this.state.startPosition;
    return this.props.invert && (t2 *= -1), t2;
  }, h.resize = function() {
    const { slider: e2, thumb0: t2 } = this;
    if (!e2 || !t2) return;
    const s2 = this.sizeKey(), n2 = e2.getBoundingClientRect(), i2 = e2[s2], o2 = n2[this.posMaxKey()], r2 = n2[this.posMinKey()], a2 = t2.getBoundingClientRect()[s2.replace("client", "").toLowerCase()], p3 = i2 - a2, u3 = Math.abs(o2 - r2);
    this.state.upperBound === p3 && this.state.sliderLength === u3 && this.state.thumbSize === a2 || this.setState({ upperBound: p3, sliderLength: u3, thumbSize: a2 });
  }, h.calcOffset = function(e2) {
    const t2 = this.props.max - this.props.min;
    if (0 === t2) return 0;
    return (e2 - this.props.min) / t2 * this.state.upperBound;
  }, h.calcValue = function(e2) {
    return e2 / this.state.upperBound * (this.props.max - this.props.min) + this.props.min;
  }, h.calcOffsetFromPosition = function(e2) {
    const { slider: t2 } = this, s2 = t2.getBoundingClientRect(), n2 = s2[this.posMaxKey()], i2 = s2[this.posMinKey()];
    let o2 = e2 - (window["page" + this.axisKey() + "Offset"] + (this.props.invert ? n2 : i2));
    return this.props.invert && (o2 = this.state.sliderLength - o2), o2 -= this.state.thumbSize / 2, o2;
  }, h.forceValueFromPosition = function(e2, t2) {
    const s2 = this.calcOffsetFromPosition(e2), n2 = this.getClosestIndex(s2), i2 = r(this.calcValue(s2), this.props), o2 = this.state.value.slice();
    o2[n2] = i2;
    for (let e3 = 0; e3 < o2.length - 1; e3 += 1) if (o2[e3 + 1] - o2[e3] < this.props.minDistance) return;
    this.fireChangeEvent("onBeforeChange"), this.hasMoved = true, this.setState({ value: o2 }, () => {
      t2(n2), this.fireChangeEvent("onChange");
    });
  }, h.clearPendingResizeTimeouts = function() {
    do {
      const e2 = this.pendingResizeTimeouts.shift();
      clearTimeout(e2);
    } while (this.pendingResizeTimeouts.length);
  }, h.start = function(e2, t2) {
    const s2 = this["thumb" + e2];
    s2 && s2.focus();
    const { zIndices: n2 } = this.state;
    n2.splice(n2.indexOf(e2), 1), n2.push(e2), this.setState((s3) => ({ startValue: s3.value[e2], startPosition: void 0 !== t2 ? t2 : s3.startPosition, index: e2, zIndices: n2 }));
  }, h.moveUpByStep = function(e2) {
    void 0 === e2 && (e2 = this.props.step);
    const t2 = this.state.value[this.state.index], s2 = r(this.props.invert && "horizontal" === this.props.orientation ? t2 - e2 : t2 + e2, this.props);
    this.move(Math.min(s2, this.props.max));
  }, h.moveDownByStep = function(e2) {
    void 0 === e2 && (e2 = this.props.step);
    const t2 = this.state.value[this.state.index], s2 = r(this.props.invert && "horizontal" === this.props.orientation ? t2 + e2 : t2 - e2, this.props);
    this.move(Math.max(s2, this.props.min));
  }, h.move = function(e2) {
    const t2 = this.state.value.slice(), { index: s2 } = this.state, { length: n2 } = t2, i2 = t2[s2];
    if (e2 === i2) return;
    this.hasMoved || this.fireChangeEvent("onBeforeChange"), this.hasMoved = true;
    const { pearling: o2, max: r2, min: a2, minDistance: p3 } = this.props;
    if (!o2) {
      if (s2 > 0) {
        const n3 = t2[s2 - 1];
        e2 < n3 + p3 && (e2 = n3 + p3);
      }
      if (s2 < n2 - 1) {
        const n3 = t2[s2 + 1];
        e2 > n3 - p3 && (e2 = n3 - p3);
      }
    }
    t2[s2] = e2, o2 && n2 > 1 && (e2 > i2 ? (this.pushSucceeding(t2, p3, s2), function(e3, t3, s3, n3) {
      for (let i3 = 0; i3 < e3; i3 += 1) {
        const o3 = n3 - i3 * s3;
        t3[e3 - 1 - i3] > o3 && (t3[e3 - 1 - i3] = o3);
      }
    }(n2, t2, p3, r2)) : e2 < i2 && (this.pushPreceding(t2, p3, s2), function(e3, t3, s3, n3) {
      for (let i3 = 0; i3 < e3; i3 += 1) {
        const e4 = n3 + i3 * s3;
        t3[i3] < e4 && (t3[i3] = e4);
      }
    }(n2, t2, p3, a2))), this.setState({ value: t2 }, this.fireChangeEvent.bind(this, "onChange"));
  }, h.pushSucceeding = function(e2, t2, s2) {
    let n2, i2;
    for (n2 = s2, i2 = e2[n2] + t2; null !== e2[n2 + 1] && i2 > e2[n2 + 1]; n2 += 1, i2 = e2[n2] + t2) e2[n2 + 1] = a(i2, this.props);
  }, h.pushPreceding = function(e2, t2, s2) {
    for (let n2 = s2, i2 = e2[n2] - t2; null !== e2[n2 - 1] && i2 < e2[n2 - 1]; n2 -= 1, i2 = e2[n2] - t2) e2[n2 - 1] = a(i2, this.props);
  }, h.axisKey = function() {
    return "vertical" === this.props.orientation ? "Y" : "X";
  }, h.orthogonalAxisKey = function() {
    return "vertical" === this.props.orientation ? "X" : "Y";
  }, h.posMinKey = function() {
    return "vertical" === this.props.orientation ? this.props.invert ? "bottom" : "top" : this.props.invert ? "right" : "left";
  }, h.posMaxKey = function() {
    return "vertical" === this.props.orientation ? this.props.invert ? "top" : "bottom" : this.props.invert ? "left" : "right";
  }, h.sizeKey = function() {
    return "vertical" === this.props.orientation ? "clientHeight" : "clientWidth";
  }, h.fireChangeEvent = function(e2) {
    this.props[e2] && this.props[e2](i(this.state.value), this.state.index);
  }, h.buildThumbStyle = function(e2, t2) {
    const s2 = { position: "absolute", touchAction: "none", willChange: this.state.index >= 0 ? this.posMinKey() : void 0, zIndex: this.state.zIndices.indexOf(t2) + 1 };
    return s2[this.posMinKey()] = e2 + "px", s2;
  }, h.buildTrackStyle = function(e2, t2) {
    const s2 = { position: "absolute", willChange: this.state.index >= 0 ? this.posMinKey() + "," + this.posMaxKey() : void 0 };
    return s2[this.posMinKey()] = e2, s2[this.posMaxKey()] = t2, s2;
  }, h.buildMarkStyle = function(e2) {
    var t2;
    return (t2 = { position: "absolute" })[this.posMinKey()] = e2, t2;
  }, h.renderThumbs = function(e2) {
    const { length: t2 } = e2, s2 = [];
    for (let n3 = 0; n3 < t2; n3 += 1) s2[n3] = this.buildThumbStyle(e2[n3], n3);
    const n2 = [];
    for (let e3 = 0; e3 < t2; e3 += 1) n2[e3] = this.renderThumb(s2[e3], e3);
    return n2;
  }, h.renderTracks = function(e2) {
    const t2 = [], s2 = e2.length - 1;
    t2.push(this.renderTrack(0, 0, e2[0]));
    for (let n2 = 0; n2 < s2; n2 += 1) t2.push(this.renderTrack(n2 + 1, e2[n2], e2[n2 + 1]));
    return t2.push(this.renderTrack(s2 + 1, e2[s2], this.state.upperBound)), t2;
  }, h.renderMarks = function() {
    let { marks: e2 } = this.props;
    const t2 = this.props.max - this.props.min + 1;
    return "boolean" == typeof e2 ? e2 = Array.from({ length: t2 }).map((e3, t3) => t3) : "number" == typeof e2 && (e2 = Array.from({ length: t2 }).map((e3, t3) => t3).filter((t3) => t3 % e2 == 0)), e2.map(parseFloat).sort((e3, t3) => e3 - t3).map((e3) => {
      const t3 = this.calcOffset(e3), s2 = { key: e3, className: this.props.markClassName, style: this.buildMarkStyle(t3) };
      return this.props.renderMark(s2);
    });
  }, h.render = function() {
    const e2 = [], { value: s2 } = this.state, n2 = s2.length;
    for (let t2 = 0; t2 < n2; t2 += 1) e2[t2] = this.calcOffset(s2[t2], t2);
    const i2 = this.props.withTracks ? this.renderTracks(e2) : null, o2 = this.renderThumbs(e2), r2 = this.props.marks ? this.renderMarks() : null;
    return t.createElement("div", { ref: (e3) => {
      this.slider = e3, this.resizeElementRef.current = e3;
    }, style: { position: "relative" }, className: this.props.className + (this.props.disabled ? " disabled" : ""), onMouseDown: this.onSliderMouseDown, onClick: this.onSliderClick }, i2, o2, r2);
  }, u2;
}(t.Component);
p.displayName = "ReactSlider", p.defaultProps = { min: 0, max: 100, step: 1, pageFn: (e2) => 10 * e2, minDistance: 0, defaultValue: 0, orientation: "horizontal", className: "slider", thumbClassName: "thumb", thumbActiveClassName: "active", trackClassName: "track", markClassName: "mark", withTracks: true, pearling: false, disabled: false, snapDragDisabled: false, invert: false, marks: [], renderThumb: (e2) => t.createElement("div", e2), renderTrack: (e2) => t.createElement("div", e2), renderMark: (e2) => t.createElement("span", e2) };
var u = p;

// src/PluginUI/Slider.tsx
import { useState as useState4, useEffect as useEffect4 } from "react";

// src/PluginUI/InputTitle.tsx
import { useState as useState3 } from "react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function InputTitle({
  title,
  info,
  infoContent,
  condition = false
}) {
  const [isMouseOver, setIsMouseOver] = useState3(false);
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      className: "w-[105px] flex items-center flex-shrink-0 gap-0.5",
      style: { fontFamily: "Inter Medium" },
      children: [
        /* @__PURE__ */ jsxs3("p", { className: "font-medium whitespace-nowrap user-select-none", children: [
          condition === true && /* @__PURE__ */ jsx4("span", { className: "opacity-30", children: "\u21B3 " }),
          title
        ] }),
        info === true && /* @__PURE__ */ jsx4(
          "div",
          {
            className: "flex items-center justify-center relative w-fit h-fit p-0.5 cursor-pointer",
            onMouseOver: () => setIsMouseOver(true),
            onMouseLeave: () => setIsMouseOver(false),
            children: /* @__PURE__ */ jsx4(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "#000000",
                viewBox: "0 0 256 256",
                className: "opacity-30",
                children: /* @__PURE__ */ jsx4("path", { d: "M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm92-52A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM128,64c-24.26,0-44,17.94-44,40v4a12,12,0,0,0,24,0v-4c0-8.82,9-16,20-16s20,7.18,20,16-9,16-20,16a12,12,0,0,0-12,12v8a12,12,0,0,0,23.73,2.56C158.31,137.88,172,122.37,172,104,172,81.94,152.26,64,128,64Z" })
              }
            )
          }
        ),
        info === true && /* @__PURE__ */ jsxs3(
          "div",
          {
            className: "w-fit h-fit absolute z-20 min-w-[140px] pointer-events-none duration-300 " + (isMouseOver === true ? "opacity-100 bottom-7" : "opacity-0 bottom-6"),
            children: [
              /* @__PURE__ */ jsx4("div", { className: "absolute w-full h-full bg-[#ff340a] z-0 rounded-md opacity-80", children: /* @__PURE__ */ jsx4("div", { className: "bg-[#ff340a] absolute w-3 h-3 rotate-45 rounded-sm bottom-[-4px] left-[12px]" }) }),
              /* @__PURE__ */ jsx4("p", { className: "relative z-20 p-2 text-white", children: infoContent })
            ]
          }
        )
      ]
    }
  );
}

// src/PluginUI/Slider.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function Slider({
  title,
  defaultValue,
  setValue,
  step,
  min,
  max,
  info,
  infoContent,
  condition
}) {
  const [sharedValue, setSharedValue] = useState4(defaultValue);
  const [isMouseOver, setIsMouseOver] = useState4(false);
  useEffect4(() => {
    setSharedValue(defaultValue);
  }, []);
  useEffect4(() => {
    setValue(sharedValue);
  }, [sharedValue]);
  useEffect4(() => {
    setSharedValue(defaultValue);
  }, [defaultValue]);
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      className: "flex items-center w-full h-[26px] flex-row gap-2",
      style: { fontFamily: "Inter Medium" },
      children: [
        /* @__PURE__ */ jsx5(
          InputTitle,
          {
            title,
            info,
            infoContent,
            condition
          }
        ),
        /* @__PURE__ */ jsxs4(
          "div",
          {
            className: "flex items-center w-full h-fit flex-row gap-2",
            onMouseOver: () => setIsMouseOver(true),
            onMouseLeave: () => setIsMouseOver(false),
            children: [
              /* @__PURE__ */ jsx5(
                u,
                {
                  value: Number(sharedValue),
                  step,
                  min,
                  max,
                  onChange: (value, index) => setSharedValue(value),
                  className: "w-full rounded-md bg-[#F2F2F2] cursor-ew-resize overflow-hidden transition-height duration-300 " + (isMouseOver === true ? "h-[26px]" : "h-[5px]"),
                  trackClassName: "h-full duration-300 " + (isMouseOver === true ? "bg-[#ff340a]" : "bg-[#ABABAB]"),
                  renderTrack: (props, state) => /* @__PURE__ */ jsx5(
                    "div",
                    __spreadProps(__spreadValues({}, props), {
                      className: "h-full flex relative " + (isMouseOver === true ? "bg-[#ff340a]" : "bg-[#ABABAB]"),
                      style: __spreadProps(__spreadValues({}, props.style), {
                        opacity: state.index === 1 ? 0 : 1
                      })
                    })
                  ),
                  renderThumb: (props, state) => /* @__PURE__ */ jsx5(
                    "div",
                    __spreadProps(__spreadValues({}, props), {
                      className: "w-[8px] h-full justify-center items-center flex",
                      children: /* @__PURE__ */ jsx5(
                        "div",
                        {
                          className: "absolute w-[2px] bg-[#ffffff] rounded-full pointer-events-none duration-200 h-[30%] " + (isMouseOver === true ? "opacity-100" : "opacity-0")
                        }
                      )
                    })
                  )
                }
              ),
              /* @__PURE__ */ jsx5(
                "input",
                {
                  type: "number",
                  value: sharedValue,
                  onChange: (e2) => setSharedValue(e2.target.value),
                  className: "font-medium w-[42px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center [&::-webkit-inner-spin-button]:appearance-none " + (isMouseOver === true ? "text-[#ff340a]" : "text-[#000000]"),
                  min,
                  max,
                  step
                }
              )
            ]
          }
        )
      ]
    }
  );
}

// src/PluginUI/ColorInput.tsx
import * as React9 from "react";

// ../../node_modules/.pnpm/@uiw+color-convert@1.4.3_@babel+runtime@7.27.0/node_modules/@uiw/color-convert/esm/index.js
var import_extends = __toESM(require_extends());

// ../../node_modules/.pnpm/@uiw+color-convert@1.4.3_@babel+runtime@7.27.0/node_modules/@uiw/color-convert/esm/utils.js
var validHex = (hex) => /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);

// ../../node_modules/.pnpm/@uiw+color-convert@1.4.3_@babel+runtime@7.27.0/node_modules/@uiw/color-convert/esm/index.js
var RGB_MAX = 255;
var HUE_MAX = 360;
var SV_MAX = 100;
var rgbaToHsva = (_ref) => {
  var {
    r: r2,
    g,
    b,
    a: a2
  } = _ref;
  var max = Math.max(r2, g, b);
  var delta = max - Math.min(r2, g, b);
  var hh = delta ? max === r2 ? (g - b) / delta : max === g ? 2 + (b - r2) / delta : 4 + (r2 - g) / delta : 0;
  return {
    h: 60 * (hh < 0 ? hh + 6 : hh),
    s: max ? delta / max * SV_MAX : 0,
    v: max / RGB_MAX * SV_MAX,
    a: a2
  };
};
var hsvaToHslaString = (hsva) => {
  var {
    h,
    s: s2,
    l,
    a: a2
  } = hsvaToHsla(hsva);
  return "hsla(" + h + ", " + s2 + "%, " + l + "%, " + a2 + ")";
};
var hsvaToHsla = (_ref5) => {
  var {
    h,
    s: s2,
    v,
    a: a2
  } = _ref5;
  var hh = (200 - s2) * v / SV_MAX;
  return {
    h,
    s: hh > 0 && hh < 200 ? s2 * v / SV_MAX / (hh <= SV_MAX ? hh : 200 - hh) * SV_MAX : 0,
    l: hh / 2,
    a: a2
  };
};
var angleUnits = {
  grad: HUE_MAX / 400,
  turn: HUE_MAX,
  rad: HUE_MAX / (Math.PI * 2)
};
var rgbaToHex = (_ref6) => {
  var {
    r: r2,
    g,
    b
  } = _ref6;
  var bin = r2 << 16 | g << 8 | b;
  return "#" + ((h) => new Array(7 - h.length).join("0") + h)(bin.toString(16));
};
var rgbaToHexa = (_ref7) => {
  var {
    r: r2,
    g,
    b,
    a: a2
  } = _ref7;
  var alpha = typeof a2 === "number" && (a2 * 255 | 1 << 8).toString(16).slice(1);
  return "" + rgbaToHex({
    r: r2,
    g,
    b,
    a: a2
  }) + (alpha ? alpha : "");
};
var hexToHsva = (hex) => rgbaToHsva(hexToRgba(hex));
var hexToRgba = (hex) => {
  var htemp = hex.replace("#", "");
  if (/^#?/.test(hex) && htemp.length === 3) {
    hex = "#" + htemp.charAt(0) + htemp.charAt(0) + htemp.charAt(1) + htemp.charAt(1) + htemp.charAt(2) + htemp.charAt(2);
  }
  var reg = new RegExp("[A-Za-z0-9]{2}", "g");
  var [r2, g, b = 0, a2] = hex.match(reg).map((v) => parseInt(v, 16));
  return {
    r: r2,
    g,
    b,
    a: (a2 != null ? a2 : 255) / RGB_MAX
  };
};
var hsvaToRgba = (_ref8) => {
  var {
    h,
    s: s2,
    v,
    a: a2
  } = _ref8;
  var _h = h / 60, _s = s2 / SV_MAX, _v = v / SV_MAX, hi = Math.floor(_h) % 6;
  var f = _h - Math.floor(_h), _p = RGB_MAX * _v * (1 - _s), _q = RGB_MAX * _v * (1 - _s * f), _t = RGB_MAX * _v * (1 - _s * (1 - f));
  _v *= RGB_MAX;
  var rgba = {};
  switch (hi) {
    case 0:
      rgba.r = _v;
      rgba.g = _t;
      rgba.b = _p;
      break;
    case 1:
      rgba.r = _q;
      rgba.g = _v;
      rgba.b = _p;
      break;
    case 2:
      rgba.r = _p;
      rgba.g = _v;
      rgba.b = _t;
      break;
    case 3:
      rgba.r = _p;
      rgba.g = _q;
      rgba.b = _v;
      break;
    case 4:
      rgba.r = _t;
      rgba.g = _p;
      rgba.b = _v;
      break;
    case 5:
      rgba.r = _v;
      rgba.g = _p;
      rgba.b = _q;
      break;
  }
  rgba.r = Math.round(rgba.r);
  rgba.g = Math.round(rgba.g);
  rgba.b = Math.round(rgba.b);
  return (0, import_extends.default)({}, rgba, {
    a: a2
  });
};
var rgbaToRgb = (_ref9) => {
  var {
    r: r2,
    g,
    b
  } = _ref9;
  return {
    r: r2,
    g,
    b
  };
};
var hslaToHsl = (_ref10) => {
  var {
    h,
    s: s2,
    l
  } = _ref10;
  return {
    h,
    s: s2,
    l
  };
};
var hsvaToHex = (hsva) => rgbaToHex(hsvaToRgba(hsva));
var hsvaToHsv = (_ref11) => {
  var {
    h,
    s: s2,
    v
  } = _ref11;
  return {
    h,
    s: s2,
    v
  };
};
var color = (str) => {
  var rgb;
  var hsl;
  var hsv;
  var rgba;
  var hsla;
  var hsva;
  var hex;
  var hexa;
  if (typeof str === "string" && validHex(str)) {
    hsva = hexToHsva(str);
    hex = str;
  } else if (typeof str !== "string") {
    hsva = str;
  }
  if (hsva) {
    hsv = hsvaToHsv(hsva);
    hsla = hsvaToHsla(hsva);
    rgba = hsvaToRgba(hsva);
    hexa = rgbaToHexa(rgba);
    hex = hsvaToHex(hsva);
    hsl = hslaToHsl(hsla);
    rgb = rgbaToRgb(rgba);
  }
  return {
    rgb,
    hsl,
    hsv,
    rgba,
    hsla,
    hsva,
    hex,
    hexa
  };
};

// ../../node_modules/.pnpm/@uiw+react-color-shade-slider@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-shade-slider/esm/index.js
var import_extends5 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose4 = __toESM(require_objectWithoutPropertiesLoose());
import React6 from "react";

// ../../node_modules/.pnpm/@uiw+react-color-alpha@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-alpha/esm/index.js
var import_extends4 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose3 = __toESM(require_objectWithoutPropertiesLoose());
import React5 from "react";

// ../../node_modules/.pnpm/@uiw+react-drag-event-interactive@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-drag-event-interactive/esm/index.js
var import_extends2 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose = __toESM(require_objectWithoutPropertiesLoose());
import React3, { useRef as useRef3, useState as useState5, useCallback as useCallback2, useEffect as useEffect6 } from "react";

// ../../node_modules/.pnpm/@uiw+react-drag-event-interactive@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-drag-event-interactive/esm/utils.js
import { useRef as useRef2, useEffect as useEffect5, useCallback } from "react";
function useEventCallback(handler) {
  var callbackRef = useRef2(handler);
  useEffect5(() => {
    callbackRef.current = handler;
  });
  return useCallback((value, event) => callbackRef.current && callbackRef.current(value, event), []);
}
var isTouch = (event) => "touches" in event;
var preventDefaultMove = (event) => {
  !isTouch(event) && event.preventDefault && event.preventDefault();
};
var clamp = function clamp2(number, min, max) {
  if (min === void 0) {
    min = 0;
  }
  if (max === void 0) {
    max = 1;
  }
  return number > max ? max : number < min ? min : number;
};
var getRelativePosition = (node, event) => {
  var rect = node.getBoundingClientRect();
  var pointer = isTouch(event) ? event.touches[0] : event;
  return {
    left: clamp((pointer.pageX - (rect.left + window.pageXOffset)) / rect.width),
    top: clamp((pointer.pageY - (rect.top + window.pageYOffset)) / rect.height),
    width: rect.width,
    height: rect.height,
    x: pointer.pageX - (rect.left + window.pageXOffset),
    y: pointer.pageY - (rect.top + window.pageYOffset)
  };
};

// ../../node_modules/.pnpm/@uiw+react-drag-event-interactive@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-drag-event-interactive/esm/index.js
import { jsx as _jsx } from "react/jsx-runtime";
var _excluded = ["prefixCls", "className", "onMove", "onDown"];
var Interactive = /* @__PURE__ */ React3.forwardRef((props, ref) => {
  var {
    prefixCls = "w-color-interactive",
    className,
    onMove,
    onDown
  } = props, reset = (0, import_objectWithoutPropertiesLoose.default)(props, _excluded);
  var container = useRef3(null);
  var hasTouched = useRef3(false);
  var [isDragging, setDragging] = useState5(false);
  var onMoveCallback = useEventCallback(onMove);
  var onKeyCallback = useEventCallback(onDown);
  var isValid = (event) => {
    if (hasTouched.current && !isTouch(event)) return false;
    hasTouched.current = isTouch(event);
    return true;
  };
  var handleMove = useCallback2((event) => {
    preventDefaultMove(event);
    var isDown = isTouch(event) ? event.touches.length > 0 : event.buttons > 0;
    if (isDown && container.current) {
      onMoveCallback && onMoveCallback(getRelativePosition(container.current, event), event);
    } else {
      setDragging(false);
    }
  }, [onMoveCallback]);
  var handleMoveEnd = useCallback2(() => setDragging(false), []);
  var toggleDocumentEvents = useCallback2((state) => {
    var toggleEvent = state ? window.addEventListener : window.removeEventListener;
    toggleEvent(hasTouched.current ? "touchmove" : "mousemove", handleMove);
    toggleEvent(hasTouched.current ? "touchend" : "mouseup", handleMoveEnd);
  }, []);
  useEffect6(() => {
    toggleDocumentEvents(isDragging);
    return () => {
      isDragging && toggleDocumentEvents(false);
    };
  }, [isDragging, toggleDocumentEvents]);
  var handleMoveStart = useCallback2((event) => {
    preventDefaultMove(event.nativeEvent);
    if (!isValid(event.nativeEvent)) return;
    onKeyCallback && onKeyCallback(getRelativePosition(container.current, event.nativeEvent), event.nativeEvent);
    setDragging(true);
  }, [onKeyCallback]);
  return /* @__PURE__ */ _jsx("div", (0, import_extends2.default)({}, reset, {
    className: [prefixCls, className || ""].filter(Boolean).join(" "),
    style: (0, import_extends2.default)({}, reset.style, {
      touchAction: "none"
    }),
    ref: container,
    tabIndex: 0,
    onMouseDown: handleMoveStart,
    onTouchStart: handleMoveStart
  }));
});
Interactive.displayName = "Interactive";
var esm_default = Interactive;

// ../../node_modules/.pnpm/@uiw+react-color-alpha@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-alpha/esm/Pointer.js
var import_extends3 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose2 = __toESM(require_objectWithoutPropertiesLoose());
import React4 from "react";
import { jsx as _jsx2 } from "react/jsx-runtime";
var _excluded2 = ["className", "prefixCls", "left", "top", "style", "fillProps"];
var Pointer = (_ref) => {
  var {
    className,
    prefixCls,
    left,
    top,
    style,
    fillProps
  } = _ref, reset = (0, import_objectWithoutPropertiesLoose2.default)(_ref, _excluded2);
  var styleWrapper = (0, import_extends3.default)({}, style, {
    position: "absolute",
    left,
    top
  });
  var stylePointer = (0, import_extends3.default)({
    width: 18,
    height: 18,
    boxShadow: "var(--alpha-pointer-box-shadow)",
    borderRadius: "50%",
    backgroundColor: "var(--alpha-pointer-background-color)"
  }, fillProps == null ? void 0 : fillProps.style, {
    transform: left ? "translate(-9px, -1px)" : "translate(-1px, -9px)"
  });
  return /* @__PURE__ */ _jsx2("div", (0, import_extends3.default)({
    className: prefixCls + "-pointer " + (className || ""),
    style: styleWrapper
  }, reset, {
    children: /* @__PURE__ */ _jsx2("div", (0, import_extends3.default)({
      className: prefixCls + "-fill"
    }, fillProps, {
      style: stylePointer
    }))
  }));
};

// ../../node_modules/.pnpm/@uiw+react-color-alpha@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-alpha/esm/index.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var _excluded3 = ["prefixCls", "className", "hsva", "background", "bgProps", "innerProps", "pointerProps", "radius", "width", "height", "direction", "style", "onChange", "pointer"];
var BACKGROUND_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==";
var Alpha = /* @__PURE__ */ React5.forwardRef((props, ref) => {
  var {
    prefixCls = "w-color-alpha",
    className,
    hsva,
    background,
    bgProps = {},
    innerProps = {},
    pointerProps = {},
    radius = 0,
    width,
    height = 16,
    direction = "horizontal",
    style,
    onChange,
    pointer
  } = props, other = (0, import_objectWithoutPropertiesLoose3.default)(props, _excluded3);
  var handleChange = (offset) => {
    onChange && onChange((0, import_extends4.default)({}, hsva, {
      a: direction === "horizontal" ? offset.left : offset.top
    }), offset);
  };
  var colorTo = hsvaToHslaString(Object.assign({}, hsva, {
    a: 1
  }));
  var innerBackground = "linear-gradient(to " + (direction === "horizontal" ? "right" : "bottom") + ", rgba(244, 67, 54, 0) 0%, " + colorTo + " 100%)";
  var comProps = {};
  if (direction === "horizontal") {
    comProps.left = hsva.a * 100 + "%";
  } else {
    comProps.top = hsva.a * 100 + "%";
  }
  var styleWrapper = (0, import_extends4.default)({
    "--alpha-background-color": "#fff",
    "--alpha-pointer-background-color": "rgb(248, 248, 248)",
    "--alpha-pointer-box-shadow": "rgb(0 0 0 / 37%) 0px 1px 4px 0px",
    borderRadius: radius,
    background: "url(" + BACKGROUND_IMG + ") left center",
    backgroundColor: "var(--alpha-background-color)"
  }, style, {
    position: "relative"
  }, {
    width,
    height
  });
  var pointerElement = pointer && typeof pointer === "function" ? pointer((0, import_extends4.default)({
    prefixCls
  }, pointerProps, comProps)) : /* @__PURE__ */ _jsx3(Pointer, (0, import_extends4.default)({}, pointerProps, {
    prefixCls
  }, comProps));
  return /* @__PURE__ */ _jsxs("div", (0, import_extends4.default)({}, other, {
    className: [prefixCls, prefixCls + "-" + direction, className || ""].filter(Boolean).join(" "),
    style: styleWrapper,
    ref,
    children: [/* @__PURE__ */ _jsx3("div", (0, import_extends4.default)({}, bgProps, {
      style: (0, import_extends4.default)({
        inset: 0,
        position: "absolute",
        background: background || innerBackground,
        borderRadius: radius
      }, bgProps.style)
    })), /* @__PURE__ */ _jsx3(esm_default, (0, import_extends4.default)({}, innerProps, {
      style: (0, import_extends4.default)({}, innerProps.style, {
        inset: 0,
        zIndex: 1,
        position: "absolute"
      }),
      onMove: handleChange,
      onDown: handleChange,
      children: pointerElement
    }))]
  }));
});
Alpha.displayName = "Alpha";
var esm_default2 = Alpha;

// ../../node_modules/.pnpm/@uiw+react-color-shade-slider@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-shade-slider/esm/index.js
import { jsx as _jsx4 } from "react/jsx-runtime";
var _excluded4 = ["prefixCls", "className", "onChange", "direction", "hsva"];
var ShadeSlider = /* @__PURE__ */ React6.forwardRef((props, ref) => {
  var {
    prefixCls = "w-color-saturation",
    className,
    onChange: _onChange,
    direction = "horizontal",
    hsva
  } = props, other = (0, import_objectWithoutPropertiesLoose4.default)(props, _excluded4);
  var colorFrom = hsvaToHslaString((0, import_extends5.default)({}, hsva, {
    a: 1,
    v: 100
  }));
  return /* @__PURE__ */ _jsx4(esm_default2, (0, import_extends5.default)({
    ref
  }, other, {
    className: prefixCls + " " + (className || ""),
    hsva: {
      h: hsva.h,
      s: hsva.s,
      v: hsva.v,
      a: 1 - hsva.v / 100
    },
    direction,
    background: "linear-gradient(to " + (direction === "horizontal" ? "right" : "bottom") + ", " + colorFrom + ", rgb(0, 0, 0))",
    onChange: (_, interaction) => {
      _onChange && _onChange({
        v: direction === "horizontal" ? 100 - interaction.left * 100 : 100 - interaction.top * 100
      });
    }
  }));
});
ShadeSlider.displayName = "ShadeSlider";
var esm_default3 = ShadeSlider;

// ../../node_modules/.pnpm/@uiw+react-color-wheel@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-wheel/esm/index.js
var import_extends7 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose5 = __toESM(require_objectWithoutPropertiesLoose());
import React8 from "react";

// ../../node_modules/.pnpm/@uiw+react-color-wheel@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-wheel/esm/Pointer.js
var import_extends6 = __toESM(require_extends());
import React7 from "react";
import { jsx as _jsx5 } from "react/jsx-runtime";
var BOXSHADOW = "rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px";
var Pointer2 = (_ref) => {
  var {
    className,
    color: color2,
    left,
    top,
    style,
    prefixCls
  } = _ref;
  var styleWarp = (0, import_extends6.default)({}, style, {
    position: "absolute",
    top,
    left
  });
  var cls = prefixCls + "-pointer " + (className || "");
  return /* @__PURE__ */ _jsx5("div", {
    className: cls,
    style: styleWarp,
    children: /* @__PURE__ */ _jsx5("div", {
      className: prefixCls + "-fill",
      style: {
        width: 10,
        height: 10,
        transform: "translate(-5px, -5px)",
        boxShadow: BOXSHADOW,
        borderRadius: "50%",
        backgroundColor: "#fff"
      },
      children: /* @__PURE__ */ _jsx5("div", {
        style: {
          inset: 0,
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: color2
        }
      })
    })
  });
};

// ../../node_modules/.pnpm/@uiw+react-color-wheel@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-wheel/esm/utils.js
var TAU = Math.PI * 2;
var mod = (a2, n2) => (a2 % n2 + n2) % n2;
var dist = (x, y) => Math.sqrt(x * x + y * y);
function getWheelDimensions(_ref) {
  var {
    width = 0
  } = _ref;
  var r2 = width / 2;
  return {
    width,
    radius: r2,
    cx: r2,
    cy: r2
  };
}
function getWheelHandlePosition(props, hsv) {
  var {
    cx: cx2,
    cy
  } = getWheelDimensions(props);
  var handleRange = getHandleRange(props);
  var handleAngle = (180 + translateWheelAngle(props, hsv.h, true)) * (TAU / 360);
  var handleDist = hsv.s / 100 * handleRange;
  var direction = props.direction === "clockwise" ? -1 : 1;
  return {
    x: cx2 + handleDist * Math.cos(handleAngle) * direction,
    y: cy + handleDist * Math.sin(handleAngle) * direction
  };
}
function getHandleRange(_ref2) {
  var {
    width = 0
  } = _ref2;
  return width / 2;
}
function translateWheelAngle(props, angle, invert) {
  var wheelAngle = props.angle || 0;
  var direction = props.direction;
  if (invert && direction === "clockwise") angle = wheelAngle + angle;
  else if (direction === "clockwise") angle = 360 - wheelAngle + angle;
  else if (invert && direction === "anticlockwise") angle = wheelAngle + 180 - angle;
  else if (direction === "anticlockwise") angle = wheelAngle - angle;
  return mod(angle, 360);
}
function getWheelValueFromInput(props, x, y) {
  var {
    cx: cx2,
    cy
  } = getWheelDimensions(props);
  var handleRange = getHandleRange(props);
  x = cx2 - x;
  y = cy - y;
  var hue = translateWheelAngle(props, Math.atan2(-y, -x) * (360 / TAU));
  var handleDist = Math.min(dist(x, y), handleRange);
  return {
    h: Math.round(hue),
    s: Math.round(100 / handleRange * handleDist)
  };
}

// ../../node_modules/.pnpm/@uiw+react-color-wheel@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-wheel/esm/index.js
import { jsx as _jsx6 } from "react/jsx-runtime";
import { jsxs as _jsxs2 } from "react/jsx-runtime";
var _excluded5 = ["prefixCls", "radius", "pointer", "className", "style", "width", "height", "oval", "direction", "angle", "color", "onChange"];
var HUE_GRADIENT_CLOCKWISE = "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)";
var HUE_GRADIENT_ANTICLOCKWISE = "conic-gradient(red, magenta, blue, aqua, lime, yellow, red)";
var Wheel = /* @__PURE__ */ React8.forwardRef((props, ref) => {
  var {
    prefixCls = "w-color-wheel",
    radius = 0,
    pointer,
    className,
    style,
    width = 200,
    height = 200,
    oval,
    direction = "anticlockwise",
    angle = 180,
    color: color2,
    onChange
  } = props, other = (0, import_objectWithoutPropertiesLoose5.default)(props, _excluded5);
  var hsva = typeof color2 === "string" && validHex(color2) ? hexToHsva(color2) : color2 || {};
  var hex = color2 ? hsvaToHex(hsva) : "";
  var positions = getWheelHandlePosition({
    width
  }, hsva);
  var comProps = {
    top: "0",
    left: "0",
    color: hex
  };
  var handleChange = (interaction, event) => {
    var result = getWheelValueFromInput({
      width
    }, width - interaction.x, height - interaction.y);
    var handleHsva = {
      h: result.h,
      s: result.s,
      v: hsva.v,
      a: hsva.a
    };
    onChange && onChange(color(handleHsva));
  };
  var pointerStyle = {
    zIndex: 1,
    transform: "translate(" + positions.x + "px, " + positions.y + "px) " + (oval === "x" || oval === "X" ? "scaleY(2)" : oval === "y" || oval === "Y" ? "scaleX(2)" : "")
  };
  var pointerElement = pointer && typeof pointer === "function" ? pointer((0, import_extends7.default)({
    prefixCls,
    style: pointerStyle
  }, comProps)) : /* @__PURE__ */ _jsx6(Pointer2, (0, import_extends7.default)({
    prefixCls,
    style: pointerStyle
  }, comProps));
  return /* @__PURE__ */ _jsxs2(esm_default, (0, import_extends7.default)({
    className: [prefixCls, className || ""].filter(Boolean).join(" ")
  }, other, {
    style: (0, import_extends7.default)({
      position: "relative",
      width,
      transform: oval === "x" || oval === "X" ? "scaleY(0.5)" : oval === "y" || oval === "Y" ? "scaleX(0.5)" : "",
      height
    }, style),
    ref,
    onMove: handleChange,
    onDown: handleChange,
    children: [pointerElement, /* @__PURE__ */ _jsx6("div", {
      style: {
        position: "absolute",
        borderRadius: "50%",
        background: direction === "anticlockwise" ? HUE_GRADIENT_CLOCKWISE : HUE_GRADIENT_ANTICLOCKWISE,
        transform: "rotateZ(" + (angle + 90) + "deg)",
        inset: 0
      }
    }), /* @__PURE__ */ _jsx6("div", {
      style: {
        position: "absolute",
        borderRadius: "50%",
        background: "radial-gradient(circle closest-side, #fff, transparent)",
        inset: 0
      }
    }), /* @__PURE__ */ _jsx6("div", {
      style: {
        backgroundColor: "#000",
        borderRadius: "50%",
        position: "absolute",
        inset: 0,
        opacity: typeof hsva.v === "number" ? 1 - hsva.v / 100 : 0
      }
    })]
  }));
});
Wheel.displayName = "Wheel";
var esm_default4 = Wheel;

// src/PluginUI/ColorInput.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function ColorInput({
  defaultValue,
  setValue
}) {
  const [sharedValue, setSharedValue] = React9.useState(defaultValue);
  const [isClicked, setIsClicked] = React9.useState(false);
  const colorPickerRef = React9.useRef(null);
  const triggerRef = React9.useRef(null);
  React9.useEffect(() => {
    setSharedValue(defaultValue);
  }, []);
  React9.useEffect(() => {
    setValue(sharedValue);
  }, [sharedValue]);
  React9.useEffect(() => {
    setSharedValue(defaultValue);
  }, [defaultValue]);
  React9.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isClicked) {
          setIsClicked(false);
        }
      },
      { threshold: 0.5 }
      // Trigger when any part of the element is not visible
    );
    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }
    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, [isClicked]);
  const updateColorWheelPosition = React9.useCallback(() => {
    if (isClicked && colorPickerRef.current && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const colorWheelRect = colorPickerRef.current.getBoundingClientRect();
      const left = triggerRect.left + triggerRect.width / 2 - colorWheelRect.width / 2;
      const top = triggerRect.top - colorWheelRect.height - 5;
      colorPickerRef.current.style.left = `${left}px`;
      colorPickerRef.current.style.top = `${top}px`;
    }
  }, [isClicked]);
  useOnClickOutside(colorPickerRef, () => setIsClicked(false));
  React9.useEffect(() => {
    updateColorWheelPosition();
    const handleScroll = () => {
      updateColorWheelPosition();
    };
    if (isClicked) {
      window.addEventListener("scroll", handleScroll, true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isClicked, updateColorWheelPosition]);
  return /* @__PURE__ */ jsxs5("div", { className: "flex items-center w-full h-full flex-row gap-2", children: [
    /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-2 w-full relative h-full", children: [
      /* @__PURE__ */ jsx6(
        "div",
        {
          ref: triggerRef,
          className: "w-full h-[26px] rounded-md cursor-pointer",
          style: {
            background: sharedValue,
            border: sharedValue === "#ffffff" ? "1px solid #F2F2F2" : "0px solid transparent"
          },
          onClick: () => {
            setIsClicked(!isClicked);
          }
        }
      ),
      /* @__PURE__ */ jsx6(
        "div",
        {
          ref: colorPickerRef,
          id: "colorwheel",
          style: {
            width: "fit-content",
            height: "fit-content",
            position: "fixed",
            zIndex: 100,
            display: isClicked === true ? "block" : "none"
          },
          children: /* @__PURE__ */ jsxs5(
            "div",
            {
              style: {
                display: "flex",
                width: "fit-content",
                height: "fit-content",
                background: "white",
                padding: 16,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 16,
                borderRadius: 5,
                filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.10))"
              },
              children: [
                /* @__PURE__ */ jsx6(
                  esm_default4,
                  {
                    color: sharedValue,
                    onChange: (color2) => {
                      setSharedValue(color2.hex);
                    },
                    width: 200,
                    height: 200
                  }
                ),
                /* @__PURE__ */ jsx6(
                  esm_default3,
                  {
                    width: 200,
                    radius: 4,
                    style: { display: "flex", alignItems: "center" },
                    hsva: hexToHsva(sharedValue),
                    onChange: (color2) => {
                      setSharedValue(
                        hsvaToHex({
                          h: hexToHsva(sharedValue).h,
                          // @ts-ignore
                          s: color2.s,
                          v: color2.v,
                          a: 1
                        })
                      );
                    }
                  }
                ),
                /* @__PURE__ */ jsx6(
                  "div",
                  {
                    style: {
                      width: 16,
                      height: 16,
                      background: "white",
                      position: "absolute",
                      borderRadius: 3,
                      bottom: -5,
                      transform: "rotate(45deg)"
                    }
                  }
                )
              ]
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsx6(
      "input",
      {
        type: "text",
        value: sharedValue,
        onChange: (e2) => setSharedValue(e2.target.value),
        className: "w-[84px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center"
      }
    )
  ] });
}

// src/PluginUI/RangeSlider.tsx
import { useState as useState7, useEffect as useEffect8 } from "react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function RangeSlider({
  title,
  defaultValue,
  setValue,
  step,
  min,
  max,
  info,
  infoContent,
  condition
}) {
  const [rangeValue, setRangeValue] = useState7(defaultValue);
  const [isMouseOver, setIsMouseOver] = useState7(false);
  useEffect8(() => {
    setRangeValue(defaultValue);
  }, [defaultValue]);
  useEffect8(() => {
    setValue(rangeValue);
  }, [rangeValue]);
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      className: "flex items-center w-full h-[26px] flex-row gap-2",
      style: { fontFamily: "Inter Medium" },
      children: [
        /* @__PURE__ */ jsx7(
          InputTitle,
          {
            title,
            info,
            infoContent,
            condition
          }
        ),
        /* @__PURE__ */ jsxs6(
          "div",
          {
            className: "flex items-center w-full h-fit flex-row gap-2",
            onMouseOver: () => setIsMouseOver(true),
            onMouseLeave: () => setIsMouseOver(false),
            children: [
              /* @__PURE__ */ jsx7(
                "input",
                {
                  type: "number",
                  value: rangeValue[0],
                  onChange: (e2) => {
                    setRangeValue([Number(e2.target.value), rangeValue[1]]);
                  },
                  min: 0,
                  className: "font-medium w-[42px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center [&::-webkit-inner-spin-button]:appearance-none " + (isMouseOver === true ? "text-[#ff340a]" : "text-[#000000]"),
                  step
                }
              ),
              /* @__PURE__ */ jsx7(
                u,
                {
                  value: rangeValue,
                  step,
                  min,
                  max,
                  onChange: (values) => {
                    setRangeValue(values);
                  },
                  className: "w-full rounded-md bg-[#F2F2F2] cursor-ew-resize overflow-hidden transition-height duration-300 " + (isMouseOver === true ? "h-[26px]" : "h-[5px]"),
                  trackClassName: "h-full duration-300 " + (isMouseOver === true ? "bg-[#ff340a]" : "bg-[#ABABAB]"),
                  renderTrack: (props, state) => /* @__PURE__ */ jsx7(
                    "div",
                    __spreadProps(__spreadValues({}, props), {
                      className: "h-full flex relative " + (isMouseOver === true ? "bg-[#ff340a]" : "bg-[#ABABAB]"),
                      style: __spreadProps(__spreadValues({}, props.style), {
                        opacity: state.index === 1 ? 1 : 0
                      })
                    })
                  ),
                  renderThumb: (props, state) => /* @__PURE__ */ jsx7(
                    "div",
                    __spreadProps(__spreadValues({}, props), {
                      className: "w-[8px] h-full justify-center items-center flex",
                      children: /* @__PURE__ */ jsx7(
                        "div",
                        {
                          className: "absolute w-[2px] bg-[#ffffff] rounded-full pointer-events-none duration-200 h-[30%] " + (isMouseOver === true ? "opacity-100" : "opacity-0")
                        }
                      )
                    })
                  )
                }
              ),
              /* @__PURE__ */ jsx7(
                "input",
                {
                  type: "number",
                  value: rangeValue[1],
                  onChange: (e2) => {
                    setRangeValue([rangeValue[0], Number(e2.target.value)]);
                  },
                  className: "font-medium w-[42px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center [&::-webkit-inner-spin-button]:appearance-none " + (isMouseOver === true ? "text-[#ff340a]" : "text-[#000000]"),
                  step,
                  max
                }
              )
            ]
          }
        )
      ]
    }
  );
}

// ../../node_modules/.pnpm/zustand@5.0.1_@types+react@18.2.73_immer@9.0.21_react@18.3.1_use-sync-external-store@1.5.0_react@18.3.1_/node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

// ../../node_modules/.pnpm/zustand@5.0.1_@types+react@18.2.73_immer@9.0.21_react@18.3.1_use-sync-external-store@1.5.0_react@18.3.1_/node_modules/zustand/esm/react.mjs
import React10 from "react";
var identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = React10.useSyncExternalStore(
    api.subscribe,
    () => selector(api.getState()),
    () => selector(api.getInitialState())
  );
  React10.useDebugValue(slice);
  return slice;
}
var createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
var create = (createState) => createState ? createImpl(createState) : createImpl;

// ../../node_modules/.pnpm/zustand@5.0.1_@types+react@18.2.73_immer@9.0.21_react@18.3.1_use-sync-external-store@1.5.0_react@18.3.1_/node_modules/zustand/esm/middleware.mjs
var combine = (initialState, create2) => (...a2) => Object.assign({}, initialState, create2(...a2));

// src/store.ts
var useUIStore = create(
  combine({ activePreset: 0, mode: "full", loadingPercentage: 0 }, (set) => ({
    setActivePreset: (by) => set((state) => ({ activePreset: by })),
    setMode: (data) => set((state) => __spreadProps(__spreadValues({}, state), { mode: data })),
    setLoadingPercentage: (data) => set((state) => __spreadProps(__spreadValues({}, state), { loadingPercentage: data }))
  }))
);
export {
  Button,
  ColorInput,
  InputTitle,
  RangeSlider,
  Slider,
  TextAnimation,
  TextHover,
  useUIStore
};
