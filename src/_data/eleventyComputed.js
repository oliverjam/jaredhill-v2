// const Image = require("@11ty/eleventy-img");

module.exports = {
  navigation: (data) => {
    let nav = [];
    for (let page of data.collections.all) {
      if (page.data.nav) {
        nav.push({
          label: page.data.nav.label,
          order: page.data.nav.order,
          url: page.url,
        });
      }
    }
    return nav.sort((a, b) => a.order - b.order);
  },
  // og: async ({ config, title, page }) => {
  //   if (!page.url || process.env.ELEVENTY_ENV !== "production") return;
  //   const subtitle = config.site.title;
  //   const svg = /*html*/ `
  //     <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewbox="0 0 1200 600">
  //       <style>
  //         text {
  //           font-family: 'Georgia';
  //           font-size: 54pt;
  //           color: #333333;
  //         }
  //         .small {
  //           font-size: 38pt;
  //         }
  //       </style>
  //       <rect width="1200" height="600" fill="#D6EDFF" />
  //       <text x="50%" y="44%" text-anchor="middle">${title}</text>
  //       <rect x="400" y="50%" width="400" height="12" fill="#FFDFBA" />
  //       <text x="50%" y="64%" class="small" text-anchor="middle">${subtitle}</text>
  //     </svg>
  //   `;
  //   const options = {
  //     widths: [1200],
  //     formats: ["jpg"],
  //     outputDir: `./_site/assets/og/`,
  //   };
  //   const stats = await Image(Buffer.from(svg), options);
  //   return stats.jpeg[0].filename;
  // },
};
