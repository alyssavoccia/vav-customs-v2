import { useContext, useEffect, useState } from 'react';
import Client from 'shopify-buy';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg';
import './store.scss';
import Cart from '../../components/shopify/cart/Cart';
import Products from '../../components/shopify/products/Products';
import CartContext from '../../context/cart/CartContext';

const client = Client.buildClient({
  domain: 'vavcustoms.myshopify.com',
  storefrontAccessToken: '493769b404bf83733826c0783d32ff85'
});

function Store() {
  const { dispatch, products, isCartOpen, checkout } = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);

  // const updateTotalItems = (res) => {
  //   setTotalItems(0);
  //   res.lineItems.forEach(item => {
  //     setTotalItems(prevState => prevState + item.quantity);
  //   });
  // };

  // const removeLineItemInCart = async (lineItemId) => {
  //   const checkoutId = checkout.id;

  //   return client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
  //     setCheckout(res);
  //     updateTotalItems(res);
  //   });
  // };

  const handleCartClose = () => {
    dispatch({ type: 'CLOSE_CART', payload: {isCartOpen: false}});
  };

  return (
    <div className='store'>
      <header className='store__header'>
        {!isCartOpen &&
          <div className="store__view-cart-wrapper">
            <div className="store__view-cart" onClick={()=> dispatch({ type: 'OPEN_CART', payload: {isCartOpen: true} })}>
              <ShoppingIcon className='store__view-cart-icon' />
              <span className='store__view-cart-icon-count'>{totalItems}</span>
            </div>
          </div>
        }
        <h1 className='store__title'>Store</h1>
      </header>
      <Products
          products={products}
        />
      <Cart
        handleCartClose={handleCartClose}
        // updateQuantityInCart={updateQuantityInCart}
        // removeLineItemInCart={removeLineItemInCart}
      />
    </div>
  )
}

export default Store;