const pluginWebc = require("@11ty/eleventy-plugin-webc");
const markdownItAnchor = require("markdown-it-anchor");
const markdownLinks = require("markdown-it-link-attributes");
const tableOfContents = require("eleventy-plugin-toc");

let options = {
  dir: { input: "src", layouts: "_layouts" },
  htmlTemplateEngine: "webc",
  markdownTemplateEngine: "webc",
};

module.exports = function (config) {
  config.addWatchTarget("src/_css");

  config.amendLibrary("md", markdown);
  config.addPlugin(pluginWebc, {
    components: `${options.dir.input}/_components/**/*.html`,
  });
  config.addPlugin(tableOfContents, { tags: ["h2"] });

  // browsers expect favicons to be served at the site root
  config.addPassthroughCopy({ "src/_assets/favicon.ico": "favicon.ico" });
  // all other assets are served from /assets
  config.addPassthroughCopy({ "src/_assets": "assets" });
  // so images can be co-located with case studies rather than in _assets
  config.addPassthroughCopy("src/{work,blog}/**/*.{png,jpg,gif,webp}");

  config.addFilter("assert", assert);
  config.addFilter("readingTime", readingTime);
  config.addFilter("inMinutes", inMinutes);
  config.addFilter("readableDate", readableDate);
  config.addFilter("relativeTime", relativeTime);
  config.addFilter("ariaCurrent", ariaCurrent);

  return options;
};

function markdown(md) {
  md.set({ linkify: true, typographer: true })
    // add icon links to every h2/h3
    .use(markdownItAnchor, {
      level: [2, 3],
      permalink: true,
      permalinkSymbol: `<svg width="24" height="24"><use href="/assets/icons.svg#link" /></svg>`,
      permalinkAttrs: (slug) => ({ "aria-label": `link to ${slug} section` }),
    })
    // make sure links to external sites open in new tab
    .use(markdownLinks, {
      matcher: (href) => href.match(/^https?:/),
      attrs: { target: "_blank", rel: "noopener" },
    });
}

function assert(x, msg = "") {
  if (!x) {
    throw new Error(msg);
  }
}

function readingTime(content) {
  const contentWithoutHtml = content.replace(/(<([^>]+)>)/gi, "");
  const words = contentWithoutHtml.match(/[\u0400-\u04FF]+|\S+\s*/g);
  const wordCount = words ? words.length : 0;
  const wordsPerSecond = 200 / 60;
  return wordCount / wordsPerSecond;
}

function inMinutes(seconds) {
  let mins = Math.round(seconds / 60);
  let label = "minute";
  if (mins !== 1) label += "s";
  return mins + " " + label;
}

function readableDate(date) {
  let options = { month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
}

function relativeTime(then) {
  const now = new Date();

  const yearDiff = now.getFullYear() - then.getFullYear();
  const monthDiff = now.getMonth() - then.getMonth();
  const dayDiff = now.getDay() - then.getDay();
  const dateDiff = now.getDate() - then.getDate();
  const startOfLastWeek = now.getDay() + 7;

  if (yearDiff > 0) return "More than a year ago";
  if (monthDiff > 1) return "This year";
  if (monthDiff === 1) return "Last month";
  if (dateDiff === 1) return "Yesterday";
  if (dateDiff === 0) return "Today";
  if (dateDiff >= startOfLastWeek) return "This month";
  if (dateDiff < today) return "This week";
  if (dayDiff < startOfLastWeek) return "Last week";
}

function ariaCurrent(current, href) {
  if (current === href) return "page";
  if (current.includes(href) && href !== "/") return true;
}
