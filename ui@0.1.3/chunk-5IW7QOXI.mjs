import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/overrides/Web/Scroll.tsx
import { useRef, useEffect } from "react";
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0";
import { useInView } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var useStore = createStore({
  // highlightVariant: "default",
  highlightWord: 0,
  currentSection: 0
});
function SectionText(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { text: `currentSection: ${store.currentSection}` }));
  };
}
function SectionObserver(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const ref = useRef(null);
    const isInView = useInView(ref);
    useEffect(() => {
      if (isInView) setStore({ currentSection: props.name });
    }, [isInView]);
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { ref }));
  };
}
function Gap(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const { scrollY } = useScroll();
    const size = useTransform(scrollY, [0, 400], [0, 40]);
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { style: __spreadProps(__spreadValues({}, style), { width: size, height: size }) }));
  };
}
function CenterCrop1(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const [store, setStore] = useStore();
    const opacity = isBottomSection(store.currentSection) ? 0 : 1;
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { style: __spreadProps(__spreadValues({}, style), { opacity }) }));
  };
}
function CenterCrop2(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const [store, setStore] = useStore();
    const opacity = isBottomSection(store.currentSection) ? 1 : 0;
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { style: __spreadProps(__spreadValues({}, style), { opacity }) }));
  };
}
function isBottomSection(sectionName) {
  if (typeof sectionName !== "string") return false;
  return sectionName.includes("figma") || sectionName.includes("highlight") || sectionName.includes("word-scroll");
}
function WordGradient(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        },
        children: /* @__PURE__ */ jsx(
          Component,
          __spreadProps(__spreadValues({}, props), {
            variant: store.highlightWord ? `customize-${store.highlightWord}` : "default"
          })
        )
      }
    );
  };
}
function WordGradientText(Component) {
  return (props) => {
    const targetRef = useRef(null);
    const [store, setStore] = useStore();
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start center", "end center"]
    });
    const variantNumber = useTransform(scrollYProgress, [0, 1], [1, 12]);
    useEffect(() => {
      const unsubscribeScrollY = scrollYProgress.onChange((latest) => {
        console.log("\u{1F4CD} scrollYProgress:", latest.toFixed(3));
        if (latest > 0 && latest < 1) {
          console.log("\u2705 Text layer in target range (center viewport)");
        } else {
          console.log("\u274C Text layer outside center range");
        }
      });
      return () => unsubscribeScrollY();
    }, [scrollYProgress]);
    useEffect(() => {
      const unsubscribeScrollY = scrollYProgress.onChange((currentProgress) => {
        if (currentProgress <= 0 || currentProgress >= 1) {
          const defaultVariant = props.variant || "default";
          console.log("\u{1F504} Using default variant:", defaultVariant);
          setStore(__spreadProps(__spreadValues({}, store), {
            variant: defaultVariant
          }));
        }
      });
      const unsubscribe = variantNumber.onChange((latest) => {
        const currentProgress = scrollYProgress.get();
        if (currentProgress > 0 && currentProgress < 1) {
          const roundedNumber = Math.round(latest);
          const clampedNumber = Math.max(1, Math.min(12, roundedNumber));
          const newVariant = `customize-${clampedNumber}`;
          console.log("\u{1F4CA} variantNumber:", latest.toFixed(3));
          console.log("\u{1F3A8} variant changed to:", newVariant);
          setStore(__spreadProps(__spreadValues({}, store), {
            variant: newVariant
          }));
        }
      });
      return () => {
        unsubscribeScrollY();
        unsubscribe();
      };
    }, [variantNumber, scrollYProgress, props.variant, store, setStore]);
    return /* @__PURE__ */ jsx("div", { ref: targetRef, children: /* @__PURE__ */ jsx(
      Component,
      __spreadValues({}, props)
    ) });
  };
}
function WordHighlight2(Component) {
  return (props) => {
    console.log("props", props);
    const word = props.children.props.children.props.children;
    const [store, setStore] = useStore();
    const container = useRef(null);
    const ref = useRef(null);
    console.log("container", container);
    const isInView = useInView(ref, {
      root: container,
      margin: "0px 0px 0px 0px"
    });
    useEffect(() => {
      console.log("word", word);
      console.log("isInView", isInView);
      if (isInView) setStore({ currentWordNum: word });
    }, [isInView, store.currentSection]);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { ref })),
      /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "200px",
            height: "50px",
            backgroundColor: "red",
            opacity: 0.5
          }
        }
      )
    ] });
  };
}
function WordHighlight(Component) {
  return (props) => {
    const sectionNumber = parseInt(props.name);
    const [store, setStore] = useStore();
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "0px 0px 0px 0px" });
    useEffect(() => {
      if (isInView === true) setStore({ currentWordNum: sectionNumber });
      else setStore({ currentWordNum: -1 });
    }, [isInView, store.currentSection]);
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { ref }));
  };
}
function wordHighlightText(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { text: `currentWordNum: ${store.currentWordNum}` }));
  };
}

export {
  useStore,
  SectionText,
  SectionObserver,
  Gap,
  CenterCrop1,
  CenterCrop2,
  WordGradient,
  WordGradientText,
  WordHighlight2,
  WordHighlight,
  wordHighlightText
};
