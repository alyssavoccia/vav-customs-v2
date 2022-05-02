
import { createContext, useEffect, useReducer } from "react";
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

  const [state, dispatch] = useReducer(cartReducer, localStorage.getItem('userCart') ? JSON.parse(localStorage.getItem('userCart')) : initialState);

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