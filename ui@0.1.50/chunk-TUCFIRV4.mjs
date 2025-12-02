import {
  useDBTable
} from "./chunk-YY44VKHD.mjs";
import {
  useFigma
} from "./chunk-UISFNSH4.mjs";
import {
  __async
} from "./chunk-HXGKXP63.mjs";

// src/overrides/FigmaPlugin/utils.ts
import { useEffect } from "react";
function useUserDB(channel = "sg-figma-hook") {
  var _a;
  const [figma] = useFigma();
  const figma_user_id = (_a = figma.user) == null ? void 0 : _a.id;
  console.log("[useUserDB] figma_user_id:", figma_user_id);
  const [rows, dbLoading] = useDBTable("users", channel);
  console.log("[useUserDB] rows found:", rows);
  const foundUser = rows.find((r) => r.figma_user_id === figma_user_id);
  console.log("[useUserDB] foundUser:", foundUser);
  return [foundUser, dbLoading];
}
function useSubscription(subId) {
  const [userDB, userDBLoading] = useUserDB();
  const userId = userDB == null ? void 0 : userDB.id;
  console.log("[useSubscription] userId:", userId);
  const [subscriptionRows, dbLoading] = useDBTable("subscriptions", subId);
  console.log("[useSubscription] subscriptionRows:", subscriptionRows);
  const subscription = subscriptionRows.find(
    (r) => r.user_id === userId && r.status === "active"
  );
  console.log("[useSubscription] active subscription:", subscription);
  return [subscription, userDBLoading || dbLoading];
}
function updateResolution({ setWidth, setHeight, pixelDensity }) {
  const r3fCanvas = document.getElementById("gradientCanvas").children[0].children[0];
  const { width, height } = r3fCanvas.getBoundingClientRect();
  setWidth(Math.round(width * pixelDensity));
  setHeight(Math.round(height * pixelDensity));
}
function estimateSize({ format, duration, frameRate, pixelDensity }) {
  const p = format === "webm" ? 745e-5 : 0.149;
  const value = p * duration * frameRate * pixelDensity * pixelDensity;
  return Math.round(value * 10) / 10;
}
function getTrialLeft(trial_started_at, trials) {
  if (!trial_started_at) return trials;
  let currentDate = /* @__PURE__ */ new Date();
  let diffInTime = currentDate.getTime() - new Date(trial_started_at).getTime();
  let diffInDays = trials - diffInTime / (1e3 * 3600 * 24);
  if (diffInDays < 0) return 0;
  return Math.round(diffInDays);
}
function useFigmaMessage() {
  const [, setFigma] = useFigma();
  useEffect(() => {
    console.log("[useFigmaMessage] Sending UI_READY message to Figma");
    parent.postMessage({ pluginMessage: { type: "UI_READY" } }, "*");
    onmessage = (event) => {
      const msg = event.data.pluginMessage;
      console.log("[useFigmaMessage] Received message from Figma:", msg == null ? void 0 : msg.type, msg);
      switch (msg == null ? void 0 : msg.type) {
        case "SELECTION":
          console.log("[useFigmaMessage] Selection count:", msg.selection.length);
          setFigma({ selection: msg.selection.length });
          break;
        case "USER_INFO":
          console.log("[useFigmaMessage] User info received:", msg.user);
          setFigma({ user: msg.user });
          break;
        default:
          break;
      }
    };
  }, []);
}
function sleep(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1e3));
}
function loadImage(src) {
  return __async(this, null, function* () {
    const image = new Image();
    image.src = src;
    yield new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    });
    return image;
  });
}
function parseUrlToCode(url) {
  try {
    if (!url.trim().startsWith("http")) {
    }
    const parsedUrl = new URL(url);
    const params = new URLSearchParams(parsedUrl.search);
    let propsArray = [];
    params.forEach((value, key) => {
      let formattedValue = value;
      if (value === "true" || value === "false" || !isNaN(Number(value)) && value !== "") {
        formattedValue = `{${value}}`;
      } else {
        formattedValue = `"${value}"`;
      }
      propsArray.push(`${key}=${formattedValue}`);
    });
    const formattedProps = propsArray.join("\n  ");
    return `<ShaderGradient
  ${formattedProps}
/>`;
  } catch (error) {
    console.error("Error parsing URL:", error);
    return null;
  }
}
var copyToClipboard = (text) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    const successful = document.execCommand("copy");
    if (!successful) {
      console.log("error");
    }
  } catch (err) {
    console.error("Fallback: Copy failed", err);
  } finally {
    document.body.removeChild(textarea);
  }
};

export {
  useUserDB,
  useSubscription,
  updateResolution,
  estimateSize,
  getTrialLeft,
  useFigmaMessage,
  sleep,
  loadImage,
  parseUrlToCode,
  copyToClipboard
};
