const addItem = (payload) => {
  return {
    type: "ADD_CART",
    payload,
  };
};

export { addItem };
