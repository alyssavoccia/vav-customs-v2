import { useContext } from 'react';
import './cart.scss';
import LineItem from "../line-item/LineItem";
import CartContext from '../../../context/cart/CartContext';

function Cart(props) {
  const { isCartOpen, checkout } = useContext(CartContext);

  const openCheckout = () => {
    window.open(checkout.webUrl);
  }

  let line_items = checkout.lineItems.map((line_item) => {
    return (
      <LineItem 
        key={line_item.id.toString()}
        line_item={line_item}
      />
    );
  });

  return (
    <div className={`cart ${isCartOpen ? 'cart__open' : ''}`}>
      <header className="cart__header">
        <h2>Your cart</h2>
        <button
          onClick={props.handleCartClose}
          className="cart__close">
          ×
        </button>
      </header>
      <ul className="cart__line-items">
        {line_items}
      </ul>
      <footer className="cart__footer">
        {/* <div className="cart-info clearfix">
          <div className="cart-info__total cart-info__small">Subtotal</div>
          <div className="cart-info__pricing">
            <span className="pricing">$ {props.checkout.subtotalPrice}</span>
          </div>
        </div> */}
        <div className="cart-info clearfix">
          <div className="cart-info__total cart-info__small">Taxes & Shipping</div>
          <div className="cart-info__pricing">
            <span className="pricing">Determined at Checkout</span>
          </div>
        </div>
        <div className="cart-info clearfix">
          <div className="cart-info__total cart-info__small">Subtotal</div>
          <div className="cart-info__pricing">
            <span className="cart-pricing">$ {checkout.totalPrice}</span>
          </div>
        </div>
        <button disabled={line_items.length === 0} className="cart__checkout button" onClick={openCheckout}>Checkout</button>
      </footer>
    </div>
  )
}

export default Cart;