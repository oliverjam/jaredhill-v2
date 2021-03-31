let palette = {
  lightBlue: "#D6EDFF",
  darkerBlue: "#BFE3FF",
  lightOrange: "#FFDFBA",
  textGrey: "#333333",
  textGreyLight: "hsl(0, 0%, 66%)",
  lighterGrey: "#F1F1F1",
  bgGrey: "#FAFAFA",
  white: "#FFFFFF",
};

exports.colors = {
  primary: palette.lightBlue,
  secondary: palette.darkerBlue,
  alternate: palette.lightOrange,
  text: palette.textGrey,
  textLight: palette.textGreyLight,
  "bg-white": palette.white,
  "bg-grey": palette.bgGrey,
  "bg-mid": palette.lighterGrey,
  white: palette.white,
};

exports.sizes = {
  gutter: "clamp(1rem, 1rem + 4vw, 4rem)",
  "measure-wide": "70rem",
  "measure-narrow": "60ch",
  "font-body-min": "1rem",
  "font-body-max": "1.4rem",
};

exports.fonts = {
  body: "Spectral",
  heading: "Lato",
};
