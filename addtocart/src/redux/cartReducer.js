const initialState = {
  cart: [],
  currentElement : {}
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
    case "ADD_CURRENT_ELEMENT":
      return {
        ...state,
        currentElement : action.payload
      }
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
