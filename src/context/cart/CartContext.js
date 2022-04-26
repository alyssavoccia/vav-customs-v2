import { createContext, useEffect, useReducer } from "react";
import cartReducer from './cartReducer';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = localStorage.getItem('userCart')
  ? JSON.parse(localStorage.getItem('userCart'))
  : {
    isCartOpen: false,
    checkout: { lineItems: [] },
    products: [],
    client: {},
    totalItemsInCart: 0
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('userCart', JSON.stringify(state));
  }, [state]);

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