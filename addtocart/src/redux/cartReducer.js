const initiaState = {
  cart: [],
};

const cartReducer = (state = initiaState, action) => {
  switch (action.type) {
    case "ADD_CART":
      //   state.cart.push(action.payload);
      return {
        ...state,
        cart: state.cart.push(action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
