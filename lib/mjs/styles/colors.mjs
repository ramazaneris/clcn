import { supportsColor } from "../detect/supportsColor.mjs";
const safeAnsi = (code) => supportsColor ? `\x1B[${code}m` : "";
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
export {
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
};
