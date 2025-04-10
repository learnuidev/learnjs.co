/* eslint-disable @typescript-eslint/no-explicit-any */
import color from "color";

const teal = "#4dd4aa";
const blue = "#007cff";
const yellow = "#fbf1a0";

const theme = {
  // basic
  teal,
  blue,
  yellow,

  // derived
  before: {
    bg: yellow,
    fg: color(yellow).darken(0.4).desaturate(0.1).string(),
  },
  after: {
    bg: teal,
    fg: color(teal).darken(0.2).string(),
  },
} as any;

export default theme;
