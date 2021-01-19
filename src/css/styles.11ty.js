const fs = require("fs").promises;
const path = require("path");

exports.data = {
  layout: false,
  permalink: "css/styles.css",
};

const files = ["reset.css"];

exports.render = async ({ config }) => {
  const contents = await Promise.all(
    files.map((name) => fs.readFile(path.join(__dirname, name)))
  );

  const themeVars = Object.entries(config.theme.colors).map(
    ([name, hex]) => `--${name}: ${hex};`
  );

  return `
:root {
  ${themeVars.join("\n")}
}

${contents.join("\n")}
  `.trim();
};
