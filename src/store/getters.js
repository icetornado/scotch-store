export const productGetters = {
  // allId: state => state.products.result,
  // entities: state => state.products.entities,
  allProducts: (state) => {
    console.log('all product in getters ', state.products);
    return state.products;
  },
  productById: (state, getters) => (id) => {
    console.log('prod by id in getters', id);
    if (getters.allProducts.length > 0) {
      // eslint-disable-next-line
      const productArr = getters.allProducts.filter(p => p._id === id);
      console.log('product arr', productArr);
      let prod = {};
      // let manu = {};
      if (productArr.length > 0) {
        prod = productArr[0];
      }
      return prod;
      // eslint-disable-next-line
    } else {
      return state.product;
    }
  },
  allManufacturers: state => state.manufacturers,
};

export const manufacturerGetters = {
  allManufacturers: (state) => {
    console.log('state manu', state.manufacturers);
    return state.manufacturers;
  },
};

export const counterGetter = {
  counter: state => state.counter,
};
