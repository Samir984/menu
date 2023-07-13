import * as model from "./model.js";
import view from "./view.js";

const renderMenu = function (query) {
  //get data from model
  model.uploadMenu(query);
  //render data to view
  view.renderData(model.state.products);
};

renderMenu("all");

const init = function () {
  view.handelFilter(renderMenu);
  view.handelSort();
};
init();

