const html = require("../html");

function callout(content) {
  return html`<div class="callout fz-body-lg">${content}</div>`;
}

// size: "full" | "right" | "left"
function layout(content, size) {
  return html`<span class="layout--${size}">${content}</span>`;
}

function image(src, caption, alt = "") {
  return html`<details data-lightbox>
    <summary>
      <figure class="vstack">
        <img src="${src}" alt="${alt}" />
        <figcaption class="text-align:center fz-sm color-text-light">
          ${caption}
        </figcaption>
      </figure>
    </summary>
    <img src="${src}" />
  </details>`;
}

function youtube(id) {
  return html`<lite-youtube
    videoid="${id}"
    params="modestbranding=2"
    style="background-image: url('https://i.ytimg.com/vi/${id}/hqdefault.jpg');"
  >
    <noscript>
      <a
        href="https://youtube.com/watch?v=${id}"
        class="lty-playbtn"
        title="Play Video"
      ></a>
    </noscript>
  </lite-youtube>`;
}

module.exports = { paired: { callout, layout }, single: { image, youtube } };
