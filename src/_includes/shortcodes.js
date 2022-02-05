const html = require("../html");

function callout(content) {
  return html`<div class="callout fz-body-lg">${content}</div>`;
}

// size: "full" | "right" | "left"
function layout(content, size) {
  return html`<span class="layout--${size}">${content}</span>`;
}

function image(src) {
  return html`
    <details data-lightbox>
      <summary><img src="${src}" /></summary>
      <img src="${src}" />
    </details>
  `;
}

module.exports = { paired: { callout, layout }, single: { image } };
