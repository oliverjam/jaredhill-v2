const html = require("../html");

exports.render = ({ title, config, content }) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}${title && " | "}${config.site.title}</title>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
};
