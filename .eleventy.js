module.exports = (config) => {
  config.addWatchTarget("src/css");
  config.addPassthroughCopy("src/assets");
  // merges directory-level data with template-specific data when keys clash
  config.setDataDeepMerge(true);
  return {
    dir: {
      input: "src",
    },
  };
};
