import {
  useBillingInterval
} from "./chunk-BDA275ZJ.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-HXGKXP63.mjs";

// src/overrides/Web/Pricing.tsx
import { jsx } from "react/jsx-runtime";
function TogglePrice(Component) {
  return (props) => {
    const [, setBillingInterval] = useBillingInterval();
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        onMonthly: () => setBillingInterval("year"),
        onYearly: () => setBillingInterval("month")
      })
    );
  };
}
function Price(Component) {
  return (props) => {
    const [billingInterval] = useBillingInterval();
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        variant: billingInterval === "year" ? "year" : "month"
      })
    );
  };
}

export {
  TogglePrice,
  Price
};
