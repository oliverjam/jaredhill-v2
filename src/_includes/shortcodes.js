const html = require("../html");

function callout(content) {
  return html`<div class="callout fz-body-lg">${content}</div>`;
}

// size: "full" | "right" | "left"
function layout(content, size) {
  return html`<span class="layout--${size}">${content}</span>`;
}

module.exports = { callout, layout };
