const html = require("../html");

exports.render = ({ title, config, nav, date, readingTime, content }) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}${title && " | "}${config.site.title}</title>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body>
        ${Header({ nav, socials: config.site.socials })}
        ${Title({ title, date, readingTime })}
        <main class="pad-gutter">${content}</main>
      </body>
    </html>
  `;
};

function Header({ nav = [], socials = {} }) {
  return html`
    <header class="hstack wrap gap-xl pad-gutter bg-primary">
      <a href="/">
        <img src="/assets/icons/logo.svg" alt="Home" width="32" height="32" />
      </a>
      <nav class="grow hstack wrap jc-between">
        <ul role="list" class="hstack">
          ${nav.map(
            (page) => html`
              <li>
                <a href=${page.url}>${page.label}</a>
              </li>
            `
          )}
        </ul>
        <ul role="list" class="hstack hide-on-mobile">
          ${Object.entries(socials).map(
            ([name, { url, icon }]) => html`
              <li>
                <a href=${url}>
                  <img src=${icon} alt="${name}" width="24" height="24" />
                </a>
              </li>
            `
          )}
        </ul>
      </nav>
    </header>
  `;
}

function Title({ title, date, readingTime }) {
  const niceDate = date && readableDate(date);
  return html`
    <header class="pad-xxl tac bg-primary">
      <h1>${title}</h1>
      ${date && readingTime && html`<div>${niceDate} - ${readingTime}</div>`}
    </header>
  `;
}

function readableDate(date) {
  return date.toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
