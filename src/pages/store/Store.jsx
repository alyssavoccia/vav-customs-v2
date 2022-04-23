import { useEffect, useState } from 'react';
import Client from 'shopify-buy';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg';
import './store.scss';
import Cart from '../../components/shopify/cart/Cart';
import Products from '../../components/shopify/products/Products';

const client = Client.buildClient({
  domain: 'vavcustoms.myshopify.com',
  storefrontAccessToken: '493769b404bf83733826c0783d32ff85'
});

function Store() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkout, setCheckout] = useState({ lineItems: [] });
  const [products, setProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    client.checkout.create().then(res => {
      setCheckout(res);
    });

    client.product.fetchAll().then(res => {
      setProducts(res);
    });
  }, []);

  const updateTotalItems = (res) => {
    setTotalItems(0);
    res.lineItems.forEach(item => {
      setTotalItems(prevState => prevState + item.quantity);
    });
  };

  const addItemToCart = async (variantId, quantity) => {
    setIsCartOpen(true);

    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}];
    const checkoutId = checkout.id;

    return client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      setCheckout(res);
      updateTotalItems(res);
    });
  };

  const updateQuantityInCart = async (lineItemId, quantity) => {
    console.log(quantity);
    const checkoutId = checkout.id;
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}];

    return client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      setCheckout(res);
      updateTotalItems(res);
    });
  };

  const removeLineItemInCart = async (lineItemId) => {
    const checkoutId = checkout.id;

    return client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      setCheckout(res);
      updateTotalItems(res);
    });
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <div className='store'>
      <header className='store__header'>
        {!isCartOpen &&
          <div className="store__view-cart-wrapper">
            <div className="store__view-cart" onClick={()=> setIsCartOpen(true)}>
              <ShoppingIcon className='store__view-cart-icon' />
              <span className='store__view-cart-icon-count'>{totalItems}</span>
            </div>
          </div>
        }
        <h1 className='store__title'>Store</h1>
      </header>
      <Products
          products={products}
          client={client}
          addItemToCart={addItemToCart}
        />
      <Cart
        checkout={checkout}
        isCartOpen={isCartOpen}
        handleCartClose={handleCartClose}
        updateQuantityInCart={updateQuantityInCart}
        removeLineItemInCart={removeLineItemInCart}
      />
    </div>
  )
}

export default Store;