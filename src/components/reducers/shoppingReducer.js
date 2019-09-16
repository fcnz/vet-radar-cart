import { SHOPPING_ACTIONS } from '../actions/shoppingActions';

const CART_COUNT_KEY = 'cart_count'
const CART_CONTENT_KEY = 'cart_content'

let storedCartContent;
let storedCartCount;
try {
  storedCartContent = JSON.parse(localStorage.getItem(CART_CONTENT_KEY) || '[]');
  storedCartCount = Number(localStorage.getItem(CART_COUNT_KEY) || 0)
} catch (e) {
  console.warn('Error loading cart from local storage', e)
  storedCartContent = [];
  storedCartCount = 0;
}

const initialState = {
  products: [
    { name: "Sledgehammer", price: 125.76 },
    { name: "Axe",          price: 190.51 },
    { name: "Bandsaw",      price: 562.14 },
    { name: "Chisel",       price: 13.9   },
    { name: "Hacksaw",      price: 19.45  }
  ],
  cart: storedCartContent,
  cartCount: storedCartCount
};


function shoppingReducer(state = initialState, action) {

  const product = state.products.find(p => p.name === action.product);
  const existingCartEntry = state.cart.find(c => c.name === action.product);
  let updatedCartEntry;
  let newCart;

  let newState;
  switch (action.type) {
    case SHOPPING_ACTIONS.ADD_TO_CART:

      updatedCartEntry = existingCartEntry ? { ...existingCartEntry, qty: existingCartEntry.qty + 1 } : { ...product, qty: 1 };
      newCart = [ ...state.cart.filter(p => p.name !== action.product), updatedCartEntry ];
      newState = {
        ...state,
        cart: newCart,
        cartCount: newCart.length
      };
      break;

    case SHOPPING_ACTIONS.SET_QUANTITY:

      updatedCartEntry = { ...existingCartEntry, qty: action.qty };
      newCart = [ ...state.cart.filter(p => p.name !== action.product), updatedCartEntry ]
      newState = {
        ...state,
        cart: newCart
      };
      break;

    case SHOPPING_ACTIONS.REMOVE:

      newCart = [ ...state.cart.filter(p => p.name !== action.product) ];
      newState = {
        ...state,
        cart: newCart,
        cartCount: newCart.length
      };
      break;

    default:
      return state;
  }

  localStorage.setItem(CART_CONTENT_KEY, JSON.stringify(newState.cart));
  localStorage.setItem(CART_COUNT_KEY, newState.cartCount);

  return newState;
}

export default shoppingReducer;
