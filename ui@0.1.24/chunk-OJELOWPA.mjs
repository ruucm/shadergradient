import {
  updateGradientState
} from "./chunk-BMVUNY5L.mjs";

// src/components/Shared/ShaderGradientStateless/store/useSearchParamToStore.ts
import { useEffect } from "react";
function useSearchParamToStore() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    updateGradientState(window.location.search);
  }, []);
}

export {
  useSearchParamToStore
};
