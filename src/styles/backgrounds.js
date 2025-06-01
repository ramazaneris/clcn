import { supportsColor } from "../detect/supportsColor.js";
const safeAnsi = (code) => (supportsColor ? `\x1b[${code}m` : "");
const createBgFn = (code) => (text) => `${safeAnsi(code)}${text}${safeAnsi(0)}`;

export const bgBlack = createBgFn(40);
export const bgRed = createBgFn(41);
export const bgGreen = createBgFn(42);
export const bgYellow = createBgFn(43);
export const bgBlue = createBgFn(44);
export const bgMagenta = createBgFn(45);
export const bgCyan = createBgFn(46);
export const bgWhite = createBgFn(47);

export const bgBrightBlack = createBgFn(100);
export const bgBrightRed = createBgFn(101);
export const bgBrightGreen = createBgFn(102);
export const bgBrightYellow = createBgFn(103);
export const bgBrightBlue = createBgFn(104);
export const bgBrightMagenta = createBgFn(105);
export const bgBrightCyan = createBgFn(106);
export const bgBrightWhite = createBgFn(107);

export const backgrounds = {
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
    bgBrightWhite,
};
