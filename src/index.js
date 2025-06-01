export { Clcn } from "./Clcn.js";
export * from "./styles/colors.js";
export * from "./styles/backgrounds.js";
export * from "./styles/rainbow.js";
export * from "./styles/hex.js";
export * from "./styles/gradient.js";

export default {
    Clcn,
    ...import("./styles/colors.js"),
    ...import("./styles/backgrounds.js"),
    ...import("./styles/rainbow.js"),
    ...import("./styles/hex.js"),
    ...import("./styles/gradient.js"),
};
