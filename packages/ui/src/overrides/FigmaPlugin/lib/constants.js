export default {
  signature: "GIF",
  version: "89a",
  trailer: 0x3B,
  extensionIntroducer: 0x21,
  applicationExtensionLabel: 0xFF,
  graphicControlExtensionLabel: 0xF9,
  imageSeparator: 0x2C,
  // Header
  signatureSize: 3,
  versionSize: 3,
  globalColorTableFlagMask: 0b10000000,
  colorResolutionMask: 0b01110000,
  sortFlagMask: 0b00001000,
  globalColorTableSizeMask: 0b00000111,
  // Application extension
  applicationIdentifierSize: 8,
  applicationAuthCodeSize: 3,
  // Graphic control extension
  disposalMethodMask: 0b00011100,
  userInputFlagMask: 0b00000010,
  transparentColorFlagMask: 0b00000001,
  // Image descriptor
  localColorTableFlagMask: 0b10000000,
  interlaceFlagMask: 0b01000000,
  idSortFlagMask: 0b00100000,
  localColorTableSizeMask: 0b00000111
}
