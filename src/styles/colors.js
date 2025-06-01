import { supportsColor } from "../detect/supportsColor.js";

const safeAnsi = (code) => (supportsColor ? `\x1b[${code}m` : "");
const createColorFn = (code) => (text) =>
    `${safeAnsi(code)}${text}${safeAnsi(0)}`;

export const txtBlack = createColorFn(30);
export const txtRed = createColorFn(31);
export const txtGreen = createColorFn(32);
export const txtYellow = createColorFn(33);
export const txtBlue = createColorFn(34);
export const txtMagenta = createColorFn(35);
export const txtCyan = createColorFn(36);
export const txtWhite = createColorFn(37);

export const txtBrightBlack = createColorFn(90);
export const txtBrightRed = createColorFn(91);
export const txtBrightGreen = createColorFn(92);
export const txtBrightYellow = createColorFn(93);
export const txtBrightBlue = createColorFn(94);
export const txtBrightMagenta = createColorFn(95);
export const txtBrightCyan = createColorFn(96);
export const txtBrightWhite = createColorFn(97);

export const colors = {
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
    txtBrightWhite,
};
