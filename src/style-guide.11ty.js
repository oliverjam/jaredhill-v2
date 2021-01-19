const html = require("./html");

exports.render = ({ config: { theme } }) => {
  return html`
    <h1>Style guide</h1>
    <ul
      role="list"
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); gap: 1rem"
    >
      ${Object.entries(theme.colors).map(
        ([name, hex]) =>
          html`
            <li
              style="padding: 1rem; border: 0.5rem solid hsl(180, 10%, 80%); background: ${hex}"
            >
              ${name}
            </li>
          `
      )}
    </ul>
  `;
};
