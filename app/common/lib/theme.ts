import { splitIntoEqualParts } from "./arrays";

function hashToRGB(hash: string): string {
  return splitIntoEqualParts<string>(hash.substr(1).split(""), 3)
    .map(hexColor => parseInt(hexColor.join(""), 16))
    .join();
}

const themeColor = "#ffffff";
const themeAccent = "#a6171d";
const unit = 5;

const theme = {
  colors: {
    themeBG_RGB: hashToRGB(themeColor),
    accent: "#a6171d" as typeof themeAccent,
    accentRGB: hashToRGB(themeAccent),
    danger: "#cd1a23",
    themeWhite: "#ffffff" as typeof themeColor,
    lightest: "#f7f7f7",
    lighter: "#ecedef",
    light: "#e0e0e0",
    dim: "#cccccc",
    dimmer: "#5e5e5e",
    dimmest: "#222222"
  },
  navLinkClassName: "link",
  animation: {
    quicker: "0.1s",
    quick: "0.3s",
    slow: "0.5s"
  },
  widths: {
    medium: 1000,
    small: 550
  },
  heights: {
    header: 12 * unit,
    input: 9 * unit,
    h3: 16,
    line: 19
  },
  sizes: {
    icon: 16
  },
  paddings: {
    standard: unit,
    double: 2 * unit,
    triple: 3 * unit,
    quadruple: 4 * unit,
    half: 0.5 * unit
  },
  border: {
    radius: {
      half: Math.floor(0.25 * unit),
      standard: Math.floor(0.5 * unit),
      double: Math.floor(unit),
      triple: Math.floor(1.5 * unit)
    }
  }
};

export default theme;
