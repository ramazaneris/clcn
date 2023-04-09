# Clcn - colored console

## Description

Paint your console

- [First example](#example)
- [Functions](#functions)
  - [Colors](#colors)
  - [Rainbow colors](#rainbow-colors)

### Example

CommonJS

```js
const clcn = require("clcn");

console.log(clcn.txtRed("Uwu, this text is red"));
```

ES Module

```js
import clcn from "clcn";

console.log(clcn.textRed("Uwu, this text is red"));
```

### Functions

#### Colors

- Black
  - Text color
    `txtBlack(string)`
  - Background color
    `bgBlack(string)`
- Red
  - Text color
    `txtRed(string)`
  - Background color
    `bgRed(string)`
- Green
  - Text color
    `txtGreen(string)`
  - Background color
    `bgGreen(string)`
- Yellow
  - Text color
    `txtYellow(string)`
  - Background color
    `bgYellow(string)`
- Blue
  - Text color
    `txtBlue(string)`
  - Background color
    `bgBlue(string)`
- Magenta
  - Text color
    `txtMagenta(string)`
  - Background color
    `bgMagenta(string)`
- Cyan
  - Text color
    `txtCyan(string)`
  - Background color
    `bgCyan(string)`
- White
  - Text color
    `txtWhite(string)`
  - Background color
    `bgWhite(string)`

### Rainbow Colors

- Rainbow
  - Text color
    `rainbowText(string)`
  - Background color
    `rainbowBackground(string)`
