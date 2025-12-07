/**
 * A blend function enumeration.
 *
 * @type {Object}
 * @property {Number} SKIP - No blending. The effect will not be included in the final shader.
 * @property {Number} ADD - Additive blending. Fast, but may produce washed out results.
 * @property {Number} ALPHA - Alpha blending. Blends based on the alpha value of the new color.
 * @property {Number} AVERAGE - Average blending.
 * @property {Number} COLOR_BURN - Color burn.
 * @property {Number} COLOR_DODGE - Color dodge.
 * @property {Number} DARKEN - Prioritize darker colors.
 * @property {Number} DIFFERENCE - Color difference.
 * @property {Number} EXCLUSION - Color exclusion.
 * @property {Number} LIGHTEN - Prioritize lighter colors.
 * @property {Number} MULTIPLY - Color multiplication.
 * @property {Number} DIVIDE - Color division.
 * @property {Number} NEGATION - Color negation.
 * @property {Number} NORMAL - Normal blending. The new color overwrites the old one.
 * @property {Number} OVERLAY - Color overlay.
 * @property {Number} REFLECT - Color reflection.
 * @property {Number} SCREEN - Screen blending. The two colors are effectively projected on a white screen simultaneously.
 * @property {Number} SOFT_LIGHT - Soft light blending.
 * @property {Number} SUBTRACT - Color subtraction.
 */

export const BlendFunction = {
  SKIP: 0,
  ADD: 1,
  ALPHA: 2,
  AVERAGE: 3,
  COLOR_BURN: 4,
  COLOR_DODGE: 5,
  DARKEN: 6,
  DIFFERENCE: 7,
  EXCLUSION: 8,
  LIGHTEN: 9,
  MULTIPLY: 10,
  DIVIDE: 11,
  NEGATION: 12,
  NORMAL: 13,
  OVERLAY: 14,
  REFLECT: 15,
  SCREEN: 16,
  SOFT_LIGHT: 17,
  SUBTRACT: 18,
}
