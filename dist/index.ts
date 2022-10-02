"use strict";

interface Colors {
  "txt:black": "\x1b[30m";
  "txt:red": "\x1b[31m";
  "txt:green": "\x1b[32m";
  "txt:yellow": "\x1b[33m";
  "txt:blue": "\x1b[34m";
  "txt:magenta": "\x1b[35m";
  "txt:cyan": "\x1b[36m";
  "txt:white": "\x1b[37m";
  "bg:black": "\x1b[40m";
  "bg:red": "\x1b[41m";
  "bg:green": "\x1b[42m";
  "bg:yellow": "\x1b[43m";
  "bg:blue": "\x1b[44m";
  "bg:magenta": "\x1b[45m";
  "bg:cyan": "\x1b[46m";
  "bg:white": "\x1b[47m";
}
/**
 * Can colored console
 * @see
 */
export default class coloredConsole {
  private colors: any = {
    "txt:black": "\x1b[30m",
    "txt:red": "\x1b[31m",
    "txt:green": "\x1b[32m",
    "txt:yellow": "\x1b[33m",
    "txt:blue": "\x1b[34m",
    "txt:magenta": "\x1b[35m",
    "txt:cyan": "\x1b[36m",
    "txt:white": "\x1b[37m",
    "bg:black": "\x1b[40m",
    "bg:red": "\x1b[41m",
    "bg:green": "\x1b[42m",
    "bg:yellow": "\x1b[43m",
    "bg:blue": "\x1b[44m",
    "bg:magenta": "\x1b[45m",
    "bg:cyan": "\x1b[46m",
    "bg:white": "\x1b[47m",
  };
  constructor() {
    return this;
  }
  /**
   * @param {string} log Can log to console something with settings
   * @param {string} color Can chose the text color or backgroundcolor
   * @param {string} text Can write console message
   **/
  log<Color extends keyof Colors>(color: Color, text: string) {
    if (!color) {
      console.log(this.colors["txt:red"] + "U+26A0 color is empty" + "\x1b[0m");
    }
    if (!text) return console.error("Text field is empty");
    console.log((color ? this.colors[color] : "") + text + "\x1b[0m");
  }
}
