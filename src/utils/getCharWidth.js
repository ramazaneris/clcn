function getCharWidth(char) {
    if (
        char === " " ||
        char === "." ||
        char === "," ||
        char === "i" ||
        char === "l"
    )
        return 0.5;
    if ("MW".includes(char)) return 1.5;
    return 1;
}

export { getCharWidth };
