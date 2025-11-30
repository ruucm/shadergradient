// src/overrides/FigmaPlugin/lib/constants.js
var constants_default = {
  signature: "GIF",
  version: "89a",
  trailer: 59,
  extensionIntroducer: 33,
  applicationExtensionLabel: 255,
  graphicControlExtensionLabel: 249,
  imageSeparator: 44,
  // Header
  signatureSize: 3,
  versionSize: 3,
  globalColorTableFlagMask: 128,
  colorResolutionMask: 112,
  sortFlagMask: 8,
  globalColorTableSizeMask: 7,
  // Application extension
  applicationIdentifierSize: 8,
  applicationAuthCodeSize: 3,
  // Graphic control extension
  disposalMethodMask: 28,
  userInputFlagMask: 2,
  transparentColorFlagMask: 1,
  // Image descriptor
  localColorTableFlagMask: 128,
  interlaceFlagMask: 64,
  idSortFlagMask: 32,
  localColorTableSizeMask: 7
};

export {
  constants_default
};
