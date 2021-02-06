let palette = {
  lightBlue: "#D6EDFF",
  darkerBlue: "#BFE3FF",
  lightOrange: "#FFDFBA",
  textGrey: "#333333",
  textGreyAA: "#767676",
  lighterGrey: "#767676",
  bgGrey: "#FAFAFA",
  white: "#FFFFFF",
};

exports.colors = {
  primary: palette.lightBlue,
  secondary: palette.darkerBlue,
  alternate: palette.lightOrange,
  text: palette.textGrey,
  textAA: palette.textGreyAA,
  bg: palette.bgGrey,
  white: palette.white,
};

exports.sizes = {
  gutter: "clamp(1rem, 1rem + 4vw, 4rem)",
  measure: "60ch",
  "font-body-min": "1rem",
  "font-body-max": "1.5rem",
};

exports.fonts = {
  body: "Spectral",
};
