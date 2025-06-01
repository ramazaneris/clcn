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
var backgrounds_exports = {};
__export(backgrounds_exports, {
  backgrounds: () => backgrounds,
  bgBlack: () => bgBlack,
  bgBlue: () => bgBlue,
  bgBrightBlack: () => bgBrightBlack,
  bgBrightBlue: () => bgBrightBlue,
  bgBrightCyan: () => bgBrightCyan,
  bgBrightGreen: () => bgBrightGreen,
  bgBrightMagenta: () => bgBrightMagenta,
  bgBrightRed: () => bgBrightRed,
  bgBrightWhite: () => bgBrightWhite,
  bgBrightYellow: () => bgBrightYellow,
  bgCyan: () => bgCyan,
  bgGreen: () => bgGreen,
  bgMagenta: () => bgMagenta,
  bgRed: () => bgRed,
  bgWhite: () => bgWhite,
  bgYellow: () => bgYellow
});
module.exports = __toCommonJS(backgrounds_exports);
var import_supportsColor = require("../detect/supportsColor.js");
const safeAnsi = (code) => import_supportsColor.supportsColor ? `\x1B[${code}m` : "";
const createBgFn = (code) => (text) => `${safeAnsi(code)}${text}${safeAnsi(0)}`;
const bgBlack = createBgFn(40);
const bgRed = createBgFn(41);
const bgGreen = createBgFn(42);
const bgYellow = createBgFn(43);
const bgBlue = createBgFn(44);
const bgMagenta = createBgFn(45);
const bgCyan = createBgFn(46);
const bgWhite = createBgFn(47);
const bgBrightBlack = createBgFn(100);
const bgBrightRed = createBgFn(101);
const bgBrightGreen = createBgFn(102);
const bgBrightYellow = createBgFn(103);
const bgBrightBlue = createBgFn(104);
const bgBrightMagenta = createBgFn(105);
const bgBrightCyan = createBgFn(106);
const bgBrightWhite = createBgFn(107);
const backgrounds = {
  bgBlack,
  bgRed,
  bgGreen,
  bgYellow,
  bgBlue,
  bgMagenta,
  bgCyan,
  bgWhite,
  bgBrightBlack,
  bgBrightRed,
  bgBrightGreen,
  bgBrightYellow,
  bgBrightBlue,
  bgBrightMagenta,
  bgBrightCyan,
  bgBrightWhite
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  backgrounds,
  bgBlack,
  bgBlue,
  bgBrightBlack,
  bgBrightBlue,
  bgBrightCyan,
  bgBrightGreen,
  bgBrightMagenta,
  bgBrightRed,
  bgBrightWhite,
  bgBrightYellow,
  bgCyan,
  bgGreen,
  bgMagenta,
  bgRed,
  bgWhite,
  bgYellow
});
