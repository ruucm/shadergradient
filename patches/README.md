# TresJS 4.3.6 Lifecycle Patch

`tres-core-4.3.6.patch` repairs three calls in the ESM build used by our examples:

- Capture the component instance before renderer initialization and provide context
  on that owner rather than calling `provide` after the active instance is lost.
- Register delayed pointer-event cleanup on that owner and create its reactive
  effects inside the owner's effect scope.
- Mount the nested scene renderer in a microtask after the canvas mounted hook,
  avoiding the false outside-render slot context. Skip it if already unmounted.

The root workspace and both standalone starters register identical copies through
`patchedDependencies`. Keep the copies in sync when changing this patch. The
Playwright lifecycle regression covers mount, pause interaction, and lazy remount.

This is a temporary, version-specific upstream dependency repair, not a warning
filter. It does not patch the CommonJS build. Remove it when a supported Tres
release fixes these calls and the regression tests pass without it.

pnpm patches are consumer configuration: publishing `@shadergradient/vue` does
not automatically install this patch for users. Before release, adopt an upstream
fix or document the required consumer patch explicitly. The standalone starters
include their own patch files so they remain portable.