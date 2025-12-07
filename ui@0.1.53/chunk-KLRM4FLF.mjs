import {
  __export1,
  __export4,
  init_query_string,
  init_store,
  useQueryStore
} from "./chunk-HKSQ2NHK.mjs";
import {
  __esm
} from "./chunk-HXGKXP63.mjs";

// src/components/Shared/ShaderGradientStateless/store/useQueryState.ts
import { useCallback } from "react";
function updateHistory(path) {
  var _a;
  window.history.pushState(
    {
      prevUrls: [
        ...((_a = window.history.state) == null ? void 0 : _a.prevUrls) || [],
        window.location.origin + path
      ]
    },
    document.title,
    path
  );
}
var useQueryState, useURLQueryState;
var init_useQueryState = __esm({
  "src/components/Shared/ShaderGradientStateless/store/useQueryState.ts"() {
    init_query_string();
    init_store();
    useQueryState = (propName, defaultValue = null) => {
      const selector = useCallback(
        (state) => typeof state[propName] !== "undefined" ? state[propName] : defaultValue,
        [propName, defaultValue]
      );
      const globalValue = useQueryStore(selector);
      const _setGlobalValue = useCallback(
        (valueFun) => useQueryStore.setState({
          [propName]: valueFun(useQueryStore.getState()[propName])
        }),
        [propName]
      );
      const setQueryValue = useCallback(
        (newVal) => {
          _setGlobalValue((currentState) => {
            if (typeof newVal === "function") {
              newVal = newVal(currentState || defaultValue);
            }
            if (Number.isFinite(newVal)) {
              newVal = parseFloat(newVal.toFixed(2));
            }
            setTimeout(() => {
              const query = useQueryStore.getState();
              updateHistory(
                __export4(
                  // @ts-ignore
                  { url: window.location.pathname, query },
                  { skipNull: true, arrayFormat: "index" }
                )
              );
            }, 0);
            return newVal;
          });
        },
        [_setGlobalValue]
      );
      return [globalValue, setQueryValue];
    };
    useURLQueryState = () => {
      const setQueryValue = (search) => {
        setTimeout(() => {
          const query = useQueryStore.getState();
          updateHistory(
            __export4(
              { url: window.location.pathname, query },
              { skipNull: true, arrayFormat: "index" }
            )
          );
        }, 0);
        const state = __export1(search, {
          parseNumbers: true,
          parseBooleans: true,
          arrayFormat: "index"
        });
        useQueryStore.setState(state);
      };
      return setQueryValue;
    };
  }
});

export {
  useQueryState,
  useURLQueryState,
  init_useQueryState
};
