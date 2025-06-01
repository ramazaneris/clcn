import { supportsColor } from "../detect/supportsColor.mjs";
function generateRainbow(text, codes) {
  if (!supportsColor()) return text;
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
export {
  rainbowBackground,
  rainbowText
};
