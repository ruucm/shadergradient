import {
  esm_default,
  esm_default2,
  hexToHsva,
  hsvaToHex
} from "./chunk-FHHPRMGM.mjs";
import {
  useOnClickOutside
} from "./chunk-XLY254CY.mjs";

// src/components/FigmaPlugin/ColorInput.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var isValidHex = (color) => {
  if (!color || typeof color !== "string") return false;
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};
var getValidColorOrFallback = (color, fallback = "#000000") => {
  return isValidHex(color) ? color : fallback;
};
function ColorInput({
  defaultValue,
  setValue
}) {
  const [sharedValue, setSharedValue] = React.useState(defaultValue);
  const [isClicked, setIsClicked] = React.useState(false);
  const colorPickerRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  React.useEffect(() => {
    setSharedValue(defaultValue);
  }, []);
  React.useEffect(() => {
    setValue(sharedValue);
  }, [sharedValue]);
  React.useEffect(() => {
    setSharedValue(defaultValue);
  }, [defaultValue]);
  React.useEffect(() => {
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
  const updateColorWheelPosition = React.useCallback(() => {
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
  React.useEffect(() => {
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
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center w-full h-full flex-row gap-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 w-full relative h-full", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: triggerRef,
          className: "w-full h-[26px] rounded-md cursor-pointer",
          style: {
            background: getValidColorOrFallback(sharedValue),
            border: getValidColorOrFallback(sharedValue) === "#ffffff" ? "1px solid #F2F2F2" : "0px solid transparent"
          },
          onClick: () => {
            setIsClicked(!isClicked);
          }
        }
      ),
      /* @__PURE__ */ jsx(
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
                filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.10))"
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
                    radius: 4,
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
      )
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        value: sharedValue,
        onChange: (e) => setSharedValue(e.target.value),
        className: "w-[84px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center"
      }
    )
  ] });
}

export {
  ColorInput
};
