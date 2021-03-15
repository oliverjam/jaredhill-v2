const shortcodes = require("./src/_includes/shortcodes");

module.exports = (config) => {
  config.addWatchTarget("src/css");
  config.addPassthroughCopy({ "src/assets/favicon.ico": "favicon.ico" });
  config.addPassthroughCopy("src/assets");
  config.addPassthroughCopy("src/work/**/*.{png,jpg,gif}");
  // merges directory-level data with template-specific data when keys clash
  config.setDataDeepMerge(true);

  Object.entries(shortcodes).forEach((code) =>
    config.addPairedShortcode(...code)
  );
  return {
    dir: {
      input: "src",
    },
  };
};
