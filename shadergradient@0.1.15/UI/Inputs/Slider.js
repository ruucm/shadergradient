// src/UI/Inputs/Slider.tsx
import * as React from "react";
import { useEffect, useState } from "react";

// node_modules/react-slider/dist/es/prod/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function t(e, o3) {
  return t = Object.setPrototypeOf || function(t3, e2) {
    return t3.__proto__ = e2, t3;
  }, t(e, o3);
}

// node_modules/react-slider/dist/es/prod/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function o(o3, e) {
  o3.prototype = Object.create(e.prototype), o3.prototype.constructor = o3, t(o3, e);
}

// node_modules/react-slider/dist/es/prod/components/ReactSlider/ReactSlider.js
import t2 from "react";
function s(e) {
  return e && e.stopPropagation && e.stopPropagation(), e && e.preventDefault && e.preventDefault(), false;
}
function n(e) {
  return e == null ? [] : Array.isArray(e) ? e.slice() : [e];
}
function i(e) {
  return e !== null && e.length === 1 ? e[0] : e.slice();
}
function o2(e) {
  Object.keys(e).forEach((t3) => {
    typeof document != "undefined" && document.addEventListener(t3, e[t3], false);
  });
}
function r(e, t3) {
  return a(function(e2, t4) {
    let s2 = e2;
    s2 <= t4.min && (s2 = t4.min);
    s2 >= t4.max && (s2 = t4.max);
    return s2;
  }(e, t3), t3);
}
function a(e, t3) {
  const s2 = (e - t3.min) % t3.step;
  let n2 = e - s2;
  return 2 * Math.abs(s2) >= t3.step && (n2 += s2 > 0 ? t3.step : -t3.step), parseFloat(n2.toFixed(5));
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
      const t3 = a2.getMousePosition(e2), s2 = a2.getDiffPosition(t3[0]), n2 = a2.getValueFromPosition(s2);
      a2.move(n2);
    }, a2.onTouchMove = (e2) => {
      if (e2.touches.length > 1)
        return;
      a2.setState({ pending: true });
      const t3 = a2.getTouchPosition(e2);
      if (a2.isScrolling === void 0) {
        const e3 = t3[0] - a2.startPosition[0], s3 = t3[1] - a2.startPosition[1];
        a2.isScrolling = Math.abs(s3) > Math.abs(e3);
      }
      if (a2.isScrolling)
        return void a2.setState({ index: -1 });
      const s2 = a2.getDiffPosition(t3[0]), n2 = a2.getValueFromPosition(s2);
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
      if (!a2.props.disabled && e2.button !== 2) {
        if (a2.setState({ pending: true }), !a2.props.snapDragDisabled) {
          const t3 = a2.getMousePosition(e2);
          a2.forceValueFromPosition(t3[0], (e3) => {
            a2.start(e3, t3[0]), o2(a2.getMouseEventMap());
          });
        }
        s(e2);
      }
    }, a2.onSliderClick = (e2) => {
      if (!a2.props.disabled && a2.props.onSliderClick && !a2.hasMoved) {
        const t3 = a2.getMousePosition(e2), s2 = r(a2.calcValue(a2.calcOffsetFromPosition(t3[0])), a2.props);
        a2.props.onSliderClick(s2);
      }
    }, a2.createOnKeyDown = (e2) => (t3) => {
      a2.props.disabled || (a2.start(e2), o2(a2.getKeyDownEventMap()), s(t3));
    }, a2.createOnMouseDown = (e2) => (t3) => {
      if (a2.props.disabled || t3.button === 2)
        return;
      a2.setState({ pending: true });
      const n2 = a2.getMousePosition(t3);
      a2.start(e2, n2[0]), o2(a2.getMouseEventMap()), s(t3);
    }, a2.createOnTouchStart = (e2) => (t3) => {
      if (a2.props.disabled || t3.touches.length > 1)
        return;
      a2.setState({ pending: true });
      const s2 = a2.getTouchPosition(t3);
      a2.startPosition = s2, a2.isScrolling = void 0, a2.start(e2, s2[0]), o2(a2.getTouchEventMap()), function(e3) {
        e3.stopPropagation && e3.stopPropagation();
      }(t3);
    }, a2.handleResize = () => {
      const e2 = window.setTimeout(() => {
        a2.pendingResizeTimeouts.shift(), a2.resize();
      }, 0);
      a2.pendingResizeTimeouts.push(e2);
    }, a2.renderThumb = (e2, t3) => {
      const s2 = a2.props.thumbClassName + " " + a2.props.thumbClassName + "-" + t3 + " " + (a2.state.index === t3 ? a2.props.thumbActiveClassName : ""), n2 = { ref: (e3) => {
        a2["thumb" + t3] = e3;
      }, key: a2.props.thumbClassName + "-" + t3, className: s2, style: e2, onMouseDown: a2.createOnMouseDown(t3), onTouchStart: a2.createOnTouchStart(t3), onFocus: a2.createOnKeyDown(t3), tabIndex: 0, role: "slider", "aria-orientation": a2.props.orientation, "aria-valuenow": a2.state.value[t3], "aria-valuemin": a2.props.min, "aria-valuemax": a2.props.max, "aria-label": Array.isArray(a2.props.ariaLabel) ? a2.props.ariaLabel[t3] : a2.props.ariaLabel, "aria-labelledby": Array.isArray(a2.props.ariaLabelledby) ? a2.props.ariaLabelledby[t3] : a2.props.ariaLabelledby }, o3 = { index: t3, value: i(a2.state.value), valueNow: a2.state.value[t3] };
      return a2.props.ariaValuetext && (n2["aria-valuetext"] = typeof a2.props.ariaValuetext == "string" ? a2.props.ariaValuetext : a2.props.ariaValuetext(o3)), a2.props.renderThumb(n2, o3);
    }, a2.renderTrack = (e2, t3, s2) => {
      const n2 = { key: a2.props.trackClassName + "-" + e2, className: a2.props.trackClassName + " " + a2.props.trackClassName + "-" + e2, style: a2.buildTrackStyle(t3, a2.state.upperBound - s2) }, o3 = { index: e2, value: i(a2.state.value) };
      return a2.props.renderTrack(n2, o3);
    };
    let u3 = n(e.value);
    u3.length || (u3 = n(e.defaultValue)), a2.pendingResizeTimeouts = [];
    const h2 = [];
    for (let t3 = 0; t3 < u3.length; t3 += 1)
      u3[t3] = r(u3[t3], e), h2.push(t3);
    return a2.resizeObserver = null, a2.resizeElementRef = t2.createRef(), a2.state = { index: -1, upperBound: 0, sliderLength: 0, value: u3, zIndices: h2 }, a2;
  }
  o(u2, p2);
  var h = u2.prototype;
  return h.componentDidMount = function() {
    typeof window != "undefined" && (this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(this.resizeElementRef.current), this.resize());
  }, u2.getDerivedStateFromProps = function(e, t3) {
    const s2 = n(e.value);
    return s2.length ? t3.pending ? null : { value: s2.map((t4) => r(t4, e)) } : null;
  }, h.componentDidUpdate = function() {
    this.state.upperBound === 0 && this.resize();
  }, h.componentWillUnmount = function() {
    this.clearPendingResizeTimeouts(), this.resizeObserver && this.resizeObserver.disconnect();
  }, h.onEnd = function(e) {
    e && function(e2) {
      Object.keys(e2).forEach((t3) => {
        typeof document != "undefined" && document.removeEventListener(t3, e2[t3], false);
      });
    }(e), this.hasMoved && this.fireChangeEvent("onAfterChange"), this.setState({ pending: false }), this.hasMoved = false;
  }, h.getValue = function() {
    return i(this.state.value);
  }, h.getClosestIndex = function(e) {
    let t3 = Number.MAX_VALUE, s2 = -1;
    const { value: n2 } = this.state, i2 = n2.length;
    for (let o3 = 0; o3 < i2; o3 += 1) {
      const i3 = this.calcOffset(n2[o3]), r2 = Math.abs(e - i3);
      r2 < t3 && (t3 = r2, s2 = o3);
    }
    return s2;
  }, h.getMousePosition = function(e) {
    return [e["page" + this.axisKey()], e["page" + this.orthogonalAxisKey()]];
  }, h.getTouchPosition = function(e) {
    const t3 = e.touches[0];
    return [t3["page" + this.axisKey()], t3["page" + this.orthogonalAxisKey()]];
  }, h.getKeyDownEventMap = function() {
    return { keydown: this.onKeyDown, keyup: this.onKeyUp, focusout: this.onBlur };
  }, h.getMouseEventMap = function() {
    return { mousemove: this.onMouseMove, mouseup: this.onMouseUp };
  }, h.getTouchEventMap = function() {
    return { touchmove: this.onTouchMove, touchend: this.onTouchEnd };
  }, h.getValueFromPosition = function(e) {
    const t3 = e / (this.state.sliderLength - this.state.thumbSize) * (this.props.max - this.props.min);
    return r(this.state.startValue + t3, this.props);
  }, h.getDiffPosition = function(e) {
    let t3 = e - this.state.startPosition;
    return this.props.invert && (t3 *= -1), t3;
  }, h.resize = function() {
    const { slider: e, thumb0: t3 } = this;
    if (!e || !t3)
      return;
    const s2 = this.sizeKey(), n2 = e.getBoundingClientRect(), i2 = e[s2], o3 = n2[this.posMaxKey()], r2 = n2[this.posMinKey()], a2 = t3.getBoundingClientRect()[s2.replace("client", "").toLowerCase()], p3 = i2 - a2, u3 = Math.abs(o3 - r2);
    this.state.upperBound === p3 && this.state.sliderLength === u3 && this.state.thumbSize === a2 || this.setState({ upperBound: p3, sliderLength: u3, thumbSize: a2 });
  }, h.calcOffset = function(e) {
    const t3 = this.props.max - this.props.min;
    if (t3 === 0)
      return 0;
    return (e - this.props.min) / t3 * this.state.upperBound;
  }, h.calcValue = function(e) {
    return e / this.state.upperBound * (this.props.max - this.props.min) + this.props.min;
  }, h.calcOffsetFromPosition = function(e) {
    const { slider: t3 } = this, s2 = t3.getBoundingClientRect(), n2 = s2[this.posMaxKey()], i2 = s2[this.posMinKey()];
    let o3 = e - (window["page" + this.axisKey() + "Offset"] + (this.props.invert ? n2 : i2));
    return this.props.invert && (o3 = this.state.sliderLength - o3), o3 -= this.state.thumbSize / 2, o3;
  }, h.forceValueFromPosition = function(e, t3) {
    const s2 = this.calcOffsetFromPosition(e), n2 = this.getClosestIndex(s2), i2 = r(this.calcValue(s2), this.props), o3 = this.state.value.slice();
    o3[n2] = i2;
    for (let e2 = 0; e2 < o3.length - 1; e2 += 1)
      if (o3[e2 + 1] - o3[e2] < this.props.minDistance)
        return;
    this.fireChangeEvent("onBeforeChange"), this.hasMoved = true, this.setState({ value: o3 }, () => {
      t3(n2), this.fireChangeEvent("onChange");
    });
  }, h.clearPendingResizeTimeouts = function() {
    do {
      const e = this.pendingResizeTimeouts.shift();
      clearTimeout(e);
    } while (this.pendingResizeTimeouts.length);
  }, h.start = function(e, t3) {
    const s2 = this["thumb" + e];
    s2 && s2.focus();
    const { zIndices: n2 } = this.state;
    n2.splice(n2.indexOf(e), 1), n2.push(e), this.setState((s3) => ({ startValue: s3.value[e], startPosition: t3 !== void 0 ? t3 : s3.startPosition, index: e, zIndices: n2 }));
  }, h.moveUpByStep = function(e) {
    e === void 0 && (e = this.props.step);
    const t3 = r(this.state.value[this.state.index] + e, this.props);
    this.move(Math.min(t3, this.props.max));
  }, h.moveDownByStep = function(e) {
    e === void 0 && (e = this.props.step);
    const t3 = r(this.state.value[this.state.index] - e, this.props);
    this.move(Math.max(t3, this.props.min));
  }, h.move = function(e) {
    const { index: t3, value: s2 } = this.state, { length: n2 } = s2, i2 = s2[t3];
    if (e === i2)
      return;
    this.hasMoved || this.fireChangeEvent("onBeforeChange"), this.hasMoved = true;
    const { pearling: o3, max: r2, min: a2, minDistance: p3 } = this.props;
    if (!o3) {
      if (t3 > 0) {
        const n3 = s2[t3 - 1];
        e < n3 + p3 && (e = n3 + p3);
      }
      if (t3 < n2 - 1) {
        const n3 = s2[t3 + 1];
        e > n3 - p3 && (e = n3 - p3);
      }
    }
    s2[t3] = e, o3 && n2 > 1 && (e > i2 ? (this.pushSucceeding(s2, p3, t3), function(e2, t4, s3, n3) {
      for (let i3 = 0; i3 < e2; i3 += 1) {
        const o4 = n3 - i3 * s3;
        t4[e2 - 1 - i3] > o4 && (t4[e2 - 1 - i3] = o4);
      }
    }(n2, s2, p3, r2)) : e < i2 && (this.pushPreceding(s2, p3, t3), function(e2, t4, s3, n3) {
      for (let i3 = 0; i3 < e2; i3 += 1) {
        const e3 = n3 + i3 * s3;
        t4[i3] < e3 && (t4[i3] = e3);
      }
    }(n2, s2, p3, a2))), this.setState({ value: s2 }, this.fireChangeEvent.bind(this, "onChange"));
  }, h.pushSucceeding = function(e, t3, s2) {
    let n2, i2;
    for (n2 = s2, i2 = e[n2] + t3; e[n2 + 1] !== null && i2 > e[n2 + 1]; n2 += 1, i2 = e[n2] + t3)
      e[n2 + 1] = a(i2, this.props);
  }, h.pushPreceding = function(e, t3, s2) {
    for (let n2 = s2, i2 = e[n2] - t3; e[n2 - 1] !== null && i2 < e[n2 - 1]; n2 -= 1, i2 = e[n2] - t3)
      e[n2 - 1] = a(i2, this.props);
  }, h.axisKey = function() {
    return this.props.orientation === "vertical" ? "Y" : "X";
  }, h.orthogonalAxisKey = function() {
    return this.props.orientation === "vertical" ? "X" : "Y";
  }, h.posMinKey = function() {
    return this.props.orientation === "vertical" ? this.props.invert ? "bottom" : "top" : this.props.invert ? "right" : "left";
  }, h.posMaxKey = function() {
    return this.props.orientation === "vertical" ? this.props.invert ? "top" : "bottom" : this.props.invert ? "left" : "right";
  }, h.sizeKey = function() {
    return this.props.orientation === "vertical" ? "clientHeight" : "clientWidth";
  }, h.fireChangeEvent = function(e) {
    this.props[e] && this.props[e](i(this.state.value), this.state.index);
  }, h.buildThumbStyle = function(e, t3) {
    const s2 = { position: "absolute", touchAction: "none", willChange: this.state.index >= 0 ? this.posMinKey() : "", zIndex: this.state.zIndices.indexOf(t3) + 1 };
    return s2[this.posMinKey()] = e + "px", s2;
  }, h.buildTrackStyle = function(e, t3) {
    const s2 = { position: "absolute", willChange: this.state.index >= 0 ? this.posMinKey() + "," + this.posMaxKey() : "" };
    return s2[this.posMinKey()] = e, s2[this.posMaxKey()] = t3, s2;
  }, h.buildMarkStyle = function(e) {
    var t3;
    return (t3 = { position: "absolute" })[this.posMinKey()] = e, t3;
  }, h.renderThumbs = function(e) {
    const { length: t3 } = e, s2 = [];
    for (let n3 = 0; n3 < t3; n3 += 1)
      s2[n3] = this.buildThumbStyle(e[n3], n3);
    const n2 = [];
    for (let e2 = 0; e2 < t3; e2 += 1)
      n2[e2] = this.renderThumb(s2[e2], e2);
    return n2;
  }, h.renderTracks = function(e) {
    const t3 = [], s2 = e.length - 1;
    t3.push(this.renderTrack(0, 0, e[0]));
    for (let n2 = 0; n2 < s2; n2 += 1)
      t3.push(this.renderTrack(n2 + 1, e[n2], e[n2 + 1]));
    return t3.push(this.renderTrack(s2 + 1, e[s2], this.state.upperBound)), t3;
  }, h.renderMarks = function() {
    let { marks: e } = this.props;
    const t3 = this.props.max - this.props.min + 1;
    return typeof e == "boolean" ? e = Array.from({ length: t3 }).map((e2, t4) => t4) : typeof e == "number" && (e = Array.from({ length: t3 }).map((e2, t4) => t4).filter((t4) => t4 % e == 0)), e.map(parseFloat).sort((e2, t4) => e2 - t4).map((e2) => {
      const t4 = this.calcOffset(e2), s2 = { key: e2, className: this.props.markClassName, style: this.buildMarkStyle(t4) };
      return this.props.renderMark(s2);
    });
  }, h.render = function() {
    const e = [], { value: s2 } = this.state, n2 = s2.length;
    for (let t3 = 0; t3 < n2; t3 += 1)
      e[t3] = this.calcOffset(s2[t3], t3);
    const i2 = this.props.withTracks ? this.renderTracks(e) : null, o3 = this.renderThumbs(e), r2 = this.props.marks ? this.renderMarks() : null;
    return t2.createElement("div", { ref: (e2) => {
      this.slider = e2, this.resizeElementRef.current = e2;
    }, style: { position: "relative" }, className: this.props.className + (this.props.disabled ? " disabled" : ""), onMouseDown: this.onSliderMouseDown, onClick: this.onSliderClick }, i2, o3, r2);
  }, u2;
}(t2.Component);
p.displayName = "ReactSlider", p.defaultProps = { min: 0, max: 100, step: 1, pageFn: (e) => 10 * e, minDistance: 0, defaultValue: 0, orientation: "horizontal", className: "slider", thumbClassName: "thumb", thumbActiveClassName: "active", trackClassName: "track", markClassName: "mark", withTracks: true, pearling: false, disabled: false, snapDragDisabled: false, invert: false, marks: [], renderThumb: (e) => t2.createElement("div", e), renderTrack: (e) => t2.createElement("div", e), renderMark: (e) => t2.createElement("span", e) };
var u = p;

// src/UI/Inputs/Slider.tsx
import { Spacing } from "../../Spacing.js";
import { NumberInput } from "../../UI/index.js";
var Slider = React.forwardRef(({ defaultValue, setValue, step, min, max }, ref) => {
  const [sharedValue, setSharedValue] = useState(defaultValue);
  useEffect(() => {
    setSharedValue(defaultValue);
  }, [defaultValue]);
  useEffect(() => {
    setValue(sharedValue);
  }, [sharedValue]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center w-full"
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    value: sharedValue,
    setValue: setSharedValue,
    step
  }), /* @__PURE__ */ React.createElement(Spacing, {
    className: "w-4"
  }), /* @__PURE__ */ React.createElement(u, {
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
  }));
});
export {
  Slider
};
