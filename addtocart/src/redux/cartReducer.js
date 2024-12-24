const initialState = {
  cart: [],
  currentElement : {}
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ELEMENT_CART":{
      const item = action.payload;
      const updatedElements = state.cart;
      const len = updatedElements.length;
      let flag = null;
      for(let i=0;i<len;i++){
        if(updatedElements[i].id === item.id){
          updatedElements[i].qnty = updatedElements[i].qnty + 1;
          flag = i;
          break;
        }
      }
      if(flag === null){
        item.qnty = 1;
        updatedElements.push(item);
      }
      return {
        ...state,
        cart: updatedElements,
        currentElement : flag || flag ===0 ? updatedElements[flag] : state.currentElement
      };
    }
    case "ADD_CURRENT_ELEMENT":
      return {
        ...state,
        currentElement : action.payload
      }
    case "DELETE_ELEMENT":
      const updatedElements = state.cart.filter((ele) => ele.id!==action.payload);
      return {
        ...state,
        cart : updatedElements,
        currentElement : {}
      }
    case "DECREASE_COUNT":
      const index = state.cart.findIndex((ele) => ele.id === action.payload);
      state.cart[index].qnty -= 1;
      return {
        ...state,
        cart : [...state.cart],
        currentElement : state.cart[index]
      }
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
