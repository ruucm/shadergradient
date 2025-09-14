import {
  __export1,
  __export4,
  useQueryStore
} from "./chunk-GJHJKIXW.mjs";

// src/components/Shared/ShaderGradientStateless/store/useQueryState.ts
import { useCallback } from "react";
var useQueryState = (propName, defaultValue = null) => {
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
var useURLQueryState = () => {
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

export {
  useQueryState,
  useURLQueryState
};
