import './cart.scss';
import LineItem from "../line-item/LineItem";

function Cart(props) {
  const openCheckout = () => {
    window.open(props.checkout.webUrl);
  }

  let line_items = props.checkout.lineItems.map((line_item) => {
    return (
      <LineItem 
        updateQuantityInCart={props.updateQuantityInCart}
        removeLineItemInCart={props.removeLineItemInCart}
        key={line_item.id.toString()}
        line_item={line_item}
      />
    );
  });

  return (
    <div className={`cart ${props.isCartOpen ? 'cart__open' : ''}`}>
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
            <span className="cart-pricing">$ {props.checkout.totalPrice}</span>
          </div>
        </div>
        <button disabled={line_items.length === 0} className="cart__checkout button" onClick={openCheckout}>Checkout</button>
      </footer>
    </div>
  )
}

export default Cart;