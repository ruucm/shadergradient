// src/hooks/usePropState.ts
import { useState } from "react";
var usePropState = (prop) => {
  const [current, setCurrent] = useState(() => ({ prop, state: prop }));
  if (current.prop != prop) {
    current.prop = prop;
    current.state = prop;
  }
  return [
    current.state,
    (state) => {
      setCurrent({ prop, state });
    }
  ];
};

export {
  usePropState
};
