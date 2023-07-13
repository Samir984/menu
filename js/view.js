class view {
  sortBy = document.querySelector(".sort-by");
  productsContainer = document.querySelector(".products");
  filters = document.querySelector(".category");
  _datas;

  renderData(datas, sort = false) {
    if (!sort) {
      this._datas = datas;
      this.sortBy.value = "default";
    }
    this.generateMarkup(datas);
  }

  generateMarkup(datas) {
    const markup = datas
      .map((data) => this.generateMarkupReview(data))
      .join("");
    this.clear();
    this.productsContainer.insertAdjacentHTML("beforeend", markup);
  }
  generateMarkupReview(data) {
    return `<div class="product">
  <div class="product__img-box">
    <img
      class="product__img"
      src="${data.image}"
      alt="product"
    />
  </div>
  <div class="product__info">
    <div class="product__title">${data.title}</div>
      <div class="product__price"><span class="price">${data.price}$</span></div>
    <div class="product__review">
      <span class="product__rating">${data.rating.rate} Stars</span>
      <span class="product__stock">Stock: ${data.rating.count}</span>
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
