class view {
  sortBy = document.querySelector(".sort-by");
  totalProductsIncart = document.querySelector(".cart__products--count");
  productsContainer = document.querySelector(".products");
  filters = document.querySelector(".nav__filter");
  clearCart = document.querySelector(".clear-cart");
  _datas;

  renderData(datas, sort = false) {
    if (!sort) {
      this._datas = datas;
      this.sortBy.value = "default";
    }
    this.generateMarkup(datas);
  }

  clearCartProducts(handler) {
    
    this.clearCart.addEventListener("click", handler);
  }

  generateMarkup(datas) {
    const markup = datas
      .map((data) => this.generateMarkupReview(data))
      .join("");
    this.clear();
    this.productsContainer.insertAdjacentHTML("beforeend", markup);
  }

  updateCartData(total, price) {
    this.totalProductsIncart.textContent = total;
    document.querySelector(".price").textContent = price;
  }

  handelAddToCart(handel) {
    this.productsContainer.addEventListener("click", function (e) {
      const handelAdd = e.target.closest(".add");
      const handelSub = e.target.closest(".sub");
      const productEl = e.target.closest(".product");

      if (!productEl) return;
      const countEl = productEl.querySelector(".count");
      const price = productEl.querySelector(".price").textContent;

      //add to cart
      if (handelAdd) {
        if (
          productEl.querySelector(".product__stock").textContent.slice(6) ==
          countEl.textContent
        )
          return;
        countEl.textContent = Number(countEl.textContent) + 1;
        return handel(productEl.dataset.id, countEl.textContent, price);
        //sub to sub
      } else if (handelSub) {
        if (countEl.textContent == 0) return;
        countEl.textContent = Number(countEl.textContent) - 1;
        return handel(productEl.dataset.id, countEl.textContent, price);
      }
    });
  }

  generateMarkupReview(data) {
    return `<div class="product" data-id="${data.id}">
  <div class="product__img-box">
    <img
      class="product__img"
      // src="${data.image}"
      alt="product"
    />
  </div>
  <div class="product__info">
    <div class="product__title">${data.title}</div>
    <div class="product__row">
      <div class="product__price"><span class="price">${
        data.price
      }</span>$</div>
      <div class="product__addtocart">
         <span class="add">+</span>
         <span class="count">${data.count ?? 0}</span>
         <span class="sub">-</span>
      </div>
    </div>
    <div class="product__row">
      <span class="product__rating">Rating:${data.rating.rate}</span>
      <span class="product__stock">Stock:${data.rating.count}</span>
    </div>
  </div>
  </div>
  `;
  }

  clear() {
    this.productsContainer.innerHTML = "";
  }

  handelFilter(handler) {
    this.filters.addEventListener("click", function (e) {
      const filterCategory = e.target.closest(".category__btn");
      if (!filterCategory) return;
      let { set } = filterCategory.dataset;
      handler(set);
    });
  }

  handelSort() {
    let view = this;
    this.sortBy.addEventListener("change", function (e) {
      if (e.target.value === "default") {
        view.renderData(view._datas, true);
      } else {
        // view.sortByPrice(e.target.value);
        view.renderData(view.sortByPrice(e.target.value), true);
      }
    });
  }

  sortByPrice(sortOrder) {
    let copydata = [...this._datas];
    copydata.sort((data1, data2) => {
      if (sortOrder === "ascending-sort") {
        return parseInt(data1.price) - parseInt(data2.price);
      } else if (sortOrder === "desending-sort") {
        return parseInt(data2.price) - parseInt(data1.price);
      }
    });

    return copydata;
  }
}

export default new view();
