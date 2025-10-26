import {
  Line
} from "../../chunk-7VDDK3RB.mjs";
import "../../chunk-6A4LZ7FD.mjs";
import "../../chunk-73SH6GTX.mjs";
import {
  CubicBezierCurve3,
  Vector3
} from "../../chunk-BT6X4JN2.mjs";
import {
  __objRest,
  __spreadValues
} from "../../chunk-5BEQP2BQ.mjs";

// src/ShaderGradient/Axis/CubicBezierLine.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var CubicBezierLine = React.forwardRef(
  function CubicBezierLine2(_a, ref) {
    var _b = _a, { start, end, midA, midB, segments = 20 } = _b, rest = __objRest(_b, ["start", "end", "midA", "midB", "segments"]);
    const points = React.useMemo(() => {
      const startV = start instanceof Vector3 ? start : new Vector3(...start);
      const endV = end instanceof Vector3 ? end : new Vector3(...end);
      const midAV = midA instanceof Vector3 ? midA : new Vector3(...midA);
      const midBV = midB instanceof Vector3 ? midB : new Vector3(...midB);
      const interpolatedV = new CubicBezierCurve3(
        startV,
        midAV,
        midBV,
        endV
      ).getPoints(segments);
      return interpolatedV;
    }, [start, end, midA, midB, segments]);
    return /* @__PURE__ */ jsx(Line, __spreadValues({ ref, points }, rest));
  }
);
export {
  CubicBezierLine
};
