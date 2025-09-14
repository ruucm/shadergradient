import {
  updateGradientState
} from "./chunk-63PBAJ77.mjs";

// src/components/Shared/ShaderGradientStateless/store/useSearchParamToStore.ts
import { useEffect } from "react";
function useSearchParamToStore() {
  useEffect(() => {
    updateGradientState(window.location.search);
  }, []);
}

export {
  useSearchParamToStore
};
