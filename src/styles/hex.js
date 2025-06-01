import { supportsColor } from "../detect/supportsColor.js";
import { hexToRgb } from "../utils/hexToRgb.js";

/**
 * Convert a hex color string to an RGB object.
 * @param {string} hex - The hex color string.
 * @returns {{r: number, g: number, b: number}} - The RGB representation.
 */
function hexText(text, hex) {
    if (!supportsColor) return text;
    const { r, g, b } = hexToRgb(hex);
    return `\x1b[38;2;${r};${g};${b}m${text}\x1b[0m`;
}

/**
 * Convert a hex color string to an RGB object.
 * @param {string} hex - The hex color string.
 * @returns {{r: number, g: number, b: number}} - The RGB representation.
 */
function hexBg(text, hex) {
    if (!supportsColor) return text;
    const { r, g, b } = hexToRgb(hex);
    return `\x1b[48;2;${r};${g};${b}m${text}\x1b[0m`;
}
export { hexText, hexBg };
