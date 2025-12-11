import {
  useDBTable
} from "./chunk-UMQJMRW4.mjs";
import {
  useFigma
} from "./chunk-R6GBIJ5D.mjs";
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
  const { rows, loading: dbLoading } = useDBTable("users", channel, {
    filter: { column: "figma_user_id", value: figma_user_id },
    select: "id, email, figma_user_id, trial_started_at, created_at",
    limit: 1,
    enabled: !!figma_user_id
    // Only query when figma_user_id exists
  });
  const foundUser = rows[0] || null;
  console.log("[useUserDB] foundUser:", foundUser);
  return [foundUser, dbLoading];
}
function useSubscription(subId) {
  const [userDB, userDBLoading] = useUserDB();
  const userId = userDB == null ? void 0 : userDB.id;
  console.log("[useSubscription] userId:", userId);
  const {
    rows: subscriptionRows,
    loading: dbLoading,
    error
  } = useDBTable("subscriptions", subId, {
    filter: { column: "user_id", value: userId },
    // Using '*' to fetch all columns - adjust to specific columns after verifying table schema
    select: "*",
    enabled: !!userId
    // Only query when userId exists
  });
  console.log("[useSubscription] subscriptionRows:", subscriptionRows);
  if (error) {
    console.error("[useSubscription] error:", error);
  }
  const subscription = subscriptionRows.find((r) => r.status === "active");
  console.log("[useSubscription] active subscription:", subscription);
  return [subscription, userDBLoading || dbLoading];
}
function updateResolution({ setWidth, setHeight, pixelDensity }) {
  var _a, _b;
  const r3fCanvas = (_b = (_a = document.getElementById("gradientCanvas")) == null ? void 0 : _a.children[0]) == null ? void 0 : _b.children[0];
  if (!r3fCanvas) {
    console.warn("[updateResolution] Canvas element not found");
    return;
  }
  const { width, height } = r3fCanvas.getBoundingClientRect();
  setWidth(Math.round(width * pixelDensity));
  setHeight(Math.round(height * pixelDensity));
}
function estimateSize({
  format,
  duration,
  frameRate,
  nodeWidth,
  nodeHeight
}) {
  const p = format === "webm" ? 745e-5 : 0.149;
  const baseSize = 320 * 320;
  const exportPixels = nodeWidth && nodeHeight && nodeWidth > 0 && nodeHeight > 0 ? nodeWidth * nodeHeight : baseSize;
  const rawScaleFactor = exportPixels / baseSize;
  const scaleFactor = format === "gif" ? Math.pow(rawScaleFactor, 0.7) : rawScaleFactor;
  const value = p * duration * frameRate * scaleFactor;
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
      var _a;
      const msg = event.data.pluginMessage;
      if (!msg) return;
      console.log("[useFigmaMessage] Received message from Figma:", msg.type);
      switch (msg.type) {
        case "SELECTION":
          console.log(
            "[useFigmaMessage] Selection count:",
            msg.selection.length,
            "Node size:",
            msg.nodeWidth,
            "x",
            msg.nodeHeight
          );
          setFigma({
            selection: msg.selection.length,
            nodeWidth: msg.nodeWidth || 0,
            nodeHeight: msg.nodeHeight || 0
          });
          break;
        case "USER_INFO":
          console.log("[useFigmaMessage] User info received:", (_a = msg.user) == null ? void 0 : _a.id);
          setFigma({ user: msg.user });
          break;
        case "EDITOR_TYPE":
          console.log("[useFigmaMessage] Editor type received:", msg.editorType);
          setFigma({ editorType: msg.editorType });
          break;
        default:
          break;
      }
    };
  }, [setFigma]);
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
      return null;
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
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(
      () => console.log("[copyToClipboard] Copied successfully"),
      (err) => console.error("[copyToClipboard] Failed:", err)
    );
    return;
  }
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
      console.error("[copyToClipboard] execCommand failed");
    }
  } catch (err) {
    console.error("[copyToClipboard] Fallback failed:", err);
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
