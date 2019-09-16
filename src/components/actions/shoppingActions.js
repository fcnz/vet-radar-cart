export const SHOPPING_ACTIONS = {
  ADD_TO_CART:  'ADD_TO_CART',
  SET_QUANTITY: 'SET_QUANTITY',
  REMOVE:       'REMOVE'
};

export function addToCart(product) {
  return {
    product,
    type: SHOPPING_ACTIONS.ADD_TO_CART
  };
}

export function setQuantity(product, qty) {
  return {
    product,
    qty: Number(qty),
    type: SHOPPING_ACTIONS.SET_QUANTITY
  };
}

export function remove(product) {
  return {
    product,
    type: SHOPPING_ACTIONS.REMOVE
  };
}
