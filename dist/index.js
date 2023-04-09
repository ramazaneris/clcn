let colors = [
  "\x1b[30m",
  "\x1b[31m",
  "\x1b[32m",
  "\x1b[33m",
  "\x1b[34m",
  "\x1b[35m",
  "\x1b[36m",
  "\x1b[37m",
  "\x1b[40m",
  "\x1b[41m",
  "\x1b[42m",
  "\x1b[43m",
  "\x1b[44m",
  "\x1b[45m",
  "\x1b[46m",
  "\x1b[47m",
];
function txtBlack(text) {
  return "\x1b[30m" + text + "\x1b[0m";
}

function txtRed(text) {
  return "\x1b[31m" + text + "\x1b[0m";
}

function txtGreen(text) {
  return "\x1b[32m" + text + "\x1b[0m";
}
function txtYellow(text) {
  return "\x1b[33m" + text + "\x1b[0m";
}

function txtBlue(text) {
  return "\x1b[34m" + text + "\x1b[0m";
}

function txtMagenta(text) {
  return "\x1b[35m" + text + "\x1b[0m";
}

function txtCyan(text) {
  return "\x1b[36m" + text + "\x1b[0m";
}

function txtWhite(text) {
  return "\x1b[37m" + text + "\x1b[0m";
}
//-----
function bgBlack(text) {
  return "\x1b[40m" + text + "\x1b[0m";
}

function bgRed(text) {
  return "\x1b[41m" + text + "\x1b[0m";
}

function bgGreen(text) {
  return "\x1b[42m" + text + "\x1b[0m";
}
function bgYellow(text) {
  return "\x1b[43m" + text + "\x1b[0m";
}

function bgBlue(text) {
  return "\x1b[44m" + text + "\x1b[0m";
}

function bgMagenta(text) {
  return "\x1b[45m" + text + "\x1b[0m";
}

function bgCyan(text) {
  return "\x1b[46m" + text + "\x1b[0m";
}

function bgWhite(text) {
  return "\x1b[47m" + text + "\x1b[0m";
}

let rainbowTxtColors = [
  "\x1b[31m",
  "\x1b[33m",
  "\x1b[32m",
  "\x1b[34m",
  "\x1b[35m",
];

function rainbowText(text) {
  let rainbowText = "";
  let textArr = text.split("");
  let colori = 0;
  for (let i = 0; i < textArr.length; i++) {
    rainbowText =
      rainbowText +
      (textArr[i] === "\u0020" ? "\x1b[0m" : rainbowTxtColors[colori]) +
      text.split("")[i];
    textArr[i] === "\u0020" ? null : colori++;
    if (colori === 5) {
      colori = 0;
    }
  }
  return rainbowText + "\x1b[0m";
}

let rainbowBgColors = [
  "\x1b[41m",
  "\x1b[43m",
  "\x1b[42m",
  "\x1b[44m",
  "\x1b[45m",
];
function rainbowBackground(text) {
  let rainbowText = "";
  let textArr = text.split("");
  let colori = 0;
  for (let i = 0; i < textArr.length; i++) {
    rainbowText =
      rainbowText +
      (textArr[i] === "\u0020" ? "\x1b[0m" : rainbowBgColors[colori]) +
      text.split("")[i];
    textArr[i] === "\u0020" ? null : colori++;
    if (colori === 5) {
      colori = 0;
    }
  }
  return rainbowText + "\x1b[0m";
}
module.exports = {
  txtBlack,
  txtRed,
  txtGreen,
  txtYellow,
  txtBlue,
  txtMagenta,
  txtCyan,
  txtWhite,
  bgBlack,
  bgRed,
  bgGreen,
  bgYellow,
  bgBlue,
  bgMagenta,
  bgCyan,
  bgWhite,
  rainbowText,
  rainbowBackground,
};
