import { createContext, useReducer } from "react";
import cartReducer from './cartReducer';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    isCartOpen: false,
    checkout: { lineItems: [] },
    products: [],
    client: {},
    totalItemsInCart: 0
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;