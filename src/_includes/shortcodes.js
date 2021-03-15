const html = require("../html");

function callout(content) {
  console.log(content);
  return html`<p class="fz-body-lg">${content}</p>`;
}

module.exports = { callout };
