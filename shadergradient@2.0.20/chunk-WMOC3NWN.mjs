import {
  updateGradientState
} from "./chunk-WA6HTKIA.mjs";

// src/ShaderGradientStateless/store/useSearchParamToStore.ts
import { useEffect } from "react";
function useSearchParamToStore() {
  useEffect(() => {
    updateGradientState(window.location.search);
  }, []);
}

export {
  useSearchParamToStore
};
