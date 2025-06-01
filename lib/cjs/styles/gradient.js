var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var gradient_exports = {};
__export(gradient_exports, {
  gradientBackground: () => gradientBackground,
  gradientText: () => gradientText
});
module.exports = __toCommonJS(gradient_exports);
var import_supportsColor = require("../detect/supportsColor.js");
var import_getCharWidth = require("../utils/getCharWidth.js");
var import_hexToRgb = require("../utils/hexToRgb.js");
function interpolate(a, b, t) {
  return Math.round(a + (b - a) * t);
}
function generateGradient(text, startHex, endHex, mode = "fg") {
  if (!import_supportsColor.supportsColor) return text;
  if (!text || typeof text !== "string") return "";
  const start = (0, import_hexToRgb.hexToRgb)(startHex);
  const end = (0, import_hexToRgb.hexToRgb)(endHex);
  const chars = [...text];
  const totalWidth = chars.reduce((acc, ch) => acc + (0, import_getCharWidth.getCharWidth)(ch), 0);
  let cumulative = 0;
  let result = "";
  for (const char of chars) {
    const t = cumulative / (totalWidth || 1);
    const r = interpolate(start.r, end.r, t);
    const g = interpolate(start.g, end.g, t);
    const b = interpolate(start.b, end.b, t);
    const ansi = mode === "bg" ? `\x1B[48;2;${r};${g};${b}m` : `\x1B[38;2;${r};${g};${b}m`;
    result += `${ansi}${char}`;
    cumulative += (0, import_getCharWidth.getCharWidth)(char);
  }
  return result + "\x1B[0m";
}
function gradientText(text, startHex, endHex) {
  return generateGradient(text, startHex, endHex, "fg");
}
function gradientBackground(text, startHex, endHex) {
  return generateGradient(text, startHex, endHex, "bg");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  gradientBackground,
  gradientText
});
