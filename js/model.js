export const state = {
  query: "",
  products: [],
  cart: [],
  totalProductsIncart: 0,
  totalPrice: 0,
};

const products = [
  {
    id: 1,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: { rate: 3.6, count: 145 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 4,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 12,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 13,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 14,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 15,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: { rate: 3.8, count: 679 },
  }, 
  {
    id: 18,
    title: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 19,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 20,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: { rate: 4.5, count: 146 },
  }
];

const filterData = function (query) {
  state.query = query;
  state.products = products.filter((product) => {
    let matched;
    if (
      product.id ==
      state.cart.find((c) => {
        if (c.id === product.id) {
          matched = c;
          return c;
        }
      })?.id
    ) {
      product.count = matched.count;
    } else {
      product.count = 0;
    }

    if (product.category === query) return product;
    if (query === "all") return product;
  });
};
export const uploadMenu = function (query) {
  if (query === "all") {
    filterData(query);
  } else if (query === "men's clothing") {
    filterData(query);
  } else if (query === "women's clothing") {
    filterData(query);
  } else if (query === "electronics") {
    filterData(query);
  } else if (query === "jewelery") {
    filterData(query);
  }
};

export const manipulateCartData = function (id, count, price) {
  const addtocart = {
    id: Number(id),
    count: Number(count),
    price: Number(price),
  };

  let newid = true;

  // update if previous id exit
  if (state.cart.length !== 0) {
    state.cart.filter((cartProduct, index) => {
      if (Number(id) === cartProduct.id) {
        newid = false;
        cartProduct.count = Number(count);
        cartProduct.price = Math.floor(Number(price) * cartProduct.count);
      }

      if (cartProduct.count === 0) {
        state.cart.splice(index, 1);
      }
    });
  }

  //push the object if newid
  if (count !== 0 && newid) {
    state.cart.push(addtocart);
  }
  // console.log(state.cart);

  //update products item count
  state.totalProductsIncart = state.cart.reduce((acc, ele) => {
    return acc + ele.count;
  }, 0);

  //update price
  state.totalPrice = state.cart.reduce((acc, ele) => {
    return Math.floor(acc + ele.price);
  }, 0);

  //storing locally
  storeDataLocal();
};

export const clearCartProduct = function () {
  state.cart = [];
  state.totalPrice = 0;
  state.totalProductsIncart = 0;

  localStorage.clear();
};

const storeDataLocal = function () {
  localStorage.setItem("cart", JSON.stringify(state.cart));
  localStorage.setItem("totalProductsIncart", state.totalProductsIncart);
  localStorage.setItem("totalPrice", state.totalPrice);
};

const init = function () {
  const storage = localStorage.getItem("totalProductsIncart");
  if (!storage) return;
  state.totalProductsIncart = storage;
  state.cart = JSON.parse(localStorage.getItem("cart"));
  state.totalPrice = localStorage.getItem("totalPrice");
};

init();
