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
var Clcn_exports = {};
__export(Clcn_exports, {
  Clcn: () => Clcn
});
module.exports = __toCommonJS(Clcn_exports);
var import_supportsColor = require("./detect/supportsColor.js");
class Clcn {
  constructor() {
    if (!(0, import_supportsColor.supportsColor)()) {
      console.warn(
        "Clcn: Color support is disabled. Install 'supports-color' package to enable colors."
      );
    }
  }
  info(text) {
    console.log((0, import_supportsColor.supportsColor)() ? `\x1B[44m${text}\x1B[0m` : text);
  }
  success(text) {
    console.log((0, import_supportsColor.supportsColor)() ? `\x1B[42m${text}\x1B[0m` : text);
  }
  error(text) {
    console.log((0, import_supportsColor.supportsColor)() ? `\x1B[41m${text}\x1B[0m` : text);
  }
  warning(text) {
    console.log((0, import_supportsColor.supportsColor)() ? `\x1B[43m${text}\x1B[0m` : text);
  }
  custom(colorCode, text) {
    console.log((0, import_supportsColor.supportsColor)() ? `${colorCode}${text}\x1B[0m` : text);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Clcn
});
