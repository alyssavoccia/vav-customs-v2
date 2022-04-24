import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg';
import './store.scss';
import Cart from '../../components/shopify/cart/Cart';
import Products from '../../components/shopify/products/Products';
import CartContext from '../../context/cart/CartContext';

function Store() {
  const { dispatch, products, isCartOpen } = useContext(CartContext);

  return (
    <div className='store'>
      <header className='store__header'>
        {!isCartOpen &&
          <div className="store__view-cart-wrapper">
            <div className="store__view-cart" onClick={()=> dispatch({ type: 'OPEN_CART', payload: {isCartOpen: true} })}>
              <ShoppingIcon className='store__view-cart-icon' />
              <span className='store__view-cart-icon-count'>{}</span>
            </div>
          </div>
        }
        <h1 className='store__title'>Store</h1>
      </header>
      <Products
          products={products}
        />
      <Cart />
    </div>
  )
}

export default Store;