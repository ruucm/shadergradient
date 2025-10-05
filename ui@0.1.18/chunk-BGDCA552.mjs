import {
  init_store,
  updateGradientState
} from "./chunk-5DD7N4KU.mjs";

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
