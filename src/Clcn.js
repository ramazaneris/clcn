import { supportsColor } from "./detect/supportsColor.js";

class Clcn {
    constructor() {
        if (!supportsColor()) {
            console.warn(
                "Clcn: Color support is disabled. Install 'supports-color' package to enable colors."
            );
        }
    }

    info(text) {
        console.log(supportsColor() ? `\x1b[44m${text}\x1b[0m` : text);
    }

    success(text) {
        console.log(supportsColor() ? `\x1b[42m${text}\x1b[0m` : text);
    }

    error(text) {
        console.log(supportsColor() ? `\x1b[41m${text}\x1b[0m` : text);
    }

    warning(text) {
        console.log(supportsColor() ? `\x1b[43m${text}\x1b[0m` : text);
    }

    custom(colorCode, text) {
        console.log(supportsColor() ? `${colorCode}${text}\x1b[0m` : text);
    }
}

export { Clcn };
