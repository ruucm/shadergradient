import {
  __spreadProps,
  __spreadValues
} from "./chunk-FWCSY2DS.mjs";

// src/overrides/Web/Pricing.tsx
import { create } from "zustand";
import { jsx } from "react/jsx-runtime";
var useBillingIntervalStore = create((set) => ({
  billingInterval: "year",
  setBillingInterval: (payload) => set((state) => ({ billingInterval: payload }))
}));
function useBillingInterval() {
  const billingInterval = useBillingIntervalStore(
    (state) => state.billingInterval
  );
  const setBillingInterval = useBillingIntervalStore(
    (state) => state.setBillingInterval
  );
  return [billingInterval, setBillingInterval];
}
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
  useBillingIntervalStore,
  useBillingInterval,
  TogglePrice,
  Price
};
