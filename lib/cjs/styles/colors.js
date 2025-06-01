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
var colors_exports = {};
__export(colors_exports, {
  colors: () => colors,
  txtBlack: () => txtBlack,
  txtBlue: () => txtBlue,
  txtBrightBlack: () => txtBrightBlack,
  txtBrightBlue: () => txtBrightBlue,
  txtBrightCyan: () => txtBrightCyan,
  txtBrightGreen: () => txtBrightGreen,
  txtBrightMagenta: () => txtBrightMagenta,
  txtBrightRed: () => txtBrightRed,
  txtBrightWhite: () => txtBrightWhite,
  txtBrightYellow: () => txtBrightYellow,
  txtCyan: () => txtCyan,
  txtGreen: () => txtGreen,
  txtMagenta: () => txtMagenta,
  txtRed: () => txtRed,
  txtWhite: () => txtWhite,
  txtYellow: () => txtYellow
});
module.exports = __toCommonJS(colors_exports);
var import_supportsColor = require("../detect/supportsColor.js");
const safeAnsi = (code) => import_supportsColor.supportsColor ? `\x1B[${code}m` : "";
const createColorFn = (code) => (text) => `${safeAnsi(code)}${text}${safeAnsi(0)}`;
const txtBlack = createColorFn(30);
const txtRed = createColorFn(31);
const txtGreen = createColorFn(32);
const txtYellow = createColorFn(33);
const txtBlue = createColorFn(34);
const txtMagenta = createColorFn(35);
const txtCyan = createColorFn(36);
const txtWhite = createColorFn(37);
const txtBrightBlack = createColorFn(90);
const txtBrightRed = createColorFn(91);
const txtBrightGreen = createColorFn(92);
const txtBrightYellow = createColorFn(93);
const txtBrightBlue = createColorFn(94);
const txtBrightMagenta = createColorFn(95);
const txtBrightCyan = createColorFn(96);
const txtBrightWhite = createColorFn(97);
const colors = {
  txtBlack,
  txtRed,
  txtGreen,
  txtYellow,
  txtBlue,
  txtMagenta,
  txtCyan,
  txtWhite,
  txtBrightBlack,
  txtBrightRed,
  txtBrightGreen,
  txtBrightYellow,
  txtBrightBlue,
  txtBrightMagenta,
  txtBrightCyan,
  txtBrightWhite
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  txtBlack,
  txtBlue,
  txtBrightBlack,
  txtBrightBlue,
  txtBrightCyan,
  txtBrightGreen,
  txtBrightMagenta,
  txtBrightRed,
  txtBrightWhite,
  txtBrightYellow,
  txtCyan,
  txtGreen,
  txtMagenta,
  txtRed,
  txtWhite,
  txtYellow
});
