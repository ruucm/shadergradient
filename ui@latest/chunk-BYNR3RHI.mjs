import {
  updateGradientState
} from "./chunk-4H25YX3E.mjs";

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
