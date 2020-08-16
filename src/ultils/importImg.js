function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const imgPage1 = importAll(
  require.context("../static/img/page1", false, /\.(png|jpe?g|svg)$/)
);
const imgProgress = importAll(
  require.context("../static/img/page1/progress", false, /\.(png|jpe?g|svg)$/)
);
const imgPage2 = importAll(
  require.context("../static/img/page2", false, /\.(png|jpe?g|svg)$/)
);
const imgApp = importAll(
  require.context("../static/img", false, /\.(png|jpe?g|svg)$/)
);
export { imgPage1, imgPage2, imgApp, imgProgress };
