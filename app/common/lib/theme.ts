const themeWhite = "#ffffff";
const unit = 4;

const theme = {
  colors: {
    white: themeWhite,
    lightest: "#f7f7f7",
    light: "#e0e0e0",
    dim: "#cccccc"
  },
  animation: {
    time: "0.1s"
  },
  widths: {
    medium: 1000,
    small: 550
  },
  sizes: {
    icon: 6 * unit,
    h1: 8 * unit,
    h2: 6 * unit,
    form: 8 * unit,
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
