module.exports = (config) => {
  config.addWatchTarget("src/css");
  config.addPassthroughCopy("src/assets");
  return {
    dir: {
      input: "src",
    },
  };
};
