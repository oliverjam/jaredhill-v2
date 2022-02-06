const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownLinks = require("markdown-it-link-attributes");
const slugify = require("@sindresorhus/slugify");
const { paired, single } = require("./src/_includes/shortcodes");

const permalinkSymbol = `<svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M18 8 C18 8 24 2 27 5 30 8 29 12 24 16 19 20 16 21 14 17 M14 24 C14 24 8 30 5 27 2 24 3 20 8 16 13 12 16 11 18 15"></path></svg>`;

module.exports = (config) => {
  config.addWatchTarget("src/css");
  config.addPassthroughCopy({ "src/assets/favicon.ico": "favicon.ico" });
  config.addPassthroughCopy("src/assets");
  config.addPassthroughCopy("src/work/**/*.{png,jpg,gif}");

  Object.entries(single).forEach((code) => config.addShortcode(...code));
  Object.entries(paired).forEach((code) => config.addPairedShortcode(...code));

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

  md.use(markdownLinks, {
    matcher(href) {
      // match any links starting with http or https
      return href.match(/^https?:/);
    },
    attrs: {
      target: "_blank",
      rel: "noopener",
    },
  });

  config.setLibrary("md", md);

  md.disable("code");

  return {
    dir: {
      input: "src",
    },
  };
};
