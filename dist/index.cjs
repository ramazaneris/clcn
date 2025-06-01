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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  Clcn: () => import_Clcn.Clcn
});
module.exports = __toCommonJS(index_exports);
var import_Clcn = require("./Clcn.js");
__reExport(index_exports, require("./styles/colors.js"), module.exports);
__reExport(index_exports, require("./styles/backgrounds.js"), module.exports);
__reExport(index_exports, require("./styles/rainbow.js"), module.exports);
__reExport(index_exports, require("./styles/hex.js"), module.exports);
__reExport(index_exports, require("./styles/gradient.js"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Clcn,
  ...require("./styles/colors.js"),
  ...require("./styles/backgrounds.js"),
  ...require("./styles/rainbow.js"),
  ...require("./styles/hex.js"),
  ...require("./styles/gradient.js")
});
