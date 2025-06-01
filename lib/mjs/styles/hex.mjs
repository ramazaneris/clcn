import { supportsColor } from "../detect/supportsColor.mjs";
import { hexToRgb } from "../utils/hexToRgb.js";
function hexText(text, hex) {
  if (!supportsColor) return text;
  const { r, g, b } = hexToRgb(hex);
  return `\x1B[38;2;${r};${g};${b}m${text}\x1B[0m`;
}
function hexBg(text, hex) {
  if (!supportsColor) return text;
  const { r, g, b } = hexToRgb(hex);
  return `\x1B[48;2;${r};${g};${b}m${text}\x1B[0m`;
}
export {
  hexBg,
  hexText
};
