function html(strings, ...interpolations) {
  return strings
    .map((string, i) => {
      let int = interpolations[i];
      let value = Array.isArray(int)
        ? int.join("\n")
        : ![undefined, false, null].includes(int)
        ? int
        : "";
      return string + value;
    })
    .join("");
}

module.exports = html;
