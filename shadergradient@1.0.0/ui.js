var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b ||= {})
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

// src/utils.ts
var cx = (...classes) => classes.filter((a2) => !!a2).join(" ");

// src/UI/Button.tsx
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

// src/UI/Card.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Card = () => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        background: "skyblue",
        padding: 20
      },
      children: [
        /* @__PURE__ */ jsx2(Button, { children: "Button in the card" }),
        "CAARD"
      ]
    }
  );
};

// src/UI/Spacing.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Spacing = (_a) => {
  var _b = _a, { guide = false, className = "w-3 h-3" } = _b, props = __objRest(_b, ["guide", "className"]);
  return /* @__PURE__ */ jsx3(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className,
      style: {
        position: "relative",
        background: "hsl(100, 37%, 79%)",
        opacity: "var(--guide-opacity)"
      },
      children: /* @__PURE__ */ jsx3(
        "div",
        {
          style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
            fontSize: "8px"
          },
          children: guide && className
        }
      )
    })
  );
};

// src/UI/Inputs/ColorInput/ColorInput.tsx
import * as React7 from "react";
import { useEffect as useEffect4, useState as useState2, useRef as useRef3 } from "react";

// ../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// ../../node_modules/.pnpm/@uiw+color-convert@1.1.1/node_modules/@uiw/color-convert/esm/utils.js
var validHex = (hex) => /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);

// ../../node_modules/.pnpm/@uiw+color-convert@1.1.1/node_modules/@uiw/color-convert/esm/index.js
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
    a: a2 ? a2 / RGB_MAX : 1
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
  return _extends({}, rgba, {
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

// ../../node_modules/.pnpm/@babel+runtime@7.19.4/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}

// ../../node_modules/.pnpm/@babel+runtime@7.19.4/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// ../../node_modules/.pnpm/@uiw+react-color-shade-slider@1.1.1_biqbaboplfbrettd7655fr4n2y/node_modules/@uiw/react-color-shade-slider/esm/index.js
import React4 from "react";

// ../../node_modules/.pnpm/@uiw+react-color-alpha@1.1.1_biqbaboplfbrettd7655fr4n2y/node_modules/@uiw/react-color-alpha/esm/index.js
import React3, { useCallback as useCallback3 } from "react";

// ../../node_modules/.pnpm/@uiw+react-drag-event-interactive@1.1.1_biqbaboplfbrettd7655fr4n2y/node_modules/@uiw/react-drag-event-interactive/esm/index.js
import React, { useRef as useRef2, useState, useCallback as useCallback2, useEffect as useEffect2 } from "react";

// ../../node_modules/.pnpm/@uiw+react-drag-event-interactive@1.1.1_biqbaboplfbrettd7655fr4n2y/node_modules/@uiw/react-drag-event-interactive/esm/utils.js
import { useRef, useEffect, useCallback } from "react";
function useEventCallback(handler) {
  var callbackRef = useRef(handler);
  useEffect(() => {
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

// ../../node_modules/.pnpm/@uiw+react-drag-event-interactive@1.1.1_biqbaboplfbrettd7655fr4n2y/node_modules/@uiw/react-drag-event-interactive/esm/index.js
import { jsx as _jsx } from "react/jsx-runtime";
var _excluded = ["prefixCls", "className", "onMove", "onDown"];
var Interactive = /* @__PURE__ */ React.forwardRef((props, ref) => {
  var {
    prefixCls = "w-color-interactive",
    className,
    onMove,
    onDown
  } = props, reset = _objectWithoutPropertiesLoose(props, _excluded);
  var container = useRef2(null);
  var hasTouched = useRef2(false);
  var [isDragging, setDragging] = useState(false);
  var onMoveCallback = useEventCallback(onMove);
  var onKeyCallback = useEventCallback(onDown);
  var isValid = (event) => {
    if (hasTouched.current && !isTouch(event))
      return false;
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
  useEffect2(() => {
    toggleDocumentEvents(isDragging);
    return () => {
      isDragging && toggleDocumentEvents(false);
    };
  }, [isDragging, toggleDocumentEvents]);
  var handleMoveStart = useCallback2((event) => {
    preventDefaultMove(event.nativeEvent);
    if (!isValid(event.nativeEvent))
      return;
    onKeyCallback && onKeyCallback(getRelativePosition(container.current, event.nativeEvent), event.nativeEvent);
    setDragging(true);
  }, [onKeyCallback]);
  return /* @__PURE__ */ _jsx("div", _extends2({}, reset, {
    className: [prefixCls, className || ""].filter(Boolean).join(" "),
    style: _extends2({}, reset.style, {
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

// ../../node_modules/.pnpm/@uiw+react-color-alpha@1.1.1_biqbaboplfbrettd7655fr4n2y/node_modules/@uiw/react-color-alpha/esm/Pointer.js
import React2 from "react";
import { useMemo } from "react";
import { jsx as _jsx2 } from "react/jsx-runtime";
var BOXSHADOW = "rgb(0 0 0 / 37%) 0px 1px 4px 0px";
var Pointer = (_ref) => {
  var {
    className,
    prefixCls,
    left,
    top
  } = _ref;
  var style = {
    position: "absolute",
    left,
    top
  };
  return useMemo(() => /* @__PURE__ */ _jsx2("div", {
    className: prefixCls + "-pointer " + (className || ""),
    style,
    children: /* @__PURE__ */ _jsx2("div", {
      className: prefixCls + "-fill",
      style: {
        width: 18,
        height: 18,
        transform: left ? "translate(-9px, -1px)" : "translate(-1px, -9px)",
        boxShadow: BOXSHADOW,
        borderRadius: "50%",
        backgroundColor: "rgb(248, 248, 248)"
      }
    })
  }), [className, left, top, prefixCls]);
};

// ../../node_modules/.pnpm/@uiw+react-color-alpha@1.1.1_biqbaboplfbrettd7655fr4n2y/node_modules/@uiw/react-color-alpha/esm/index.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var _excluded2 = ["prefixCls", "className", "hsva", "background", "bgProps", "innerProps", "radius", "width", "height", "direction", "style", "onChange", "pointer"];
var BACKGROUND_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==";
var Aplha = /* @__PURE__ */ React3.forwardRef((props, ref) => {
  var {
    prefixCls = "w-color-alpha",
    className,
    hsva,
    background,
    bgProps = {},
    innerProps = {},
    radius = 0,
    width,
    height = 16,
    direction = "horizontal",
    style,
    onChange,
    pointer
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  var handleChange = useCallback3((offset) => {
    onChange && onChange(_extends2({}, hsva, {
      a: direction === "horizontal" ? offset.left : offset.top
    }), offset);
  }, [hsva]);
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
  return /* @__PURE__ */ _jsxs("div", _extends2({}, other, {
    className: [prefixCls, prefixCls + "-" + direction, className || ""].filter(Boolean).join(" "),
    style: _extends2({
      borderRadius: radius,
      background: "url(" + BACKGROUND_IMG + ") left center",
      backgroundColor: "#fff"
    }, style, {
      position: "relative"
    }, {
      width,
      height
    }),
    ref,
    children: [/* @__PURE__ */ _jsx3("div", _extends2({}, bgProps, {
      style: _extends2({
        inset: 0,
        position: "absolute",
        background: background || innerBackground,
        borderRadius: radius
      }, bgProps.style)
    })), /* @__PURE__ */ _jsx3(esm_default, _extends2({}, innerProps, {
      style: _extends2({}, innerProps.style, {
        inset: 0,
        zIndex: 1,
        position: "absolute"
      }),
      onMove: handleChange,
      onDown: handleChange,
      children: /* @__PURE__ */ React3.createElement(pointer || Pointer, _extends2({
        prefixCls
      }, comProps))
    }))]
  }));
});
Aplha.displayName = "Aplha";
var esm_default2 = Aplha;

// ../../node_modules/.pnpm/@uiw+react-color-shade-slider@1.1.1_biqbaboplfbrettd7655fr4n2y/node_modules/@uiw/react-color-shade-slider/esm/index.js
import { jsx as _jsx4 } from "react/jsx-runtime";
var _excluded3 = ["prefixCls", "className", "onChange", "direction", "hsva"];
var ShadeSlider = /* @__PURE__ */ React4.forwardRef((props, ref) => {
  var {
    prefixCls = "w-color-saturation",
    className,
    onChange: _onChange,
    direction = "horizontal",
    hsva
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  var colorFrom = hsvaToHslaString(Object.assign({}, hsva, {
    a: 1,
    s: 100,
    v: 100
  }));
  return /* @__PURE__ */ _jsx4(esm_default2, _extends2({
    ref
  }, other, {
    className: prefixCls + " " + (className || ""),
    hsva: {
      h: hsva.h,
      s: 100,
      v: hsva.v,
      a: 1 - hsva.v / 100
    },
    direction,
    background: "linear-gradient(to " + (direction === "horizontal" ? "right" : "bottom") + ", " + colorFrom + ", rgb(0, 0, 0))",
    onChange: (_, interaction) => {
      _onChange && _onChange({
        v: direction === "horizontal" ? 100 - interaction.left * 100 : 100 - interaction.top * 100,
        s: 100
      });
    }
  }));
});
ShadeSlider.displayName = "ShadeSlider";
var esm_default3 = ShadeSlider;

// ../../node_modules/.pnpm/@uiw+react-color-wheel@1.1.1_biqbaboplfbrettd7655fr4n2y/node_modules/@uiw/react-color-wheel/esm/index.js
import React6 from "react";

// ../../node_modules/.pnpm/@uiw+react-color-wheel@1.1.1_biqbaboplfbrettd7655fr4n2y/node_modules/@uiw/react-color-wheel/esm/Pointer.js
import React5 from "react";
import { jsx as _jsx5 } from "react/jsx-runtime";
var BOXSHADOW2 = "rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px";
var Pointer2 = (_ref) => {
  var {
    className,
    color: color2,
    left,
    top,
    style,
    prefixCls
  } = _ref;
  var styleWarp = _extends2({}, style, {
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
        boxShadow: BOXSHADOW2,
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

// ../../node_modules/.pnpm/@uiw+react-color-wheel@1.1.1_biqbaboplfbrettd7655fr4n2y/node_modules/@uiw/react-color-wheel/esm/utils.js
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
  if (invert && direction === "clockwise")
    angle = wheelAngle + angle;
  else if (direction === "clockwise")
    angle = 360 - wheelAngle + angle;
  else if (invert && direction === "anticlockwise")
    angle = wheelAngle + 180 - angle;
  else if (direction === "anticlockwise")
    angle = wheelAngle - angle;
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

// ../../node_modules/.pnpm/@uiw+react-color-wheel@1.1.1_biqbaboplfbrettd7655fr4n2y/node_modules/@uiw/react-color-wheel/esm/index.js
import { jsx as _jsx6 } from "react/jsx-runtime";
import { jsxs as _jsxs2 } from "react/jsx-runtime";
var _excluded4 = ["prefixCls", "radius", "pointer", "className", "style", "width", "height", "direction", "angle", "color", "onChange"];
var HUE_GRADIENT_CLOCKWISE = "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)";
var HUE_GRADIENT_ANTICLOCKWISE = "conic-gradient(red, magenta, blue, aqua, lime, yellow, red)";
var Wheel = /* @__PURE__ */ React6.forwardRef((props, ref) => {
  var {
    prefixCls = "w-color-wheel",
    radius = 0,
    pointer,
    className,
    style,
    width = 200,
    height = 200,
    direction = "anticlockwise",
    angle = 180,
    color: color2,
    onChange
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
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
  return /* @__PURE__ */ _jsxs2(esm_default, _extends2({
    className: [prefixCls, className || ""].filter(Boolean).join(" ")
  }, other, {
    style: _extends2({}, style, {
      position: "relative",
      width,
      height
    }),
    ref,
    onMove: handleChange,
    onDown: handleChange,
    children: [/* @__PURE__ */ React6.createElement(pointer || Pointer2, _extends2({
      prefixCls,
      style: {
        zIndex: 1,
        transform: "translate(" + positions.x + "px, " + positions.y + "px)"
      }
    }, comProps)), /* @__PURE__ */ _jsx6("div", {
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

// src/UI/hooks/useOnClickOutside.ts
import { useEffect as useEffect3 } from "react";
function useOnClickOutside(ref, handler) {
  useEffect3(() => {
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

// src/UI/Inputs/ColorInput/ColorInput.tsx
import { Fragment, jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var ColorInput = React7.forwardRef(
  ({ label = "", defaultValue, setValue }, ref) => {
    const [sharedValue, setSharedValue] = useState2(defaultValue);
    const [toggle, setToggle] = useState2(false);
    useEffect4(() => {
      setSharedValue(defaultValue);
    }, [defaultValue]);
    useEffect4(() => {
      setValue(sharedValue);
    }, [sharedValue]);
    const tabRef = useRef3(null);
    useOnClickOutside(tabRef, () => setToggle(false));
    return /* @__PURE__ */ jsxs2("div", { className: "flex items-center", children: [
      label && /* @__PURE__ */ jsxs2(Fragment, { children: [
        /* @__PURE__ */ jsx4("label", { className: "font-semibold text-primary text-base", children: label }),
        /* @__PURE__ */ jsx4(Spacing, { className: "w-2" })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2 w-full relative", children: [
        /* @__PURE__ */ jsx4(
          "div",
          {
            className: "w-full h-input rounded",
            style: { background: sharedValue },
            onClick: () => {
              setToggle(!toggle);
            }
          }
        ),
        /* @__PURE__ */ jsx4(
          "div",
          {
            ref: tabRef,
            style: {
              width: "fit-content",
              height: 290,
              position: "absolute",
              bottom: 10,
              left: 80,
              zIndex: 100,
              background: "blue",
              display: toggle === true ? "block" : "none"
            },
            children: /* @__PURE__ */ jsxs2(
              "div",
              {
                style: {
                  position: "fixed",
                  display: "flex",
                  width: "fit-content",
                  height: "fit-content",
                  background: "white",
                  padding: 24,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                  borderRadius: 5,
                  boxShadow: "rgb(0 0 0 / 37%) 0px 1px 4px 0px"
                },
                children: [
                  /* @__PURE__ */ jsx4(
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
                  /* @__PURE__ */ jsx4(
                    esm_default3,
                    {
                      width: 200,
                      style: { display: "flex", alignItems: "center" },
                      hsva: hexToHsva(sharedValue),
                      onChange: (color2) => {
                        setSharedValue(
                          hsvaToHex({
                            h: hexToHsva(sharedValue).h,
                            s: color2.s,
                            v: color2.v,
                            a: 1
                          })
                        );
                      }
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsx4(
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
  }
);

// src/UI/Inputs/NumberInput/NumberInput.tsx
import React8 from "react";
import { motion } from "framer-motion";
import { Fragment as Fragment2, jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var NumberInput = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label = null,
      value,
      setValue = () => void 0,
      arrow = false,
      step = 0
    } = _b, inputProps = __objRest(_b, [
      "label",
      "value",
      "setValue",
      "arrow",
      "step"
    ]);
    return /* @__PURE__ */ jsxs3("div", { className: "flex items-center", children: [
      label && /* @__PURE__ */ jsxs3(Fragment2, { children: [
        /* @__PURE__ */ jsx5("label", { className: "font-semibold text-primary text-base", children: label }),
        /* @__PURE__ */ jsx5(Spacing, { className: "w-2" })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "bg-primary bg-opacity-10 flex flex-row w-fit h-fit rounded items-center", children: [
        /* @__PURE__ */ jsx5(
          "input",
          __spreadValues({
            type: "number",
            className: "font-medium text-primary bg-transparent h-input w-control-number-input text-center outline-none text-base",
            ref,
            value,
            onChange: (e) => setValue(e.target.value),
            step
          }, inputProps)
        ),
        arrow === true && /* @__PURE__ */ jsxs3(
          "div",
          {
            className: "h-input flex flex-col text-primary justify-start items-center w-1",
            style: { marginRight: 8, marginLeft: -5 },
            children: [
              /* @__PURE__ */ jsx5(
                motion.div,
                {
                  className: "h-[50%] w-fit cursor-pointer flex items-center",
                  onClick: () => {
                    setValue(value + step);
                  },
                  initial: { opacity: 0.5 },
                  whileHover: { opacity: 1 },
                  children: /* @__PURE__ */ jsx5("svg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "8", children: /* @__PURE__ */ jsx5(
                    "path",
                    {
                      d: "M 4.468 2.048 C 4.306 1.616 3.694 1.616 3.532 2.048 L 1.853 6.524 C 1.731 6.851 1.972 7.2 2.322 7.2 L 4 7.2 L 4 7.2 L 5.678 7.2 C 6.028 7.2 6.269 6.851 6.147 6.524 Z",
                      fill: "rgb(255, 67, 10)"
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ jsx5(
                motion.div,
                {
                  className: "h-[50%] w-fit cursor-pointer flex items-center",
                  onClick: () => {
                    setValue(value - step);
                  },
                  initial: { opacity: 0.5 },
                  whileHover: { opacity: 1 },
                  children: /* @__PURE__ */ jsx5("svg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "8", children: /* @__PURE__ */ jsx5(
                    "path",
                    {
                      d: "M 2.868 1.248 C 2.706 0.816 2.094 0.816 1.932 1.248 L 0.253 5.724 C 0.131 6.051 0.372 6.4 0.722 6.4 L 4.078 6.4 C 4.428 6.4 4.669 6.051 4.547 5.724 Z",
                      transform: "translate(1.6 0.8) rotate(180 2.4 3.2)",
                      fill: "rgb(255, 67, 10)"
                    }
                  ) })
                }
              )
            ]
          }
        )
      ] })
    ] });
  }
);

// src/UI/Inputs/Slider.tsx
import * as React9 from "react";
import { useEffect as useEffect5, useState as useState3 } from "react";

// ../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o2, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf(o2, p2);
}

// ../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// ../../node_modules/.pnpm/react-slider@2.0.4_react@18.2.0/node_modules/react-slider/dist/es/prod/components/ReactSlider/ReactSlider.mjs
import t from "react";
function s(e) {
  return e && e.stopPropagation && e.stopPropagation(), e && e.preventDefault && e.preventDefault(), false;
}
function n(e) {
  return null == e ? [] : Array.isArray(e) ? e.slice() : [e];
}
function i(e) {
  return null !== e && 1 === e.length ? e[0] : e.slice();
}
function o(e) {
  Object.keys(e).forEach((t2) => {
    "undefined" != typeof document && document.addEventListener(t2, e[t2], false);
  });
}
function r(e, t2) {
  return a(function(e2, t3) {
    let s2 = e2;
    s2 <= t3.min && (s2 = t3.min);
    s2 >= t3.max && (s2 = t3.max);
    return s2;
  }(e, t2), t2);
}
function a(e, t2) {
  const s2 = (e - t2.min) % t2.step;
  let n2 = e - s2;
  return 2 * Math.abs(s2) >= t2.step && (n2 += s2 > 0 ? t2.step : -t2.step), parseFloat(n2.toFixed(5));
}
var p = function(p2) {
  function u2(e) {
    var a2;
    (a2 = p2.call(this, e) || this).onKeyUp = () => {
      a2.onEnd();
    }, a2.onMouseUp = () => {
      a2.onEnd(a2.getMouseEventMap());
    }, a2.onTouchEnd = () => {
      a2.onEnd(a2.getTouchEventMap());
    }, a2.onBlur = () => {
      a2.setState({ index: -1 }, a2.onEnd(a2.getKeyDownEventMap()));
    }, a2.onMouseMove = (e2) => {
      a2.setState({ pending: true });
      const t2 = a2.getMousePosition(e2), s2 = a2.getDiffPosition(t2[0]), n2 = a2.getValueFromPosition(s2);
      a2.move(n2);
    }, a2.onTouchMove = (e2) => {
      if (e2.touches.length > 1)
        return;
      a2.setState({ pending: true });
      const t2 = a2.getTouchPosition(e2);
      if (void 0 === a2.isScrolling) {
        const e3 = t2[0] - a2.startPosition[0], s3 = t2[1] - a2.startPosition[1];
        a2.isScrolling = Math.abs(s3) > Math.abs(e3);
      }
      if (a2.isScrolling)
        return void a2.setState({ index: -1 });
      const s2 = a2.getDiffPosition(t2[0]), n2 = a2.getValueFromPosition(s2);
      a2.move(n2);
    }, a2.onKeyDown = (e2) => {
      if (!(e2.ctrlKey || e2.shiftKey || e2.altKey || e2.metaKey))
        switch (a2.setState({ pending: true }), e2.key) {
          case "ArrowLeft":
          case "ArrowDown":
          case "Left":
          case "Down":
            e2.preventDefault(), a2.moveDownByStep();
            break;
          case "ArrowRight":
          case "ArrowUp":
          case "Right":
          case "Up":
            e2.preventDefault(), a2.moveUpByStep();
            break;
          case "Home":
            e2.preventDefault(), a2.move(a2.props.min);
            break;
          case "End":
            e2.preventDefault(), a2.move(a2.props.max);
            break;
          case "PageDown":
            e2.preventDefault(), a2.moveDownByStep(a2.props.pageFn(a2.props.step));
            break;
          case "PageUp":
            e2.preventDefault(), a2.moveUpByStep(a2.props.pageFn(a2.props.step));
        }
    }, a2.onSliderMouseDown = (e2) => {
      if (!a2.props.disabled && 2 !== e2.button) {
        if (a2.setState({ pending: true }), !a2.props.snapDragDisabled) {
          const t2 = a2.getMousePosition(e2);
          a2.forceValueFromPosition(t2[0], (e3) => {
            a2.start(e3, t2[0]), o(a2.getMouseEventMap());
          });
        }
        s(e2);
      }
    }, a2.onSliderClick = (e2) => {
      if (!a2.props.disabled && a2.props.onSliderClick && !a2.hasMoved) {
        const t2 = a2.getMousePosition(e2), s2 = r(a2.calcValue(a2.calcOffsetFromPosition(t2[0])), a2.props);
        a2.props.onSliderClick(s2);
      }
    }, a2.createOnKeyDown = (e2) => (t2) => {
      a2.props.disabled || (a2.start(e2), o(a2.getKeyDownEventMap()), s(t2));
    }, a2.createOnMouseDown = (e2) => (t2) => {
      if (a2.props.disabled || 2 === t2.button)
        return;
      a2.setState({ pending: true });
      const n2 = a2.getMousePosition(t2);
      a2.start(e2, n2[0]), o(a2.getMouseEventMap()), s(t2);
    }, a2.createOnTouchStart = (e2) => (t2) => {
      if (a2.props.disabled || t2.touches.length > 1)
        return;
      a2.setState({ pending: true });
      const s2 = a2.getTouchPosition(t2);
      a2.startPosition = s2, a2.isScrolling = void 0, a2.start(e2, s2[0]), o(a2.getTouchEventMap()), function(e3) {
        e3.stopPropagation && e3.stopPropagation();
      }(t2);
    }, a2.handleResize = () => {
      const e2 = window.setTimeout(() => {
        a2.pendingResizeTimeouts.shift(), a2.resize();
      }, 0);
      a2.pendingResizeTimeouts.push(e2);
    }, a2.renderThumb = (e2, t2) => {
      const s2 = a2.props.thumbClassName + " " + a2.props.thumbClassName + "-" + t2 + " " + (a2.state.index === t2 ? a2.props.thumbActiveClassName : ""), n2 = { ref: (e3) => {
        a2["thumb" + t2] = e3;
      }, key: a2.props.thumbClassName + "-" + t2, className: s2, style: e2, onMouseDown: a2.createOnMouseDown(t2), onTouchStart: a2.createOnTouchStart(t2), onFocus: a2.createOnKeyDown(t2), tabIndex: 0, role: "slider", "aria-orientation": a2.props.orientation, "aria-valuenow": a2.state.value[t2], "aria-valuemin": a2.props.min, "aria-valuemax": a2.props.max, "aria-label": Array.isArray(a2.props.ariaLabel) ? a2.props.ariaLabel[t2] : a2.props.ariaLabel, "aria-labelledby": Array.isArray(a2.props.ariaLabelledby) ? a2.props.ariaLabelledby[t2] : a2.props.ariaLabelledby }, o2 = { index: t2, value: i(a2.state.value), valueNow: a2.state.value[t2] };
      return a2.props.ariaValuetext && (n2["aria-valuetext"] = "string" == typeof a2.props.ariaValuetext ? a2.props.ariaValuetext : a2.props.ariaValuetext(o2)), a2.props.renderThumb(n2, o2);
    }, a2.renderTrack = (e2, t2, s2) => {
      const n2 = { key: a2.props.trackClassName + "-" + e2, className: a2.props.trackClassName + " " + a2.props.trackClassName + "-" + e2, style: a2.buildTrackStyle(t2, a2.state.upperBound - s2) }, o2 = { index: e2, value: i(a2.state.value) };
      return a2.props.renderTrack(n2, o2);
    };
    let u3 = n(e.value);
    u3.length || (u3 = n(e.defaultValue)), a2.pendingResizeTimeouts = [];
    const h2 = [];
    for (let t2 = 0; t2 < u3.length; t2 += 1)
      u3[t2] = r(u3[t2], e), h2.push(t2);
    return a2.resizeObserver = null, a2.resizeElementRef = t.createRef(), a2.state = { index: -1, upperBound: 0, sliderLength: 0, value: u3, zIndices: h2 }, a2;
  }
  _inheritsLoose(u2, p2);
  var h = u2.prototype;
  return h.componentDidMount = function() {
    "undefined" != typeof window && (this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(this.resizeElementRef.current), this.resize());
  }, u2.getDerivedStateFromProps = function(e, t2) {
    const s2 = n(e.value);
    return s2.length ? t2.pending ? null : { value: s2.map((t3) => r(t3, e)) } : null;
  }, h.componentDidUpdate = function() {
    0 === this.state.upperBound && this.resize();
  }, h.componentWillUnmount = function() {
    this.clearPendingResizeTimeouts(), this.resizeObserver && this.resizeObserver.disconnect();
  }, h.onEnd = function(e) {
    e && function(e2) {
      Object.keys(e2).forEach((t2) => {
        "undefined" != typeof document && document.removeEventListener(t2, e2[t2], false);
      });
    }(e), this.hasMoved && this.fireChangeEvent("onAfterChange"), this.setState({ pending: false }), this.hasMoved = false;
  }, h.getValue = function() {
    return i(this.state.value);
  }, h.getClosestIndex = function(e) {
    let t2 = Number.MAX_VALUE, s2 = -1;
    const { value: n2 } = this.state, i2 = n2.length;
    for (let o2 = 0; o2 < i2; o2 += 1) {
      const i3 = this.calcOffset(n2[o2]), r2 = Math.abs(e - i3);
      r2 < t2 && (t2 = r2, s2 = o2);
    }
    return s2;
  }, h.getMousePosition = function(e) {
    return [e["page" + this.axisKey()], e["page" + this.orthogonalAxisKey()]];
  }, h.getTouchPosition = function(e) {
    const t2 = e.touches[0];
    return [t2["page" + this.axisKey()], t2["page" + this.orthogonalAxisKey()]];
  }, h.getKeyDownEventMap = function() {
    return { keydown: this.onKeyDown, keyup: this.onKeyUp, focusout: this.onBlur };
  }, h.getMouseEventMap = function() {
    return { mousemove: this.onMouseMove, mouseup: this.onMouseUp };
  }, h.getTouchEventMap = function() {
    return { touchmove: this.onTouchMove, touchend: this.onTouchEnd };
  }, h.getValueFromPosition = function(e) {
    const t2 = e / (this.state.sliderLength - this.state.thumbSize) * (this.props.max - this.props.min);
    return r(this.state.startValue + t2, this.props);
  }, h.getDiffPosition = function(e) {
    let t2 = e - this.state.startPosition;
    return this.props.invert && (t2 *= -1), t2;
  }, h.resize = function() {
    const { slider: e, thumb0: t2 } = this;
    if (!e || !t2)
      return;
    const s2 = this.sizeKey(), n2 = e.getBoundingClientRect(), i2 = e[s2], o2 = n2[this.posMaxKey()], r2 = n2[this.posMinKey()], a2 = t2.getBoundingClientRect()[s2.replace("client", "").toLowerCase()], p3 = i2 - a2, u3 = Math.abs(o2 - r2);
    this.state.upperBound === p3 && this.state.sliderLength === u3 && this.state.thumbSize === a2 || this.setState({ upperBound: p3, sliderLength: u3, thumbSize: a2 });
  }, h.calcOffset = function(e) {
    const t2 = this.props.max - this.props.min;
    if (0 === t2)
      return 0;
    return (e - this.props.min) / t2 * this.state.upperBound;
  }, h.calcValue = function(e) {
    return e / this.state.upperBound * (this.props.max - this.props.min) + this.props.min;
  }, h.calcOffsetFromPosition = function(e) {
    const { slider: t2 } = this, s2 = t2.getBoundingClientRect(), n2 = s2[this.posMaxKey()], i2 = s2[this.posMinKey()];
    let o2 = e - (window["page" + this.axisKey() + "Offset"] + (this.props.invert ? n2 : i2));
    return this.props.invert && (o2 = this.state.sliderLength - o2), o2 -= this.state.thumbSize / 2, o2;
  }, h.forceValueFromPosition = function(e, t2) {
    const s2 = this.calcOffsetFromPosition(e), n2 = this.getClosestIndex(s2), i2 = r(this.calcValue(s2), this.props), o2 = this.state.value.slice();
    o2[n2] = i2;
    for (let e2 = 0; e2 < o2.length - 1; e2 += 1)
      if (o2[e2 + 1] - o2[e2] < this.props.minDistance)
        return;
    this.fireChangeEvent("onBeforeChange"), this.hasMoved = true, this.setState({ value: o2 }, () => {
      t2(n2), this.fireChangeEvent("onChange");
    });
  }, h.clearPendingResizeTimeouts = function() {
    do {
      const e = this.pendingResizeTimeouts.shift();
      clearTimeout(e);
    } while (this.pendingResizeTimeouts.length);
  }, h.start = function(e, t2) {
    const s2 = this["thumb" + e];
    s2 && s2.focus();
    const { zIndices: n2 } = this.state;
    n2.splice(n2.indexOf(e), 1), n2.push(e), this.setState((s3) => ({ startValue: s3.value[e], startPosition: void 0 !== t2 ? t2 : s3.startPosition, index: e, zIndices: n2 }));
  }, h.moveUpByStep = function(e) {
    void 0 === e && (e = this.props.step);
    const t2 = r(this.state.value[this.state.index] + e, this.props);
    this.move(Math.min(t2, this.props.max));
  }, h.moveDownByStep = function(e) {
    void 0 === e && (e = this.props.step);
    const t2 = r(this.state.value[this.state.index] - e, this.props);
    this.move(Math.max(t2, this.props.min));
  }, h.move = function(e) {
    const { index: t2, value: s2 } = this.state, { length: n2 } = s2, i2 = s2[t2];
    if (e === i2)
      return;
    this.hasMoved || this.fireChangeEvent("onBeforeChange"), this.hasMoved = true;
    const { pearling: o2, max: r2, min: a2, minDistance: p3 } = this.props;
    if (!o2) {
      if (t2 > 0) {
        const n3 = s2[t2 - 1];
        e < n3 + p3 && (e = n3 + p3);
      }
      if (t2 < n2 - 1) {
        const n3 = s2[t2 + 1];
        e > n3 - p3 && (e = n3 - p3);
      }
    }
    s2[t2] = e, o2 && n2 > 1 && (e > i2 ? (this.pushSucceeding(s2, p3, t2), function(e2, t3, s3, n3) {
      for (let i3 = 0; i3 < e2; i3 += 1) {
        const o3 = n3 - i3 * s3;
        t3[e2 - 1 - i3] > o3 && (t3[e2 - 1 - i3] = o3);
      }
    }(n2, s2, p3, r2)) : e < i2 && (this.pushPreceding(s2, p3, t2), function(e2, t3, s3, n3) {
      for (let i3 = 0; i3 < e2; i3 += 1) {
        const e3 = n3 + i3 * s3;
        t3[i3] < e3 && (t3[i3] = e3);
      }
    }(n2, s2, p3, a2))), this.setState({ value: s2 }, this.fireChangeEvent.bind(this, "onChange"));
  }, h.pushSucceeding = function(e, t2, s2) {
    let n2, i2;
    for (n2 = s2, i2 = e[n2] + t2; null !== e[n2 + 1] && i2 > e[n2 + 1]; n2 += 1, i2 = e[n2] + t2)
      e[n2 + 1] = a(i2, this.props);
  }, h.pushPreceding = function(e, t2, s2) {
    for (let n2 = s2, i2 = e[n2] - t2; null !== e[n2 - 1] && i2 < e[n2 - 1]; n2 -= 1, i2 = e[n2] - t2)
      e[n2 - 1] = a(i2, this.props);
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
  }, h.fireChangeEvent = function(e) {
    this.props[e] && this.props[e](i(this.state.value), this.state.index);
  }, h.buildThumbStyle = function(e, t2) {
    const s2 = { position: "absolute", touchAction: "none", willChange: this.state.index >= 0 ? this.posMinKey() : void 0, zIndex: this.state.zIndices.indexOf(t2) + 1 };
    return s2[this.posMinKey()] = e + "px", s2;
  }, h.buildTrackStyle = function(e, t2) {
    const s2 = { position: "absolute", willChange: this.state.index >= 0 ? this.posMinKey() + "," + this.posMaxKey() : void 0 };
    return s2[this.posMinKey()] = e, s2[this.posMaxKey()] = t2, s2;
  }, h.buildMarkStyle = function(e) {
    var t2;
    return (t2 = { position: "absolute" })[this.posMinKey()] = e, t2;
  }, h.renderThumbs = function(e) {
    const { length: t2 } = e, s2 = [];
    for (let n3 = 0; n3 < t2; n3 += 1)
      s2[n3] = this.buildThumbStyle(e[n3], n3);
    const n2 = [];
    for (let e2 = 0; e2 < t2; e2 += 1)
      n2[e2] = this.renderThumb(s2[e2], e2);
    return n2;
  }, h.renderTracks = function(e) {
    const t2 = [], s2 = e.length - 1;
    t2.push(this.renderTrack(0, 0, e[0]));
    for (let n2 = 0; n2 < s2; n2 += 1)
      t2.push(this.renderTrack(n2 + 1, e[n2], e[n2 + 1]));
    return t2.push(this.renderTrack(s2 + 1, e[s2], this.state.upperBound)), t2;
  }, h.renderMarks = function() {
    let { marks: e } = this.props;
    const t2 = this.props.max - this.props.min + 1;
    return "boolean" == typeof e ? e = Array.from({ length: t2 }).map((e2, t3) => t3) : "number" == typeof e && (e = Array.from({ length: t2 }).map((e2, t3) => t3).filter((t3) => t3 % e == 0)), e.map(parseFloat).sort((e2, t3) => e2 - t3).map((e2) => {
      const t3 = this.calcOffset(e2), s2 = { key: e2, className: this.props.markClassName, style: this.buildMarkStyle(t3) };
      return this.props.renderMark(s2);
    });
  }, h.render = function() {
    const e = [], { value: s2 } = this.state, n2 = s2.length;
    for (let t2 = 0; t2 < n2; t2 += 1)
      e[t2] = this.calcOffset(s2[t2], t2);
    const i2 = this.props.withTracks ? this.renderTracks(e) : null, o2 = this.renderThumbs(e), r2 = this.props.marks ? this.renderMarks() : null;
    return t.createElement("div", { ref: (e2) => {
      this.slider = e2, this.resizeElementRef.current = e2;
    }, style: { position: "relative" }, className: this.props.className + (this.props.disabled ? " disabled" : ""), onMouseDown: this.onSliderMouseDown, onClick: this.onSliderClick }, i2, o2, r2);
  }, u2;
}(t.Component);
p.displayName = "ReactSlider", p.defaultProps = { min: 0, max: 100, step: 1, pageFn: (e) => 10 * e, minDistance: 0, defaultValue: 0, orientation: "horizontal", className: "slider", thumbClassName: "thumb", thumbActiveClassName: "active", trackClassName: "track", markClassName: "mark", withTracks: true, pearling: false, disabled: false, snapDragDisabled: false, invert: false, marks: [], renderThumb: (e) => t.createElement("div", e), renderTrack: (e) => t.createElement("div", e), renderMark: (e) => t.createElement("span", e) };
var u = p;

// src/UI/Inputs/Slider.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var Slider = React9.forwardRef(
  ({ defaultValue, setValue, step, min, max }, ref) => {
    const [sharedValue, setSharedValue] = useState3(defaultValue);
    useEffect5(() => {
      setSharedValue(defaultValue);
    }, [defaultValue]);
    useEffect5(() => {
      setValue(sharedValue);
    }, [sharedValue]);
    return /* @__PURE__ */ jsxs4("div", { className: "flex items-center w-full", children: [
      /* @__PURE__ */ jsx6(
        NumberInput,
        {
          value: sharedValue,
          setValue: setSharedValue,
          step
        }
      ),
      /* @__PURE__ */ jsx6(Spacing, { className: "w-4" }),
      /* @__PURE__ */ jsx6(
        u,
        {
          value: Number(sharedValue),
          step,
          min,
          max,
          onChange: (value, index) => setSharedValue(value),
          className: "bg-primary h-slider w-full",
          marks: [(min + max) / 2],
          markClassName: "w-mark h-mark bg-primary top-1/2 transform -translate-y-1/2 slider-mark-center-x",
          thumbClassName: "bg-primary w-thumb h-thumb rounded-full top-1/2 transform -translate-y-1/2 outline-none cursor-pointer",
          thumbActiveClassName: "bg-opacity-80"
        }
      )
    ] });
  }
);

// src/UI/Inputs/Radio.tsx
import * as React10 from "react";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var Radio = React10.forwardRef(
  ({ label, check, setValue, value, name }, ref) => {
    return /* @__PURE__ */ jsxs5(
      "label",
      {
        className: cx(
          "flex justify-center items-center w-full h-input text-primary rounded cursor-pointer bg-primary hover:bg-opacity-10",
          check ? "bg-opacity-10" : "bg-opacity-0"
        ),
        htmlFor: value,
        children: [
          /* @__PURE__ */ jsx7(
            "input",
            {
              name,
              value,
              type: "radio",
              id: value,
              className: "absolute inline-block opacity-0 cursor-pointer",
              onChange: (e) => setValue(e.target.value)
            }
          ),
          /* @__PURE__ */ jsx7("span", { className: "text-base font-medium", children: label || value })
        ]
      }
    );
  }
);

// src/UI/HoverBox/HoverBox.tsx
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var HoverBox = (_a) => {
  var _b = _a, {
    content,
    onClick,
    isHovered,
    centered = false,
    downward = true
  } = _b, rest = __objRest(_b, [
    "content",
    "onClick",
    "isHovered",
    "centered",
    "downward"
  ]);
  return /* @__PURE__ */ jsx8(
    "div",
    {
      className: cx("text-sm font-medium text-white"),
      style: {
        position: "fixed",
        marginLeft: centered === true ? 0 : -10,
        visibility: isHovered ? "visible" : "hidden",
        marginTop: isHovered ? 10 : 0,
        transitionDuration: "0.3s",
        opacity: isHovered ? 1 : 0
      },
      children: /* @__PURE__ */ jsxs6(
        "div",
        {
          style: {
            maxWidth: 230,
            width: "fit-content",
            height: "fit-content"
          },
          children: [
            /* @__PURE__ */ jsx8(
              "div",
              {
                className: cx("bg-primary"),
                style: {
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: 3,
                  opacity: 0.8,
                  zIndex: 0
                },
                children: /* @__PURE__ */ jsx8(
                  "div",
                  {
                    className: cx("bg-primary"),
                    style: {
                      width: 17,
                      height: 17,
                      background: "rgb(255, 67, 10)",
                      transform: "rotate(45deg)",
                      position: "absolute",
                      left: centered === true ? "calc(50% - 15px)" : 12,
                      top: -7,
                      borderRadius: 3
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx8("p", { style: { padding: 8, zIndex: 20, position: "relative" }, children: content })
          ]
        }
      )
    }
  );
};

// src/UI/HoverBox/IconHoverBox.tsx
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var IconHoverBox = (_a) => {
  var _b = _a, {
    content,
    isHovered,
    bottom = 75
  } = _b, rest = __objRest(_b, [
    "content",
    "isHovered",
    "bottom"
  ]);
  return /* @__PURE__ */ jsx9(
    "div",
    {
      className: cx("text-sm font-medium text-white"),
      style: {
        position: "absolute",
        display: "flex",
        visibility: isHovered ? "visible" : "hidden",
        justifyContent: "center",
        marginBottom: isHovered ? bottom + 10 : bottom,
        transitionDuration: "0.3s",
        opacity: isHovered ? 1 : 0
      },
      children: /* @__PURE__ */ jsxs7(
        "div",
        {
          style: {
            width: "fit-content",
            height: "fit-content"
          },
          children: [
            /* @__PURE__ */ jsx9(
              "div",
              {
                className: cx("bg-primary"),
                style: {
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: 3,
                  opacity: 0.8,
                  zIndex: 0,
                  paddingTop: 22,
                  display: "flex",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */ jsx9(
                  "div",
                  {
                    className: cx("bg-primary"),
                    style: {
                      width: 17,
                      height: 17,
                      background: "rgb(255, 67, 10)",
                      transform: "rotate(45deg)",
                      margin: "0 auto",
                      borderRadius: 3
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx9(
              "p",
              {
                style: {
                  padding: 8,
                  zIndex: 20,
                  position: "relative",
                  whiteSpace: "nowrap"
                },
                children: content
              }
            )
          ]
        }
      )
    }
  );
};

// src/UI/HoverBox/TextHoverBox.tsx
import * as React11 from "react";
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var TextHoverBox = (_a) => {
  var _b = _a, {
    content,
    link = null,
    text,
    tag = null
  } = _b, rest = __objRest(_b, [
    "content",
    "link",
    "text",
    "tag"
  ]);
  const [isHovered, setIsHovered] = React11.useState(false);
  return /* @__PURE__ */ jsxs8(
    "div",
    {
      onMouseOver: () => {
        setIsHovered(true);
      },
      onMouseLeave: () => {
        setIsHovered(false);
      },
      style: {
        position: "relative",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "end",
        height: "fit-content"
      },
      children: [
        /* @__PURE__ */ jsx10(
          "div",
          {
            className: cx("text-sm font-medium text-white"),
            style: {
              position: "absolute",
              display: "flex",
              visibility: isHovered ? "visible" : "hidden",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: isHovered ? 30 : 20,
              transitionDuration: "0.3s",
              opacity: isHovered ? 1 : 0
            },
            children: /* @__PURE__ */ jsxs8(
              "div",
              {
                style: {
                  width: "fit-content",
                  height: "fit-content"
                },
                children: [
                  /* @__PURE__ */ jsx10(
                    "div",
                    {
                      className: cx("bg-primary"),
                      style: {
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderRadius: 3,
                        opacity: 0.8,
                        zIndex: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end"
                      },
                      children: /* @__PURE__ */ jsx10(
                        "div",
                        {
                          className: cx("bg-primary"),
                          style: {
                            width: 17,
                            height: 17,
                            transform: "rotate(45deg)",
                            borderRadius: 3,
                            marginBottom: -5
                          }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxs8(
                    "p",
                    {
                      className: "text-center",
                      style: {
                        padding: 8,
                        zIndex: 20,
                        position: "relative",
                        width: "max-content",
                        maxWidth: "200px"
                      },
                      children: [
                        content,
                        tag !== null && /* @__PURE__ */ jsxs8(
                          "span",
                          {
                            className: "text-xs text-center",
                            style: { color: "lightgrey", lineHeight: 0.6 },
                            children: [
                              /* @__PURE__ */ jsx10("br", {}),
                              tag
                            ]
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsx10(
          "p",
          {
            className: "text-primary",
            style: {
              textDecoration: "underline",
              cursor: "pointer"
            },
            children: /* @__PURE__ */ jsx10("a", { href: link, children: text })
          }
        )
      ]
    }
  );
};
export {
  Button,
  Card,
  ColorInput,
  HoverBox,
  IconHoverBox,
  NumberInput,
  Radio,
  Slider,
  Spacing,
  TextHoverBox
};
