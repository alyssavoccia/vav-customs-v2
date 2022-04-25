const cartReducer = (state, action) => {
  switch (action.type) {
    case 'CLIENT_CREATED':
      return {
        ...state,
        client: action.payload
      }
    case 'PRODUCTS_FOUND':
      return {
        ...state,
        products: action.payload
      }
    case 'CHECKOUT_FOUND':
      return {
        ...state,
        checkout: action.payload
      }
    case 'ADD_VARIANT_TO_CART':
      return {
        ...state,
        isCartOpen: action.payload.isCartOpen,
        checkout: action.payload.checkout
      }
    case 'UPDATE_QUANTITY_IN_CART':
      return {
        ...state,
        checkout: action.payload.checkout
      }
    case 'REMOVE_LINE_ITEM_IN_CART':
      return {
        ...state,
        checkout: action.payload.checkout
      }
    case 'UPDATE_TOTAL_ITEMS_IN_CART':
      return {
        ...state,
        totalItemsInCart: action.payload.items
      }
    case 'OPEN_CART':
      return {
        ...state,
        isCartOpen: true
      }
    case 'CLOSE_CART':
      return {
        ...state,
        isCartOpen: false
      }
    default:
      return state;
  }
};

export default cartReducer;