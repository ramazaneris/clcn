import { supportsColor } from "./detect/supportsColor.mjs";
class Clcn {
  info(text) {
    console.log(supportsColor ? `\x1B[44m${text}\x1B[0m` : text);
  }
  success(text) {
    console.log(supportsColor ? `\x1B[42m${text}\x1B[0m` : text);
  }
  error(text) {
    console.log(supportsColor ? `\x1B[41m${text}\x1B[0m` : text);
  }
  warning(text) {
    console.log(supportsColor ? `\x1B[43m${text}\x1B[0m` : text);
  }
  custom(colorCode, text) {
    console.log(supportsColor ? `${colorCode}${text}\x1B[0m` : text);
  }
}
export {
  Clcn
};
