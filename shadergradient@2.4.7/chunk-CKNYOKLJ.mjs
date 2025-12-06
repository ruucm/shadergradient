import {
  Line2,
  LineGeometry,
  LineMaterial
} from "./chunk-FO6QGQLC.mjs";
import {
  useThree
} from "./chunk-NLXVRQGB.mjs";
import {
  Color,
  Vector2,
  Vector3
} from "./chunk-QDIU42HX.mjs";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradient/Axis/Line.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Line = React.forwardRef(function Line3(_a, ref) {
  var _b = _a, {
    points,
    color = "black",
    vertexColors,
    linewidth,
    lineWidth,
    dashed
  } = _b, rest = __objRest(_b, [
    "points",
    "color",
    "vertexColors",
    "linewidth",
    "lineWidth",
    "dashed"
  ]);
  const size = useThree((state) => state.size);
  const [line2] = React.useState(() => new Line2());
  const [lineMaterial] = React.useState(() => new LineMaterial());
  const lineGeom = React.useMemo(() => {
    const geom = new LineGeometry();
    const pValues = points.map((p) => {
      const isArray = Array.isArray(p);
      return p instanceof Vector3 ? [p.x, p.y, p.z] : p instanceof Vector2 ? [p.x, p.y, 0] : isArray && p.length === 3 ? [p[0], p[1], p[2]] : isArray && p.length === 2 ? [p[0], p[1], 0] : p;
    });
    geom.setPositions(pValues.flat());
    if (vertexColors) {
      const cValues = vertexColors.map(
        (c) => c instanceof Color ? c.toArray() : c
      );
      geom.setColors(cValues.flat());
    }
    return geom;
  }, [points, vertexColors]);
  React.useLayoutEffect(() => {
    line2.computeLineDistances();
  }, [points, line2]);
  React.useLayoutEffect(() => {
    if (dashed) {
      lineMaterial.defines.USE_DASH = "";
    } else {
      delete lineMaterial.defines.USE_DASH;
    }
    lineMaterial.needsUpdate = true;
  }, [dashed, lineMaterial]);
  React.useEffect(() => {
    return () => lineGeom.dispose();
  }, [lineGeom]);
  return /* @__PURE__ */ jsxs("primitive", __spreadProps(__spreadValues({ object: line2, ref }, rest), { children: [
    /* @__PURE__ */ jsx("primitive", { object: lineGeom, attach: "geometry" }),
    /* @__PURE__ */ jsx(
      "primitive",
      __spreadValues({
        object: lineMaterial,
        attach: "material",
        color,
        vertexColors: Boolean(vertexColors),
        resolution: [size.width, size.height],
        linewidth: linewidth != null ? linewidth : lineWidth,
        dashed
      }, rest)
    )
  ] }));
});

export {
  Line
};
