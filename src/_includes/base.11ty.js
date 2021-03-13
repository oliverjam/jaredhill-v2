const html = require("../html");

exports.render = (data) => {
  const {
    title,
    config,
    og,
    page,
    navigation,
    intro,
    date,
    readingTime,
    padding = true,
    measure = "narrow",
    blocks,
    content,
    js = [],
    footer = true,
  } = data;
  const { site, theme } = config;
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}${title && " | "}${site.title}</title>
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="${googleFonts(theme.fonts)}" rel="stylesheet" />

        <meta name="description" content="${site.description}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${site.description}" />
        <meta property="og:image" content="${site.base_url}/assets/og/${og}" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="${site.socials.twitter.user}" />
        <meta name="keywords" content="blog, tech, design, ux, ui" />
      </head>
      <body class="page">
        ${SiteHeader({ page, navigation, socials: site.socials })}
        ${intro
          ? Intro(intro)
          : Title({
              title,
              date,
              seconds: readingTime && getReadingTime(content),
            })}
        <main class="layout ${padding && "py-gutter"} ${measure} flow">
          ${blocks ? blocks.map(renderBlock(data)) : content}
        </main>
        <footer>
          ${footer && Contact(site.footer.contact)}
          ${Socials({
            socials: site.socials,
            size: 32,
            className: "hide-above-mobile pad-lg gap-xxl jc-center",
          })}
          ${Credit(site.footer)}
        </footer>
        ${js.map(
          (name) => html`
            <script src="/assets/js/${name}.js" type="module"></script>
          `
        )}
      </body>
    </html>
  `;
};

function googleFonts({ body, heading }) {
  const bodyFont = `family=${body}:ital,wght@0,400;0,600;1,400;1,600`;
  const headingFont = `family=${heading}:wght@700`;
  return `https://fonts.googleapis.com/css2?${bodyFont}&${headingFont}&display=swap`;
}

function SiteHeader({ page, navigation = [], socials = {} }) {
  return html`
    <header
      class="hstack wrap gap-xl fz-md bg-primary"
      style="padding: 2rem var(--gutter)"
    >
      <a href="/">
        <img src="/assets/icons/logo.svg" alt="Home" width="32" height="32" />
      </a>
      <nav class="grow hstack wrap jc-between font-sans">
        <ul role="list" class="hstack">
          ${navigation.map(Link(page))}
        </ul>
        ${Socials({ socials, className: "hide-on-mobile" })}
      </nav>
    </header>
  `;
}

function Socials({ socials, className, size = 24 }) {
  return html`
    <ul role="list" class="hstack ${className}">
      ${Object.entries(socials).map(
        ([name, { url, icon }]) => html`
          <li>
            <a href=${url}>
              <img src=${icon} alt="${name}" width="${size}" height="${size}" />
            </a>
          </li>
        `
      )}
    </ul>
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

function Title({ title, date, seconds }) {
  return html`
    <header class="mh-25 cover pad-gutter text-align:center bg-primary">
      <div class="center narrow vstack ji-center">
        <h1>${title}</h1>
        ${date && seconds && PostMeta({ date, seconds })}
      </div>
    </header>
  `;
}

function Intro({ quotes = [], description }) {
  return html`
    <header class="mh-25 cover pad-gutter bg-primary">
      <div class="center narrow vstack gap-xl">
        <animated-carousel>
          <ul role="list">
            ${quotes.map(
              (quote, index) => html`
                <li style="--i: ${index}">
                  <blockquote class="vstack font-sans fw-500">
                    <div class="highlight">
                      <p class="fz-xxl">“${quote.body}”</p>
                    </div>
                    <div class="highlight">
                      <cite class="">- ${quote.author}</cite>
                    </div>
                  </blockquote>
                </li>
              `
            )}
          </ul>
        </animated-carousel>
        <p style="white-space: break-spaces">${description}</p>
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

function PostMeta({ date, seconds, className = "" }) {
  const niceDate = readableDate(date);
  const mins = Math.round(seconds / 60);
  return html`
    <div class="hstack gap-sm ${className}">
      <span>${niceDate}</span>
      <span>-</span>
      <time datetime="${seconds}s"> ${mins} minute${mins > 1 && "s"} </time>
    </div>
  `;
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

function Contact({ title, body }) {
  return html`
    <div class="pad-gutter bg-primary leading-sm">
      <div class="center narrow vstack">
        <h2 class="fz-inherit">${title}</h2>
        <p>${body}</p>
      </div>
    </div>
  `;
}

function Credit({ credit }) {
  return html`
    <div class="pad-xl tac invert fz-md">
      <div class="center narrow">
        <p>${credit}</p>
      </div>
    </div>
  `;
}

const components = {
  blog,
  heading,
  section,
  text,
  tags,
  work,
  form,
  input,
  button,
};

function renderBlock(data) {
  return ({ type, ...props }) => {
    const component = components[type];
    if (!component) throw new Error(`Unrecognise block type: ${type}`);
    if (Array.isArray(props.content)) {
      props.content = props.content.map(renderBlock(data));
    } else if (typeof props.content === "object") {
      props.content = renderBlock(data)(props.content);
    }
    return component(data, props);
  };
}

function blog(data, { tag = "blog", limit } = {}) {
  const pages = data.collections[tag];
  if (!pages) throw new Error(`Cannot find collection ${tag}`);
  return html`
    <ul role="list" class="grid gap-xl">
      ${pages
        .slice(0, limit)
        .reverse()
        .map(
          ({ url, data }) => html`
            <li ${!limit && `class="list-separator"`}>
              <div class="vstack gap-sm">
                <a href=${url} class="td-hover leading-sm">${data.title}</a>
                ${PostMeta({
                  date: data.date,
                  seconds: getReadingTime(data.content),
                  className: "color-text-light fz-md",
                })}
              </div>
            </li>
          `
        )}
    </ul>
  `;
}

function section(_data, { bg = "white", content }) {
  return html`
    <section class="layout--full layout--inherit py-gutter flow bg-${bg}">
      ${content}
    </section>
  `;
}

function heading(_data, { level = 2, size = "inherit", content }) {
  return html`
    <h${level} class="fz-${size}">${content}</h${level}>
  `;
}

function text(_data, { align, content }) {
  return html`<p ${align && `class="text-align:${align}"`}>${content}</p>`;
}

function tags(data, { filter = [] } = {}) {
  const allTags = Object.entries(data.collections).filter(
    ([tag]) => !filter.includes(tag)
  );
  return html`
    <ul role="list" class="hstack wrap">
      ${allTags.map(
        ([tag, { length }]) => html`
          <li>
            <a href="/blog/tags/${tag}/" class="pill td-hover">
              <strong>${tag}</strong> ${length}
            </a>
          </li>
        `
      )}
    </ul>
  `;
}

function work(data, { show = "all" }) {
  const allPages = data.collections.work;
  if (!allPages?.length)
    throw new Error(`Cannot find any pages tagged with 'work'`);
  const pages =
    show === "featured"
      ? allPages.filter((page) => page.data.featured)
      : allPages;
  return html`
    <ul role="list" class="vstack gap-xxl">
      ${pages.map(
        ({ url, data }) => html`
          <li class="work">
            <div class="vstack leading-sm ji-start">
              <h3 class="font-sans fz-xxl">
                <a href="${url}" class="block-link">${data.title}</a>
              </h3>
              <p class="hide-on-mobile">${data.description}</p>
              <span
                class="hide-on-mobile pill lg fz-lg fw-600 work__btn"
                style="--bg: hsla(0, 0%, 100%, 50%)"
              >
                View project<span aria-hidden="true"> ›</span>
              </span>
            </div>
            <div class="work__img">
              <img src=${url + data.cover} alt="" />
            </div>
          </li>
        `
      )}
    </ul>
  `;
}

function form(_data, { id, success, content }) {
  return html`
    <form
      name="${id}"
      action="${success}"
      class="flow font-sans"
      data-netlify="true"
    >
      ${content}
    </form>
  `;
}

function input(_data, { label, hint, variant = "text", required = true }) {
  const id = label.toLowerCase().replace(/\s/, "-");
  const styles = "pad-sm bg-grey fz-md input";
  return html`
    <div class="vstack gap-sm">
      <label class="fz-md fw-500" for="${id}">
        ${label} ${required && html`<span aria-hidden="true">*</span>`}
      </label>
      ${variant === "long"
        ? html`
            <textarea
              id="${id}"
              name="${id}"
              placeholder="${hint}"
              class="${styles}"
              rows="4"
              ${required && "required"}
            ></textarea>
          `
        : html`
            <input
              type="${variant}"
              id="${id}"
              name="${id}"
              placeholder="${hint}"
              class="${styles}"
              ${required && "required"}
            />
          `}
    </div>
  `;
}

function button(_data, { label }) {
  return html`
    <button type="submit" class="pill width:full pad-md fw-500 bg-primary">
      ${label}
    </button>
  `;
}
