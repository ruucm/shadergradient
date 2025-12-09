// src/ShaderGradient/Axis/mergeRefs.ts
function assignRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
function mergeRefs(refs) {
  return (value) => {
    for (const ref of refs) assignRef(ref, value);
  };
}

export {
  mergeRefs
};
