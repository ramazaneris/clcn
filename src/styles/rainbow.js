import { supportsColor } from "../detect/supportsColor.js";

function generateRainbow(text, codes) {
    if (!supportsColor()) return text;

    const chars = text.split("");
    let result = "";
    let i = 0;

    for (const ch of chars) {
        if (ch === " ") {
            result += "\x1b[0m ";
            continue;
        }
        result += `\x1b[${codes[i % codes.length]}m${ch}`;
        i++;
    }

    return result + "\x1b[0m";
}
export const rainbowText = (text) => generateRainbow(text, [31, 33, 32, 34, 35]);
export const rainbowBackground = (text) => generateRainbow(text, [41, 43, 42, 44, 45]);
