const fs = require("fs").promises;
const path = require("path");

exports.data = {
  layout: false,
  permalink: "css/styles.css",
};

const files = [
  "reset.css",
  "global.css",
  "layout.css",
  "components.css",
  "utilities.css",
];

exports.render = async ({ config }) => {
  const contents = await Promise.all(
    files.map((name) => fs.readFile(path.join(__dirname, "partials", name)))
  );

  const vars = Object.values(config.theme)
    .flatMap(Object.entries)
    .map(jsonToCss);

  return `
html {
  ${vars.join("\n")}
}

${contents.join("\n")}
  `.trim();
};

function jsonToCss([key, value]) {
  return `--${key}: ${value};`;
}
