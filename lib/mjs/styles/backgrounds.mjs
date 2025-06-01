import { supportsColor } from "../detect/supportsColor.mjs";
const safeAnsi = (code) => supportsColor ? `\x1B[${code}m` : "";
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
export {
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
};
