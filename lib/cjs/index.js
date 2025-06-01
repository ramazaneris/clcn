var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);
__reExport(index_exports, require("./Clcn.js"), module.exports);
__reExport(index_exports, require("./styles/colors.js"), module.exports);
__reExport(index_exports, require("./styles/backgrounds.js"), module.exports);
__reExport(index_exports, require("./styles/rainbow.js"), module.exports);
__reExport(index_exports, require("./styles/hex.js"), module.exports);
__reExport(index_exports, require("./styles/gradient.js"), module.exports);
var index_default = {
  Clcn,
  ...import("./styles/colors.js"),
  ...import("./styles/backgrounds.js"),
  ...import("./styles/rainbow.js"),
  ...import("./styles/hex.js"),
  ...import("./styles/gradient.js")
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./Clcn.js"),
  ...require("./styles/colors.js"),
  ...require("./styles/backgrounds.js"),
  ...require("./styles/rainbow.js"),
  ...require("./styles/hex.js"),
  ...require("./styles/gradient.js")
});
