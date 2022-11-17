const html = require("../html");

exports.data = {
  layout: "base.11ty.js",
};

exports.render = ({ callout, info, content }) => {
  return html`
    ${callout && html`<div class="callout fz-body-lg">${callout}</div>`}
    ${info &&
    html`
      <dl class="WorkInfo pad-lg bg-200 leading-sm">
        ${Object.entries(info).map(
          ([key, val]) => html`
            <dt class="fw-600 capitalize fz-md text-align:right">${key}</dt>
            <dd>${val}</dd>
          `
        )}
      </dl>
    `}
    ${content}
  `;
};
