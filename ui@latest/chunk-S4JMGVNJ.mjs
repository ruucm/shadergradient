import {
  init_store,
  updateGradientState
} from "./chunk-HKSQ2NHK.mjs";

// src/components/Shared/ShaderGradientStateless/store/useSearchParamToStore.ts
init_store();
import { useEffect } from "react";
function useSearchParamToStore() {
  useEffect(() => {
    updateGradientState(window.location.search);
  }, []);
}

export {
  useSearchParamToStore
};
