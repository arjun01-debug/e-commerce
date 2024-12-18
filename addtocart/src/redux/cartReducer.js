const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      const item = action.payload;
      state.cart.push(item);
      return {
        ...state,
        cart: state.cart,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
