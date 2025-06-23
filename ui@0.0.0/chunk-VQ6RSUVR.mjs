import {
  useOnClickOutside
} from "./chunk-HNS6MPBX.mjs";

// src/components/FigmaPlugin/ColorInput.tsx
import * as React7 from "react";

// ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// ../../node_modules/.pnpm/@uiw+color-convert@1.4.3_@babel+runtime@7.27.0/node_modules/@uiw/color-convert/esm/utils.js
var validHex = (hex) => /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);

// ../../node_modules/.pnpm/@uiw+color-convert@1.4.3_@babel+runtime@7.27.0/node_modules/@uiw/color-convert/esm/index.js
var RGB_MAX = 255;
var HUE_MAX = 360;
var SV_MAX = 100;
var rgbaToHsva = (_ref) => {
  var {
    r,
    g,
    b,
    a
  } = _ref;
  var max = Math.max(r, g, b);
  var delta = max - Math.min(r, g, b);
  var hh = delta ? max === r ? (g - b) / delta : max === g ? 2 + (b - r) / delta : 4 + (r - g) / delta : 0;
  return {
    h: 60 * (hh < 0 ? hh + 6 : hh),
    s: max ? delta / max * SV_MAX : 0,
    v: max / RGB_MAX * SV_MAX,
    a
  };
};
var hsvaToHslaString = (hsva) => {
  var {
    h,
    s,
    l,
    a
  } = hsvaToHsla(hsva);
  return "hsla(" + h + ", " + s + "%, " + l + "%, " + a + ")";
};
var hsvaToHsla = (_ref5) => {
  var {
    h,
    s,
    v,
    a
  } = _ref5;
  var hh = (200 - s) * v / SV_MAX;
  return {
    h,
    s: hh > 0 && hh < 200 ? s * v / SV_MAX / (hh <= SV_MAX ? hh : 200 - hh) * SV_MAX : 0,
    l: hh / 2,
    a
  };
};
var angleUnits = {
  grad: HUE_MAX / 400,
  turn: HUE_MAX,
  rad: HUE_MAX / (Math.PI * 2)
};
var rgbaToHex = (_ref6) => {
  var {
    r,
    g,
    b
  } = _ref6;
  var bin = r << 16 | g << 8 | b;
  return "#" + ((h) => new Array(7 - h.length).join("0") + h)(bin.toString(16));
};
var rgbaToHexa = (_ref7) => {
  var {
    r,
    g,
    b,
    a
  } = _ref7;
  var alpha = typeof a === "number" && (a * 255 | 1 << 8).toString(16).slice(1);
  return "" + rgbaToHex({
    r,
    g,
    b,
    a
  }) + (alpha ? alpha : "");
};
var hexToHsva = (hex) => rgbaToHsva(hexToRgba(hex));
var hexToRgba = (hex) => {
  var htemp = hex.replace("#", "");
  if (/^#?/.test(hex) && htemp.length === 3) {
    hex = "#" + htemp.charAt(0) + htemp.charAt(0) + htemp.charAt(1) + htemp.charAt(1) + htemp.charAt(2) + htemp.charAt(2);
  }
  var reg = new RegExp("[A-Za-z0-9]{2}", "g");
  var [r, g, b = 0, a] = hex.match(reg).map((v) => parseInt(v, 16));
  return {
    r,
    g,
    b,
    a: (a != null ? a : 255) / RGB_MAX
  };
};
var hsvaToRgba = (_ref8) => {
  var {
    h,
    s,
    v,
    a
  } = _ref8;
  var _h = h / 60, _s = s / SV_MAX, _v = v / SV_MAX, hi = Math.floor(_h) % 6;
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
    a
  });
};
var rgbaToRgb = (_ref9) => {
  var {
    r,
    g,
    b
  } = _ref9;
  return {
    r,
    g,
    b
  };
};
var hslaToHsl = (_ref10) => {
  var {
    h,
    s,
    l
  } = _ref10;
  return {
    h,
    s,
    l
  };
};
var hsvaToHex = (hsva) => rgbaToHex(hsvaToRgba(hsva));
var hsvaToHsv = (_ref11) => {
  var {
    h,
    s,
    v
  } = _ref11;
  return {
    h,
    s,
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

// ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

// ../../node_modules/.pnpm/@uiw+react-color-shade-slider@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-shade-slider/esm/index.js
import React4 from "react";

// ../../node_modules/.pnpm/@uiw+react-color-alpha@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-alpha/esm/index.js
import React3 from "react";

// ../../node_modules/.pnpm/@uiw+react-drag-event-interactive@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-drag-event-interactive/esm/index.js
import React, { useRef as useRef2, useState, useCallback as useCallback2, useEffect as useEffect2 } from "react";

// ../../node_modules/.pnpm/@uiw+react-drag-event-interactive@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-drag-event-interactive/esm/utils.js
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

// ../../node_modules/.pnpm/@uiw+react-drag-event-interactive@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-drag-event-interactive/esm/index.js
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
  useEffect2(() => {
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
  return /* @__PURE__ */ _jsx("div", _extends({}, reset, {
    className: [prefixCls, className || ""].filter(Boolean).join(" "),
    style: _extends({}, reset.style, {
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
import React2 from "react";
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
  } = _ref, reset = _objectWithoutPropertiesLoose(_ref, _excluded2);
  var styleWrapper = _extends({}, style, {
    position: "absolute",
    left,
    top
  });
  var stylePointer = _extends({
    width: 18,
    height: 18,
    boxShadow: "var(--alpha-pointer-box-shadow)",
    borderRadius: "50%",
    backgroundColor: "var(--alpha-pointer-background-color)"
  }, fillProps == null ? void 0 : fillProps.style, {
    transform: left ? "translate(-9px, -1px)" : "translate(-1px, -9px)"
  });
  return /* @__PURE__ */ _jsx2("div", _extends({
    className: prefixCls + "-pointer " + (className || ""),
    style: styleWrapper
  }, reset, {
    children: /* @__PURE__ */ _jsx2("div", _extends({
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
var Alpha = /* @__PURE__ */ React3.forwardRef((props, ref) => {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  var handleChange = (offset) => {
    onChange && onChange(_extends({}, hsva, {
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
  var styleWrapper = _extends({
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
  var pointerElement = pointer && typeof pointer === "function" ? pointer(_extends({
    prefixCls
  }, pointerProps, comProps)) : /* @__PURE__ */ _jsx3(Pointer, _extends({}, pointerProps, {
    prefixCls
  }, comProps));
  return /* @__PURE__ */ _jsxs("div", _extends({}, other, {
    className: [prefixCls, prefixCls + "-" + direction, className || ""].filter(Boolean).join(" "),
    style: styleWrapper,
    ref,
    children: [/* @__PURE__ */ _jsx3("div", _extends({}, bgProps, {
      style: _extends({
        inset: 0,
        position: "absolute",
        background: background || innerBackground,
        borderRadius: radius
      }, bgProps.style)
    })), /* @__PURE__ */ _jsx3(esm_default, _extends({}, innerProps, {
      style: _extends({}, innerProps.style, {
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
var ShadeSlider = /* @__PURE__ */ React4.forwardRef((props, ref) => {
  var {
    prefixCls = "w-color-saturation",
    className,
    onChange: _onChange,
    direction = "horizontal",
    hsva
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  var colorFrom = hsvaToHslaString(_extends({}, hsva, {
    a: 1,
    v: 100
  }));
  return /* @__PURE__ */ _jsx4(esm_default2, _extends({
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
import React6 from "react";

// ../../node_modules/.pnpm/@uiw+react-color-wheel@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-wheel/esm/Pointer.js
import React5 from "react";
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
  var styleWarp = _extends({}, style, {
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
var mod = (a, n) => (a % n + n) % n;
var dist = (x, y) => Math.sqrt(x * x + y * y);
function getWheelDimensions(_ref) {
  var {
    width = 0
  } = _ref;
  var r = width / 2;
  return {
    width,
    radius: r,
    cx: r,
    cy: r
  };
}
function getWheelHandlePosition(props, hsv) {
  var {
    cx,
    cy
  } = getWheelDimensions(props);
  var handleRange = getHandleRange(props);
  var handleAngle = (180 + translateWheelAngle(props, hsv.h, true)) * (TAU / 360);
  var handleDist = hsv.s / 100 * handleRange;
  var direction = props.direction === "clockwise" ? -1 : 1;
  return {
    x: cx + handleDist * Math.cos(handleAngle) * direction,
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
    cx,
    cy
  } = getWheelDimensions(props);
  var handleRange = getHandleRange(props);
  x = cx - x;
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
var Wheel = /* @__PURE__ */ React6.forwardRef((props, ref) => {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
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
  var pointerElement = pointer && typeof pointer === "function" ? pointer(_extends({
    prefixCls,
    style: pointerStyle
  }, comProps)) : /* @__PURE__ */ _jsx6(Pointer2, _extends({
    prefixCls,
    style: pointerStyle
  }, comProps));
  return /* @__PURE__ */ _jsxs2(esm_default, _extends({
    className: [prefixCls, className || ""].filter(Boolean).join(" ")
  }, other, {
    style: _extends({
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

// src/components/FigmaPlugin/ColorInput.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function ColorInput({
  defaultValue,
  setValue
}) {
  const [sharedValue, setSharedValue] = React7.useState(defaultValue);
  const [isClicked, setIsClicked] = React7.useState(false);
  const colorPickerRef = React7.useRef(null);
  const triggerRef = React7.useRef(null);
  React7.useEffect(() => {
    setSharedValue(defaultValue);
  }, []);
  React7.useEffect(() => {
    setValue(sharedValue);
  }, [sharedValue]);
  React7.useEffect(() => {
    setSharedValue(defaultValue);
  }, [defaultValue]);
  React7.useEffect(() => {
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
  const updateColorWheelPosition = React7.useCallback(() => {
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
  React7.useEffect(() => {
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
            background: sharedValue,
            border: sharedValue === "#ffffff" ? "1px solid #F2F2F2" : "0px solid transparent"
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
                /* @__PURE__ */ jsx(
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
