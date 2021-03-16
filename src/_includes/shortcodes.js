const html = require("../html");

function callout(content) {
  return html`<p class="fz-body-lg">${content}</p>`;
}

// size: "full" | "right" | "left"
function layout(content, size) {
  return html`<span class="layout--${size}">${content}</span>`;
}

module.exports = { callout, layout };
