import * as model from "./model.js";
import view from "./view.js";

const controlRenderMenu = function (query) {
  //get data from model
  model.uploadMenu(query);
  //render data to view
  view.renderData(model.state.products);
};

controlRenderMenu("all");

const controlAddTocart = function (id, count) {
  // update data to model
  model.manipulateAddToCart(id, count);

  // add total product in count
  view.updateTotalProductInCart(model.state.totalProductsIncart);
};

const init = function () {
  view.handelFilter(controlRenderMenu);
  view.handelSort();
  view.handelAddToCart(controlAddTocart);
};
init();
