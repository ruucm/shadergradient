---
'@shadergradient/react': patch
---

Remove ShaderGradient's direct usage of the deprecated `THREE.Clock` API and use the render loop delta for animation timing. React Three Fiber versions that still construct `THREE.Clock` may continue to emit their own warning.
