import {
  STRIPE_BILLING_URL,
  STRIPE_BUY_MONTHLY_URL,
  STRIPE_BUY_YEARLY_URL
} from "./chunk-VQME7MQ6.mjs";
import {
  useSubscription,
  useUserDB
} from "./chunk-OEWGZKCP.mjs";
import {
  useBillingInterval,
  useFigma
} from "./chunk-BDA275ZJ.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-HXGKXP63.mjs";

// src/overrides/FigmaPlugin/Pricing.tsx
import { useDBTable } from "https://framer.com/m/SupabaseConnector-ARlr.js";
import { jsx } from "react/jsx-runtime";
function userInfo(Component) {
  return (props) => {
    const [subscription, subDBLoading] = useSubscription("userInfo-channel");
    const [userDB] = useUserDB("sg-info");
    console.log(subscription, "subscription");
    let variant = "Loading";
    if (subDBLoading) variant = "Loading";
    else if (!userDB) variant = "NoUser";
    else if (subscription) variant = "Pro";
    else variant = "Free";
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        supportLink: `${STRIPE_BILLING_URL}?prefilled_email=${encodeURIComponent(
          userDB == null ? void 0 : userDB.email
        )}`,
        email: userDB ? `${userDB == null ? void 0 : userDB.email}` : "",
        variant
      })
    );
  };
}
function subscribeLink(Component) {
  return (props) => {
    const [figma] = useFigma();
    const [userDB] = useUserDB();
    const [billingInterval] = useBillingInterval();
    const isYearly = billingInterval === "year";
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        onClick: () => {
          var _a;
          window.open(
            `${isYearly ? STRIPE_BUY_YEARLY_URL : STRIPE_BUY_MONTHLY_URL}?prefilled_email=${encodeURIComponent(
              userDB == null ? void 0 : userDB.email
            )}&client_reference_id=${(_a = figma.user) == null ? void 0 : _a.id}`
          );
        }
      })
    );
  };
}
function isUpgraded(Component) {
  return (props) => {
    const [subscription] = useSubscription(props["data-framer-name"]);
    if (subscription) return /* @__PURE__ */ jsx(Component, __spreadValues({}, props));
  };
}
function upgradingText(Component) {
  return (props) => {
    const [subscription] = useSubscription(props["data-framer-name"]);
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        text: subscription ? "Upgraded!" : `Check
your browser`
      })
    );
  };
}
function userEmail(Component) {
  return (props) => {
    const [userDB] = useUserDB();
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { text: (userDB == null ? void 0 : userDB.email) || "" }));
  };
}
function TogglePriceFigma(Component) {
  return (props) => {
    const [, setBillingInterval] = useBillingInterval();
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        onMonthly: () => setBillingInterval("month"),
        onYearly: () => setBillingInterval("year")
      })
    );
  };
}
function PriceFigma(Component) {
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
function PriceText(Component) {
  return (props) => {
    const [billingInterval] = useBillingInterval();
    const isYearly = billingInterval === "year";
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        text: isYearly ? " \u2014 just $2 a month" : " \u2014 just $4 a month"
      })
    );
  };
}
function StartTrial(Component) {
  return (props) => {
    var _a;
    const [, , insertRow] = useDBTable("users", "sg-figma-t");
    const [figma] = useFigma();
    const figma_user_id = (_a = figma.user) == null ? void 0 : _a.id;
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({}, props), {
        onSubmit: (email) => {
          insertRow({ email, figma_user_id, trial_started_at: /* @__PURE__ */ new Date() });
          props == null ? void 0 : props.onSubmit();
        }
      })
    );
  };
}

export {
  userInfo,
  subscribeLink,
  isUpgraded,
  upgradingText,
  userEmail,
  TogglePriceFigma,
  PriceFigma,
  PriceText,
  StartTrial
};
