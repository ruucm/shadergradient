import {
  figma,
  postFigmaMessage,
  postFigmaMessageForExport,
  postFigmaMessageForSnapShot
} from "./chunk-TX3FXUBO.mjs";
import {
  copyToClipboard,
  estimateSize,
  getTrialLeft,
  parseUrlToCode,
  updateResolution,
  useFigmaMessage,
  useSubscription
} from "./chunk-JNRQHCKE.mjs";
import {
  useFigma,
  useUIStore
} from "./chunk-ZAX22QRS.mjs";
import {
  useQueryState,
  useURLQueryState
} from "./chunk-U6H5AWC4.mjs";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/overrides/FigmaPlugin/UI.tsx
import {
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
  useCallback
} from "react";
import { useAnimationControls, useInView } from "framer-motion";
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0";
import { useDBTable } from "https://framer.com/m/SupabaseConnector-ARlr.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createElement } from "react";
var useStore = createStore({
  currentTab: 0,
  scrollingTo: null,
  share: "url"
  // url or code
});
function insertCanvasAsImage(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const [figma2] = useFigma();
    const setError = useUIStore((state) => state.setError);
    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
      setEnabled(figma2.selection > 0);
      if (figma2.selection > 0) setError("");
    }, [figma2.selection]);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        style: __spreadProps(__spreadValues({}, style), {
          cursor: enabled ? "pointer" : "default",
          opacity: enabled ? 1 : 0.5,
          PointerEvent: enabled ? "auto" : "none"
        }),
        onClick: () => {
          if (enabled) postFigmaMessageForSnapShot(() => void 0);
          else setError("Please select a frame on the canvas");
        }
      })
    );
  };
}
function OpenGIFPage(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const [figma2] = useFigma();
    const enabled = figma2.selection > 0;
    const setError = useUIStore((state) => state.setError);
    const [, setRange] = useQueryState("range");
    const [, setRangeStart] = useQueryState("rangeStart");
    const [, setRangeEnd] = useQueryState("rangeEnd");
    const [, setPixelDensity] = useQueryState("pixelDensity");
    const [, setToggleAxis] = useQueryState("toggleAxis");
    const [, setZoomOut] = useQueryState("zoomOut");
    const [, setAnimate] = useQueryState("animate");
    const setFigmaPage = useUIStore((state) => state.setFigmaPage);
    useEffect(() => {
      if (enabled) {
        setError("");
      } else {
        setError("Please select a frame on the canvas");
      }
    }, [enabled]);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        style: __spreadProps(__spreadValues({}, style), {
          cursor: enabled ? "pointer" : "default",
          opacity: enabled ? 1 : 0.5,
          PointerEvent: enabled ? "auto" : "none"
        }),
        onClick: () => {
          console.log("onClick GIF");
          setAnimate("on");
          setRange("enabled");
          setRangeStart(5);
          setRangeEnd(8);
          setPixelDensity(2);
          setToggleAxis(false);
          setZoomOut(false);
          setFigmaPage("gif");
        },
        onGIFNoDB: () => console.log("onGIFNoDB (ignore the default event)"),
        onGIF: () => console.log("onGIF (ignore the default event)")
      })
    );
  };
}
var controller;
var trials = 7;
function goBack(Component) {
  return (props) => {
    const figmaPage = useUIStore((state) => state.figmaPage);
    const setFigmaPage = useUIStore((state) => state.setFigmaPage);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        onClick: () => {
          controller.abort();
          if (figmaPage === "gif") setFigmaPage("control");
        }
      })
    );
  };
}
function extractGIF(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    var _a2;
    const [progress, setProgress] = useState(-1);
    const setError = useUIStore((state) => state.setError);
    const loading = progress >= 0 && progress < 1;
    const controllerRef = useRef(null);
    const [figma2] = useFigma();
    const enabled = figma2.selection > 0;
    const [animate, setAnimate] = useQueryState("animate");
    const [, setUTime] = useQueryState("uTime");
    const [range, setRange] = useQueryState("range");
    const [rangeStart] = useQueryState("rangeStart");
    const [rangeEnd] = useQueryState("rangeEnd");
    const [frameRate] = useQueryState("frameRate");
    const [pixelDensity] = useQueryState("pixelDensity");
    const [destination] = useQueryState("destination");
    const [width, setWidth] = useState(333);
    const [height, setHeight] = useState(333);
    const [format] = useQueryState("format");
    const [grain] = useQueryState("grain");
    const error = useUIStore((state) => state.error);
    const [duration, setDuration] = useState(0);
    const [size, setSize] = useState(0);
    const startTimeRef = useRef(0);
    const animationFrameRef = useRef(null);
    const figma_user_id = (_a2 = figma2.user) == null ? void 0 : _a2.id;
    const [rows, dbLoading, insertRow, updateRow] = useDBTable(
      "users",
      "sg-figma"
    );
    const userDB = rows.find((r) => r.figma_user_id === figma_user_id);
    const trialLeft = getTrialLeft(userDB == null ? void 0 : userDB.trial_started_at, trials);
    const [subscription, subDBLoading] = useSubscription("sub1");
    const needSubscribe = trialLeft <= 0 && !subDBLoading && !subscription;
    useEffect(() => {
      console.log(subscription, userDB, "subscription, userDB");
      console.log(trialLeft);
    }, [subscription, userDB]);
    useEffect(() => {
      console.log(destination, "destination");
    }, [destination]);
    const [titleText, setTitleText] = useState("");
    useEffect(() => {
      const newTitleText = needSubscribe ? "Upgrade to Pro" : destination === "onCanvas" ? "Add GIF to canvas" : "Download";
      setTitleText(newTitleText);
    }, [destination, needSubscribe]);
    const creditText = `(${trialLeft} days left)`;
    useEffect(() => {
      setDuration(rangeEnd - rangeStart);
    }, [rangeStart, rangeEnd]);
    useEffect(() => {
      setSize(estimateSize({ format, duration, frameRate, pixelDensity }));
      setTimeout(() => {
        updateResolution({ setWidth, setHeight, pixelDensity });
      }, 100);
    }, [format, duration, pixelDensity, frameRate]);
    useLayoutEffect(() => {
      function updateSize() {
        updateResolution({ setWidth, setHeight, pixelDensity });
      }
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, [pixelDensity]);
    const valid = animate === "on" && range === "enabled" && size < 300;
    const option = {
      rangeStart,
      rangeEnd,
      setAnimate,
      setUTime,
      frameRate,
      destination,
      format,
      grain
    };
    const updateTime = useCallback(() => {
      if (!loading) return;
      const elapsed = (Date.now() - startTimeRef.current) / 1e3;
      const playhead = rangeStart + elapsed % duration;
      setUTime(playhead);
      animationFrameRef.current = requestAnimationFrame(updateTime);
    }, [loading, rangeStart, duration, setUTime]);
    useEffect(() => {
      if (loading) {
        startTimeRef.current = Date.now();
        updateTime();
      } else {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      }
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [loading, updateTime]);
    useEffect(() => {
      return () => {
        if (controllerRef.current) {
          controllerRef.current.abort();
        }
      };
    }, []);
    const handleAbort = useCallback(() => {
      if (controllerRef.current) {
        controllerRef.current.abort();
        setProgress(-1);
        setAnimate("on");
        console.log("Export aborted");
      }
    }, [setAnimate]);
    const startExport = useCallback(() => {
      controllerRef.current = new AbortController();
      setRange("enabled");
      if (enabled && valid) {
        if (needSubscribe) {
          props == null ? void 0 : props.onTapGIFUpgrade();
          console.log("onTapGIFUpgrade");
        } else {
          if (!userDB) {
            props == null ? void 0 : props.onTapGIFNoDB();
            console.log("onTapGIFNoDB");
          } else {
            setProgress(0);
            startTimeRef.current = Date.now();
            console.log("startTime", startTimeRef.current);
            if (subscription || trialLeft > 0) {
              postFigmaMessageForExport(
                option,
                setProgress,
                controllerRef.current
              );
            } else {
              console.log("No valid subscription or trial");
              props == null ? void 0 : props.onTapGIFUpgrade();
            }
          }
        }
      } else {
        props == null ? void 0 : props.onTapGIF();
      }
    }, [
      enabled,
      valid,
      needSubscribe,
      userDB,
      option,
      setProgress,
      setRange,
      props,
      subscription,
      trialLeft
    ]);
    let variant = "dbLoading";
    if (loading) variant = "loading";
    else if (size > 300) variant = "error";
    else if (!enabled) variant = "error";
    else if (!subDBLoading && !subscription) variant = "default";
    else if (!subDBLoading && subscription) variant = "pro";
    else if (needSubscribe) variant = "upgrade";
    useEffect(() => {
      if (!enabled) {
        setError("Select a frame on the canvas");
      }
      if (size > 300) {
        setError("You can only add GIF under 300mb on canvas");
      }
    }, [enabled, size, setError]);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ createElement(
        Component,
        __spreadProps(__spreadValues({}, props), {
          key: progress,
          style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
          onClick: startExport,
          onTapGIFUpgrade: () => console.log("onTapGIFU (ignore the default event)"),
          onTapGIFNoDB: () => console.log("onTapGIFN (ignore the default event)"),
          progress: progress * 100,
          title: error !== "" ? error : titleText,
          credit: !subscription ? creditText : null,
          variant
        })
      ),
      variant === "loading" && /* @__PURE__ */ jsx(
        "div",
        {
          onClick: handleAbort,
          style: {
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            cursor: "wait"
          }
        }
      )
    ] });
  };
}
function Timeline(Component) {
  return (_a) => {
    var props = __objRest(_a, []);
    const controls = useAnimationControls();
    const [rangeStart] = useQueryState("rangeStart");
    const [rangeEnd] = useQueryState("rangeEnd");
    const [duration, setDuration] = useState(0);
    useEffect(() => {
      if (rangeStart !== void 0 && rangeEnd !== void 0) {
        setDuration(rangeEnd - rangeStart);
      }
    }, [rangeStart, rangeEnd]);
    useEffect(() => {
      console.log(duration, "timeline check");
      const runSequence = () => __async(this, null, function* () {
        try {
          controls.set({ width: "0%", transition: { duration: 0 } });
          yield controls.start({
            width: "100%",
            transition: {
              duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }
          });
        } catch (error) {
          console.error("Timeline animation error:", error);
        }
      });
      runSequence();
    }, [duration, controls]);
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { animate: controls }));
  };
}
function EstimatedSize(Component) {
  return (_a) => {
    var props = __objRest(_a, []);
    const [rangeStart] = useQueryState("rangeStart");
    const [rangeEnd] = useQueryState("rangeEnd");
    const [frameRate] = useQueryState("frameRate");
    const [pixelDensity] = useQueryState("pixelDensity");
    const [format] = useQueryState("format");
    const [destination] = useQueryState("destination");
    const [duration, setDuration] = useState(rangeEnd - rangeStart);
    const [size, setSize] = useState(0);
    const setError = useUIStore((state) => state.setError);
    const figmaPage = useUIStore((state) => state.figmaPage);
    useEffect(() => {
      setDuration(rangeEnd - rangeStart);
    }, [rangeStart, rangeEnd]);
    useEffect(() => {
      setSize(estimateSize({ format, duration, frameRate, pixelDensity }));
    }, [format, duration, pixelDensity, frameRate]);
    useEffect(() => {
      if (size > 300 && destination === "onCanvas" && figmaPage === "gif") {
        setError("GIF size should be below 300MB on Figma.");
      } else {
        setError("");
      }
    }, [size, destination]);
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { text: size + "MB" }));
  };
}
function Duration(Component) {
  return (_a) => {
    var props = __objRest(_a, []);
    const [rangeStart] = useQueryState("rangeStart");
    const [rangeEnd] = useQueryState("rangeEnd");
    const [duration, setDuration] = useState(rangeEnd - rangeStart);
    useEffect(() => {
      setDuration(rangeEnd - rangeStart);
    }, [rangeEnd, rangeStart]);
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { text: duration + "s" }));
  };
}
function UndoButton(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const setQueryValue = useURLQueryState();
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
        onClick: () => {
          const prevUrls = window.history.state.prevUrls || [];
          if (prevUrls.length > 1) {
            prevUrls.pop();
            const lastURL = new URL(prevUrls[prevUrls.length - 1]).search;
            setQueryValue(lastURL);
            console.log(lastURL, "lastURL");
            prevUrls.pop();
            window.history.pushState({ prevUrls }, document.title, "");
          } else alert("no history");
        }
      })
    );
  };
}
function Error(Component) {
  return (_a) => {
    var props = __objRest(_a, []);
    const error = useUIStore((state) => state.error);
    const [variant, setVariant] = useState("hidden");
    useEffect(() => {
      if (error !== "") {
        setVariant("onError");
      } else {
        setVariant("hidden");
      }
    }, [error]);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        errorText: error,
        variant: error === "" ? "hidden" : "onError"
      })
    );
  };
}
function ToggleShare(Component) {
  return (_a) => {
    var props = __objRest(_a, []);
    const [store, setStore] = useStore();
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        variant: store.share,
        onClickUrl: () => {
          setStore({ share: "Url" });
        },
        onClickCode: () => {
          setStore({ share: "Code" });
        }
      })
    );
  };
}
function ShowCopyContent(Component) {
  return (props) => {
    const baseURL = "https://shadergradient.co/customize";
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        copyContent: baseURL + window.location.search,
        copyEvent: () => {
          navigator.clipboard.writeText(
            parseUrlToCode(baseURL + window.location.search)
          );
        }
      })
    );
  };
}
function CopyBtn(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const [copied, setCopied] = useState(false);
    const baseURL = "https://shadergradient.co/customize";
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        btnText: `${copied === false ? "Copy " : "Yay, Copied "}` + store.share + `${copied === false ? "" : "!"}`,
        onClick: () => __async(this, null, function* () {
          setCopied(true);
          const textToCopy = store.share === "url" ? baseURL + window.location.search : parseUrlToCode(baseURL + window.location.search);
          copyToClipboard(textToCopy);
          setTimeout(() => {
            setCopied(false);
          }, 2e3);
        })
      })
    );
  };
}
function TabSwitcher(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const scrollBehavior = { behavior: "smooth", block: "start" };
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        variant: "Tab" + store.currentTab,
        tab0Click: () => {
          setStore({ scrollingTo: 0 });
          const tab0 = document.getElementById("tab0");
          tab0.scrollIntoView(scrollBehavior);
        },
        tab1Click: () => {
          setStore({ scrollingTo: 1 });
          const tab1 = document.getElementById("tab1");
          tab1.scrollIntoView(scrollBehavior);
        },
        tab2Click: () => {
          setStore({ scrollingTo: 2 });
          const tab2 = document.getElementById("tab2");
          tab2.scrollIntoView(scrollBehavior);
        },
        tab3Click: () => {
          setStore({ scrollingTo: 3 });
          const tab3 = document.getElementById("tab3");
          tab3.scrollIntoView(scrollBehavior);
        }
      })
    );
  };
}
function ShapeTab(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const ref = useRef(null);
    const isInView = useInView(ref, {
      amount: 0.6
      // at least 60% in view to be considered visible
    });
    useEffect(() => {
      if (isInView && store.scrollingTo === null) {
        setStore({ currentTab: 0 });
      } else if (isInView && store.scrollingTo === 0) {
        setStore({ currentTab: 0 });
        setTimeout(() => {
          setStore({ scrollingTo: null });
        }, 100);
      }
    }, [isInView, store.scrollingTo]);
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { ref, id: "tab0" }));
  };
}
function ColorsTab(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const ref = useRef(null);
    const isInView = useInView(ref, {
      amount: 0.6
      // at least 60% in view to be considered visible
    });
    useEffect(() => {
      if (isInView && store.scrollingTo === null) {
        setStore({ currentTab: 1 });
      } else if (isInView && store.scrollingTo === 1) {
        setStore({ currentTab: 1 });
        setTimeout(() => {
          setStore({ scrollingTo: null });
        }, 100);
      }
    }, [isInView, store.scrollingTo]);
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { ref, id: "tab1" }));
  };
}
function MotionTab(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const ref = useRef(null);
    const isInView = useInView(ref, {
      amount: 0.6
      // at least 60% in view to be considered visible
    });
    useEffect(() => {
      if (isInView && store.scrollingTo === null) {
        setStore({ currentTab: 2 });
      } else if (isInView && store.scrollingTo === 2) {
        setStore({ currentTab: 2 });
        setTimeout(() => {
          setStore({ scrollingTo: null });
        }, 100);
      }
    }, [isInView, store.scrollingTo]);
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { ref, id: "tab2" }));
  };
}
function ViewTab(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    const ref = useRef(null);
    const isInView = useInView(ref, {
      amount: 0.6
      // at least 60% in view to be considered visible
    });
    useEffect(() => {
      if (isInView && store.scrollingTo === null) {
        setStore({ currentTab: 3 });
      } else if (isInView && store.scrollingTo === 3) {
        setStore({ currentTab: 3 });
        setTimeout(() => {
          setStore({ scrollingTo: null });
        }, 100);
      }
    }, [isInView, store.scrollingTo]);
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { ref, id: "tab3" }));
  };
}
function HighlightButton(Component) {
  return (props) => {
    const [store, setStore] = useStore();
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        variant: store.currentTab === 3 ? "ToggleBtn - Highlight" : "ToggleBtn - Default"
      })
    );
  };
}
function LoadViewAfterStyleSheet(Component) {
  return (props) => {
    useFigmaMessage();
    const [foundStylesheet, setFoundStylesheet] = useState(true);
    useEffect(() => {
      const interval = setInterval(() => {
        const stylesheet = document.getElementById("shadergradient-app-styles");
        if (stylesheet) setFoundStylesheet(true);
      }, 200);
      return () => clearInterval(interval);
    }, []);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        style: __spreadProps(__spreadValues({}, props.style), {
          opacity: foundStylesheet ? 1 : 0,
          zIndex: 2147483640
        })
      })
    );
  };
}
function WidthFillOnLoad(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { style: __spreadProps(__spreadValues({}, style), { width: "100%" }) }));
  };
}
function createRectangle(Component) {
  return (props) => {
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        onClick: () => __async(this, null, function* () {
          postFigmaMessage(() => {
            const ellipse = figma.createRectangle();
            ellipse.resize(300, 300);
          });
        })
      })
    );
  };
}

export {
  insertCanvasAsImage,
  OpenGIFPage,
  goBack,
  extractGIF,
  Timeline,
  EstimatedSize,
  Duration,
  UndoButton,
  Error,
  ToggleShare,
  ShowCopyContent,
  CopyBtn,
  TabSwitcher,
  ShapeTab,
  ColorsTab,
  MotionTab,
  ViewTab,
  HighlightButton,
  LoadViewAfterStyleSheet,
  WidthFillOnLoad,
  createRectangle
};
