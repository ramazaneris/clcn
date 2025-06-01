# 🎨 clcn — Terminal Coloring Utility for Node.js

`clcn` is a lightweight and terminal-safe coloring utility for Node.js.  
It supports ANSI, HEX/truecolor, gradients, rainbow effects, and works with both CommonJS and ESM.

---

## ⚠️ Module Format

> ✅ This package supports **both ESM and CommonJS**:
>
> -   Use `import { txtRed } from 'clcn'` in ESM projects (`"type": "module"` or `.mjs`)
> -   Use `const { txtRed } = require('clcn')` in CommonJS projects

---

## 🚀 Installation

```bash
npm install clcn
```

or

```bash
yarn add clcn
```

---

## 🔧 Basic Usage

```js
// ESM
import { txtRed, gradientText } from "clcn";

// CommonJS
// const { txtRed, gradientText } = require("clcn");

console.log(txtRed("Red text"));
console.log(gradientText("Gradient!", "#ff0000", "#00ccff"));
```

---

## 🎨 Color Functions

### ✅ Foreground text

-   `txtRed(text)`
-   `txtGreen(text)`
-   `txtYellow(text)`
-   `txtBrightRed(text)` _(and other bright variants)_

### ✅ Background colors

-   `bgRed(text)`
-   `bgGreen(text)`
-   `bgBlue(text)`
-   `bgBrightYellow(text)`

---

## 🌈 Special Effects

-   `hexText(text, "#RRGGBB")`
-   `hexBg(text, "#RRGGBB")`
-   `gradientText(text, fromHex, toHex)`
-   `gradientBackground(text, fromHex, toHex)`
-   `rainbowText(text)`
-   `rainbowBackground(text)`

---

## 📸 Terminal Demo Output

<p align="center">
  <img src="./demo/demo.png" alt="clcn color demo in terminal" width="500" />
</p>

This demo includes:

-   Clcn class messages (info, success, warning, error)
-   Foreground and background ANSI colors
-   HEX truecolor
-   Rainbow and gradient effects

---

## 🛡️ Terminal Compatibility

`clcn` automatically detects color support:

| Variable              | Effect                |
| --------------------- | --------------------- |
| `TERM=xterm-256color` | Enables full colors   |
| `NO_COLOR=1`          | Disables all coloring |
| `FORCE_COLOR=1`       | Forces color output   |

---

## ✅ Node Compatibility

| Terminal             | 24-bit RGB | Rainbow | Gradient | HEX |
| -------------------- | ---------- | ------- | -------- | --- |
| VS Code Terminal     | ✅         | ✅      | ✅       | ✅  |
| iTerm2 (macOS)       | ✅         | ✅      | ✅       | ✅  |
| WSL / Git Bash       | ✅         | ✅      | ✅       | ✅  |
| Windows cmd (legacy) | ❌         | ⚠️      | ❌       | ❌  |

---

## 📜 License

MIT © 2025  
Developed by [Ramco](https://ramco.dev)

---

## 🤝 Contributing

Feel free to [open an issue](https://github.com/ramazaneris/clcn/issues) or submit a pull request.
