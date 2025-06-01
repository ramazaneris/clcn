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
var hex_exports = {};
__export(hex_exports, {
  hexBg: () => hexBg,
  hexText: () => hexText
});
module.exports = __toCommonJS(hex_exports);
var import_supportsColor = require("../detect/supportsColor.js");
var import_hexToRgb = require("../utils/hexToRgb.js");
function hexText(text, hex) {
  if (!import_supportsColor.supportsColor) return text;
  const { r, g, b } = (0, import_hexToRgb.hexToRgb)(hex);
  return `\x1B[38;2;${r};${g};${b}m${text}\x1B[0m`;
}
function hexBg(text, hex) {
  if (!import_supportsColor.supportsColor) return text;
  const { r, g, b } = (0, import_hexToRgb.hexToRgb)(hex);
  return `\x1B[48;2;${r};${g};${b}m${text}\x1B[0m`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  hexBg,
  hexText
});
