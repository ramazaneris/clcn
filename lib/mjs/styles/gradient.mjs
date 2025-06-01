import { supportsColor } from "../detect/supportsColor.js";
import { getCharWidth } from "../utils/getCharWidth.js";
import { hexToRgb } from "../utils/hexToRgb.js";
function interpolate(a, b, t) {
  return Math.round(a + (b - a) * t);
}
function generateGradient(text, startHex, endHex, mode = "fg") {
  if (!supportsColor) return text;
  if (!text || typeof text !== "string") return "";
  const start = hexToRgb(startHex);
  const end = hexToRgb(endHex);
  const chars = [...text];
  const totalWidth = chars.reduce((acc, ch) => acc + getCharWidth(ch), 0);
  let cumulative = 0;
  let result = "";
  for (const char of chars) {
    const t = cumulative / (totalWidth || 1);
    const r = interpolate(start.r, end.r, t);
    const g = interpolate(start.g, end.g, t);
    const b = interpolate(start.b, end.b, t);
    const ansi = mode === "bg" ? `\x1B[48;2;${r};${g};${b}m` : `\x1B[38;2;${r};${g};${b}m`;
    result += `${ansi}${char}`;
    cumulative += getCharWidth(char);
  }
  return result + "\x1B[0m";
}
function gradientText(text, startHex, endHex) {
  return generateGradient(text, startHex, endHex, "fg");
}
function gradientBackground(text, startHex, endHex) {
  return generateGradient(text, startHex, endHex, "bg");
}
export {
  gradientBackground,
  gradientText
};
