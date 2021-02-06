const fs = require("fs").promises;
const path = require("path");

exports.data = {
  layout: false,
  permalink: "css/styles.css",
};

const files = ["reset.css", "global.css", "layout.css", "utilities.css"];

exports.render = async ({ config }) => {
  const contents = await Promise.all(
    files.map((name) => fs.readFile(path.join(__dirname, "partials", name)))
  );

  const colors = Object.entries(config.theme.colors).map(jsonToCss);
  const sizes = Object.entries(config.theme.sizes).map(jsonToCss);

  return `
html {
  ${colors.join("\n")}
  ${sizes.join("\n")}
}

${contents.join("\n")}
  `.trim();
};

function jsonToCss([key, value]) {
  return `--${key}: ${value};`;
}
