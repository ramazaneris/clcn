function supportsColor() {
    if (process.env.NO_COLOR) return false;
    if (process.env.FORCE_COLOR) return true;
    if (process.platform === "win32") return true;
    const term = process.env.TERM || "";
    return /-256color$/.test(term) || /xterm/.test(term);
}

export { supportsColor };
