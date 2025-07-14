import {
  Spacing
} from "./chunk-SCPXGRTG.mjs";
import {
  __objRest,
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/components/Web/Customize/NumberInput/NumberInput.tsx
import React from "react";
import { motion } from "framer-motion";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var NumberInput = React.forwardRef(
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
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      label && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("label", { className: "font-semibold text-[#FF430A] text-base", children: label }),
        /* @__PURE__ */ jsx(Spacing, { className: "w-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#FF430A] bg-opacity-10 flex flex-row w-fit h-fit rounded items-center", children: [
        /* @__PURE__ */ jsx(
          "input",
          __spreadValues({
            type: "number",
            className: "font-medium text-[#FF430A] bg-transparent h-[34px] w-[53px] text-center outline-none text-base",
            ref,
            value,
            onChange: (e) => setValue(e.target.valueAsNumber),
            step
          }, inputProps)
        ),
        arrow === true && /* @__PURE__ */ jsxs(
          "div",
          {
            className: "h-[34px] flex flex-col text-[#FF430A] justify-start items-center w-1",
            style: { marginRight: 8, marginLeft: -5 },
            children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "h-[50%] w-fit cursor-pointer flex items-center",
                  onClick: () => {
                    setValue(value + step);
                  },
                  initial: { opacity: 0.5 },
                  whileHover: { opacity: 1 },
                  children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "8", children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M 4.468 2.048 C 4.306 1.616 3.694 1.616 3.532 2.048 L 1.853 6.524 C 1.731 6.851 1.972 7.2 2.322 7.2 L 4 7.2 L 4 7.2 L 5.678 7.2 C 6.028 7.2 6.269 6.851 6.147 6.524 Z",
                      fill: "rgb(255, 67, 10)"
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "h-[50%] w-fit cursor-pointer flex items-center",
                  onClick: () => {
                    setValue(value - step);
                  },
                  initial: { opacity: 0.5 },
                  whileHover: { opacity: 1 },
                  children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "8", children: /* @__PURE__ */ jsx(
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

export {
  NumberInput
};
