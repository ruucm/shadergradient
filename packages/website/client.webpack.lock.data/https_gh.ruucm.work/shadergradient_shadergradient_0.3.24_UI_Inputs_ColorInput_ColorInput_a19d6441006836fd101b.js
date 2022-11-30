// src/UI/Inputs/ColorInput/ColorInput.tsx
import * as React7 from "react";
import { useEffect as useEffect3, useState as useState2, useRef as useRef3 } from "react";

// ../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
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

// ../../node_modules/@uiw/color-convert/esm/utils.js
var validHex = (hex) => /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);

// ../../node_modules/@uiw/color-convert/esm/index.js
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
    a: a ? a / RGB_MAX : 1
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

// ../../node_modules/@uiw/react-color-shade-slider/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
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

// ../../node_modules/@uiw/react-color-shade-slider/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// ../../node_modules/@uiw/react-color-shade-slider/esm/index.js
import React4 from "react";

// ../../node_modules/@uiw/react-color-alpha/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}

// ../../node_modules/@uiw/react-color-alpha/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// ../../node_modules/@uiw/react-color-alpha/esm/index.js
import React3, { useCallback as useCallback3 } from "react";

// ../../node_modules/@uiw/react-drag-event-interactive/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends4() {
  _extends4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}

// ../../node_modules/@uiw/react-drag-event-interactive/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// ../../node_modules/@uiw/react-drag-event-interactive/esm/index.js
import React, { useRef as useRef2, useState, useCallback as useCallback2, useEffect as useEffect2 } from "react";

// ../../node_modules/@uiw/react-drag-event-interactive/esm/utils.js
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

// ../../node_modules/@uiw/react-drag-event-interactive/esm/index.js
import { jsx as _jsx } from "react/jsx-runtime";
var _excluded = ["prefixCls", "className", "onMove", "onDown"];
var Interactive = /* @__PURE__ */ React.forwardRef((props, ref) => {
  var {
    prefixCls = "w-color-interactive",
    className,
    onMove,
    onDown
  } = props, reset = _objectWithoutPropertiesLoose3(props, _excluded);
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
  return /* @__PURE__ */ _jsx("div", _extends4({}, reset, {
    className: [prefixCls, className || ""].filter(Boolean).join(" "),
    style: _extends4({}, reset.style, {
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

// ../../node_modules/@uiw/react-color-alpha/esm/Pointer.js
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

// ../../node_modules/@uiw/react-color-alpha/esm/index.js
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
  } = props, other = _objectWithoutPropertiesLoose2(props, _excluded2);
  var handleChange = useCallback3((offset) => {
    onChange && onChange(_extends3({}, hsva, {
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
  return /* @__PURE__ */ _jsxs("div", _extends3({}, other, {
    className: [prefixCls, prefixCls + "-" + direction, className || ""].filter(Boolean).join(" "),
    style: _extends3({
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
    children: [/* @__PURE__ */ _jsx3("div", _extends3({}, bgProps, {
      style: _extends3({
        inset: 0,
        position: "absolute",
        background: background || innerBackground,
        borderRadius: radius
      }, bgProps.style)
    })), /* @__PURE__ */ _jsx3(esm_default, _extends3({}, innerProps, {
      style: _extends3({}, innerProps.style, {
        inset: 0,
        zIndex: 1,
        position: "absolute"
      }),
      onMove: handleChange,
      onDown: handleChange,
      children: /* @__PURE__ */ React3.createElement(pointer || Pointer, _extends3({
        prefixCls
      }, comProps))
    }))]
  }));
});
Aplha.displayName = "Aplha";
var esm_default2 = Aplha;

// ../../node_modules/@uiw/react-color-shade-slider/esm/index.js
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

// ../../node_modules/@uiw/react-color-wheel/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends5() {
  _extends5 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends5.apply(this, arguments);
}

// ../../node_modules/@uiw/react-color-wheel/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// ../../node_modules/@uiw/react-color-wheel/esm/index.js
import React6 from "react";

// ../../node_modules/@uiw/react-color-wheel/esm/Pointer.js
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
  var styleWarp = _extends5({}, style, {
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

// ../../node_modules/@uiw/react-color-wheel/esm/utils.js
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

// ../../node_modules/@uiw/react-color-wheel/esm/index.js
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
  } = props, other = _objectWithoutPropertiesLoose4(props, _excluded4);
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
  return /* @__PURE__ */ _jsxs2(esm_default, _extends5({
    className: [prefixCls, className || ""].filter(Boolean).join(" ")
  }, other, {
    style: _extends5({}, style, {
      position: "relative",
      width,
      height
    }),
    ref,
    onMove: handleChange,
    onDown: handleChange,
    children: [/* @__PURE__ */ React6.createElement(pointer || Pointer2, _extends5({
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

// src/UI/Inputs/ColorInput/ColorInput.tsx
import { useOnClickOutside } from "../../../hooks/index.js";
import { Spacing } from "../../../UI/index.js";
var ColorInput = React7.forwardRef(({ label = "", defaultValue, setValue }, ref) => {
  const [sharedValue, setSharedValue] = useState2(defaultValue);
  const [toggle, setToggle] = useState2(false);
  useEffect3(() => {
    setSharedValue(defaultValue);
  }, [defaultValue]);
  useEffect3(() => {
    setValue(sharedValue);
  }, [sharedValue]);
  const tabRef = useRef3(null);
  useOnClickOutside(tabRef, () => setToggle(false));
  return /* @__PURE__ */ React7.createElement("div", {
    className: "flex items-center"
  }, label && /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement("label", {
    className: "font-semibold text-primary text-base"
  }, label), /* @__PURE__ */ React7.createElement(Spacing, {
    className: "w-2"
  })), /* @__PURE__ */ React7.createElement("div", {
    className: "flex items-center gap-2 w-full relative"
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "w-full h-input rounded",
    style: { background: sharedValue },
    onClick: () => {
      setToggle(!toggle);
    }
  }), /* @__PURE__ */ React7.createElement("div", {
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
    }
  }, /* @__PURE__ */ React7.createElement("div", {
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
    }
  }, /* @__PURE__ */ React7.createElement(esm_default4, {
    color: sharedValue,
    onChange: (color2) => {
      setSharedValue(color2.hex);
    },
    width: 200,
    height: 200
  }), /* @__PURE__ */ React7.createElement(esm_default3, {
    width: 200,
    style: { display: "flex", alignItems: "center" },
    hsva: hexToHsva(sharedValue),
    onChange: (color2) => {
      setSharedValue(hsvaToHex({
        h: hexToHsva(sharedValue).h,
        s: color2.s,
        v: color2.v,
        a: 1
      }));
    }
  }))), /* @__PURE__ */ React7.createElement("input", {
    type: "text",
    value: sharedValue,
    onChange: (e) => setSharedValue(e.target.value),
    className: "font-medium text-primary bg-primary bg-opacity-10 rounded h-input w-[90px] text-center outline-none text-base"
  })));
});
export {
  ColorInput
};
