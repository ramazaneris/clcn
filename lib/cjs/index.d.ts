export class Clcn {
    info(text: string): void;
    success(text: string): void;
    error(text: string): void;
    warning(text: string): void;
}

export function txtBlack(text: string): string;
export function txtRed(text: string): string;
export function txtGreen(text: string): string;
export function txtYellow(text: string): string;
export function txtBlue(text: string): string;
export function txtMagenta(text: string): string;
export function txtCyan(text: string): string;
export function txtWhite(text: string): string;

export function txtBrightBlack(text: string): string;
export function txtBrightRed(text: string): string;
export function txtBrightGreen(text: string): string;
export function txtBrightYellow(text: string): string;
export function txtBrightBlue(text: string): string;
export function txtBrightMagenta(text: string): string;
export function txtBrightCyan(text: string): string;
export function txtBrightWhite(text: string): string;

export function bgBlack(text: string): string;
export function bgRed(text: string): string;
export function bgGreen(text: string): string;
export function bgYellow(text: string): string;
export function bgBlue(text: string): string;
export function bgMagenta(text: string): string;
export function bgCyan(text: string): string;
export function bgWhite(text: string): string;

export function bgBrightBlack(text: string): string;
export function bgBrightRed(text: string): string;
export function bgBrightGreen(text: string): string;
export function bgBrightYellow(text: string): string;
export function bgBrightBlue(text: string): string;
export function bgBrightMagenta(text: string): string;
export function bgBrightCyan(text: string): string;
export function bgBrightWhite(text: string): string;

export function rainbowText(text: string): string;
export function rainbowBackground(text: string): string;

export function hexText(text: string, hex: string): string;
export function hexBg(text: string, hex: string): string;

export function gradientText(text: string, startHex: string, endHex: string);
export function gradientBackground(
    text: string,
    startHex: string,
    endHex: string
);

export default {
    Clcn,
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
    rainbowText,
    rainbowBackground,
    hexText,
    hexBg,
    gradientText,
    gradientBackground,
};
export as namespace clcn;
