//product-------

const { createStore, combineReducers } = require("redux");

// constant 
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_CARTS = "GET_CARTS";
const ADD_CART = "ADD_CART";
//state
const initialProductState = {
  products: ['sugar', 'salt'],
  numberOfProducts: 2,
};
const initialCartState = {
  carts: ['sugar'],
  numberOfCartItems: 1,
};
// action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
}
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}
const getCarts = () => {
  return {
    type: GET_CARTS,
  };
}
const addCart = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
}
// reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      }
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      }

    default:
      return state;
  }
};
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CARTS:
      return {
        ...state,
      }
    case ADD_CART:
      return {
        carts: [...state.carts, action.payload],
        numberOfCartItems: state.numberOfCartItems + 1,
      }

    default:
      return state;
  }
};

//store
const rootReducer = combineReducers({
  productReducer,
  cartReducer,
})
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("pen"));
store.dispatch(getCarts());
store.dispatch(addCart("pen"));




//cart