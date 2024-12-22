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

const deleteItem = (payload) => {
  return {
    type : 'DELETE_ELEMENT',
    payload
  }
}

const decreaseItemQnty = (payload) => {
  return {
    type : 'DECREASE_COUNT',
    payload
  }
}

export { addItem, addCurrentElement, deleteItem, decreaseItemQnty };
