const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const slugify = require("@sindresorhus/slugify");
const shortcodes = require("./src/_includes/shortcodes");

const permalinkSymbol = `<svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M18 8 C18 8 24 2 27 5 30 8 29 12 24 16 19 20 16 21 14 17 M14 24 C14 24 8 30 5 27 2 24 3 20 8 16 13 12 16 11 18 15"></path></svg>`;

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

  const md = markdownIt({
    html: true, // passthrough raw html in md files
    linkify: true, // auto-link URLs
    typographer: true, // smartquotes, other nicer symbols
  });

  md.use(markdownItAnchor, {
    level: [2, 3],
    slugify, // nicer url slugs
    permalink: true, // show link to headings
    permalinkSymbol, // nice svg link icon
    permalinkAttrs: (slug) => ({ "aria-label": `link to ${slug} section` }),
  });

  config.setLibrary("md", md);

  return {
    dir: {
      input: "src",
    },
  };
};
