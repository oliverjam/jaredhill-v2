const html = require("../html");

exports.render = ({ title, config, page, nav, date, readingTime, content }) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}${title && " | "}${config.site.title}</title>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body class="page">
        ${Header({ page, nav, socials: config.site.socials })}
        ${Title({
          title,
          date,
          readingTime: readingTime && getReadingTime(content),
        })}
        <main class="pad-gutter">
          <div class="w-content flow">${content}</div>
        </main>
        ${Footer({ footer: config.site.footer })}
      </body>
    </html>
  `;
};

function Header({ page, nav = [], socials = {} }) {
  return html`
    <header class="hstack wrap gap-xl pad-gutter bg-primary">
      <a href="/">
        <img src="/assets/icons/logo.svg" alt="Home" width="32" height="32" />
      </a>
      <nav class="grow hstack wrap jc-between">
        <ul role="list" class="hstack">
          ${nav.map(Link(page))}
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

function Link(page) {
  return ({ url, label }) => {
    const current =
      page.url === url
        ? "page"
        : page.url.includes(url) && url !== "/"
        ? "true"
        : false;
    return html`
      <li>
        <a href=${url} ${current && `aria-current="${current}"`}>${label}</a>
      </li>
    `;
  };
}

function Title({ title, date, readingTime }) {
  const niceDate = date && readableDate(date);
  const mins = Math.round(readingTime / 60);
  return html`
    <header class="mh-25 cover pad-xl tac bg-primary">
      <div class="w-content vstack">
        <h1>${title}</h1>
        ${date &&
        readingTime &&
        html`
          <div class="hstack gap-sm jc-center">
            <span>${niceDate}</span>
            <span>-</span>
            <time datetime="${readingTime}s">
              ${mins} minute${mins > 1 && "s"}
            </time>
          </div>
        `}
      </div>
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

// very rough estimate in seconds
// don't use regexp to parse html!
function getReadingTime(content) {
  const contentWithoutHtml = content.replace(/(<([^>]+)>)/gi, "");
  const words = contentWithoutHtml.match(/[\u0400-\u04FF]+|\S+\s*/g);
  const wordCount = words ? words.length : 0;
  const wordsPerSecond = 200 / 60;
  const readingTime = wordCount / wordsPerSecond;
  return readingTime;
}

function Footer({ footer }) {
  return html`
    <footer>
      <div class="pad-xxl bg-primary leading-sm">
        <div class="w-content vstack">
          <h2>${footer.contact.title}</h2>
          <p>${footer.contact.body}</p>
        </div>
      </div>
      <div class="pad-xl tac invert">
        <div class="w-content">
          <p>${footer.credit}</p>
        </div>
      </div>
    </footer>
  `;
}
