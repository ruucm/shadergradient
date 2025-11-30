import {
  Spacing
} from "./chunk-3I3TPE7B.mjs";
import {
  esm_default,
  esm_default2,
  hexToHsva,
  hsvaToHex
} from "./chunk-NLMIFEWB.mjs";
import {
  useOnClickOutside
} from "./chunk-B4GXHE46.mjs";
import {
  usePropState
} from "./chunk-QNYMEATR.mjs";

// src/components/Web/Customize/CustomizeColorInput.tsx
import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var isValidHex = (color) => {
  if (!color || typeof color !== "string") return false;
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};
var getValidColorOrFallback = (color, fallback = "#000000") => {
  return isValidHex(color) ? color : fallback;
};
var CustomizeColorInput = React.forwardRef(({ label = "", defaultValue, setValue }, ref) => {
  const [sharedValue, setSharedValue] = usePropState(defaultValue);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    setSharedValue(defaultValue);
  }, []);
  useEffect(() => {
    setValue(sharedValue);
  }, [sharedValue]);
  const tabRef = useRef(null);
  useOnClickOutside(tabRef, () => setToggle(false));
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
    label && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("label", { className: "font-semibold text-primary text-base", children: label }),
      /* @__PURE__ */ jsx(Spacing, { className: "w-2" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 w-full relative", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-full h-input rounded",
          style: { background: getValidColorOrFallback(sharedValue) },
          onClick: () => {
            setToggle(!toggle);
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: tabRef,
          style: {
            width: "fit-content",
            height: "fit-content",
            position: "absolute",
            bottom: 25,
            left: -10,
            zIndex: 100,
            display: toggle === true ? "block" : "none"
          },
          children: /* @__PURE__ */ jsxs(
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
                filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.37))"
              },
              children: [
                /* @__PURE__ */ jsx(
                  esm_default2,
                  {
                    color: getValidColorOrFallback(sharedValue),
                    onChange: (color) => {
                      setSharedValue(color.hex);
                    },
                    width: 200,
                    height: 200
                  }
                ),
                /* @__PURE__ */ jsx(
                  esm_default,
                  {
                    width: 200,
                    style: { display: "flex", alignItems: "center" },
                    hsva: hexToHsva(getValidColorOrFallback(sharedValue)),
                    onChange: (color) => {
                      const validColor = getValidColorOrFallback(sharedValue);
                      setSharedValue(
                        hsvaToHex({
                          h: hexToHsva(validColor).h,
                          // @ts-ignore
                          s: color.s,
                          v: color.v,
                          a: 1
                        })
                      );
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
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
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: sharedValue,
          onChange: (e) => setSharedValue(e.target.value),
          className: "font-medium text-primary bg-primary bg-opacity-10 rounded h-input w-[90px] text-center outline-none text-base"
        }
      )
    ] })
  ] });
});

export {
  CustomizeColorInput
};
