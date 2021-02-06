module.exports = {
  nav: (data) => {
    let nav = [];
    for (let page of data.collections.all) {
      if (page.data.nav) {
        nav.push({ label: page.data.nav.label, url: page.url });
      }
    }
    return nav.sort((a, b) => a.order - b.order);
  },
};
