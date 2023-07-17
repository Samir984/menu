import * as model from "./model.js";
import view from "./view.js";

const controlRenderMenu = function (query, rerender = false) {
  //render same filter disable
  if (model.state.query === query && !rerender) return;
  console.log("c");
  //get data from model
  model.uploadMenu(query);
  //render data to view
  view.renderData(model.state.products);
};

const controlCartAction = function (id, count, price) {
  // update data to model
  model.manipulateCartData(id, count, price);

  // add total product in count
  view.updateCartData(model.state.totalProductsIncart, model.state.totalPrice);
};

const controlClearCartAction = function () {
  model.clearCartProduct();
  controlRenderMenu(model.state.query, true);
  view.updateCartData(model.state.totalProductsIncart, model.state.totalPrice);
};

const controlCart = function () {
  view.updateCartData(model.state.totalProductsIncart, model.state.totalPrice);
};
//inital render
controlRenderMenu("all");
view.handelFilter(controlRenderMenu);

// debugger;
const init = function () {
  controlCart();
  view.handelSort();
  view.handelAddToCart(controlCartAction);
  view.clearCartProducts(controlClearCartAction);
};
init();
