const addItem = (payload) => {
  return {
    type: "ADD_CART",
    payload,
  };
};

const addCurrentElement = (payload) => {
  return {
    type : "ADD_CURRENT_ELEMENT",
    payload
  }
}

export { addItem, addCurrentElement };
