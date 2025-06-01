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
var rainbow_exports = {};
__export(rainbow_exports, {
  rainbowBackground: () => rainbowBackground,
  rainbowText: () => rainbowText
});
module.exports = __toCommonJS(rainbow_exports);
var import_supportsColor = require("../detect/supportsColor.js");
function generateRainbow(text, codes) {
  if (!(0, import_supportsColor.supportsColor)()) return text;
  const chars = text.split("");
  let result = "";
  let i = 0;
  for (const ch of chars) {
    if (ch === " ") {
      result += "\x1B[0m ";
      continue;
    }
    result += `\x1B[${codes[i % codes.length]}m${ch}`;
    i++;
  }
  return result + "\x1B[0m";
}
const rainbowText = (text) => generateRainbow(text, [31, 33, 32, 34, 35]);
const rainbowBackground = (text) => generateRainbow(text, [41, 43, 42, 44, 45]);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  rainbowBackground,
  rainbowText
});
