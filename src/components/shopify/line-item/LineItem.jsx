import { useContext } from 'react';
import { updateQuantityInCart, removeLineItemInCart } from '../../../context/cart/CartActions';
import CartContext from '../../../context/cart/CartContext';
import './line-item.scss';

function LineItem(props) {
  const { dispatch, client, checkout } = useContext(CartContext);

  const decrementQuantity = async (lineItemId) => {
    const updatedQuantity = props.line_item.quantity - 1;
    const updatedCheckoutObj = await updateQuantityInCart(client, checkout, lineItemId, updatedQuantity);
    dispatch({ type: 'UPDATE_QUANTITY_IN_CART', payload: {checkout: updatedCheckoutObj} });
  };

  const incrementQuantity = async (lineItemId) => {
    const updatedQuantity = props.line_item.quantity + 1;
    const updatedCheckoutObj = await updateQuantityInCart(client, checkout, lineItemId, updatedQuantity);
    dispatch({ type: 'UPDATE_QUANTITY_IN_CART', payload: {checkout: updatedCheckoutObj} });
  };

  const removeLineItem = async (lineItemId) => {
    const updatedCheckoutObj = await removeLineItemInCart(client, checkout, lineItemId);
    dispatch({ type: 'REMOVE_LINE_ITEM_IN_CART', payload: {checkout: updatedCheckoutObj} });
  }

  return (
    <li className="line-item">
      <div className="line-item__img">
        {props.line_item.variant.image ? <img src={props.line_item.variant.image.src} alt={`${props.line_item.title} product shot`}/> : null}
      </div>
      <div className="line-item__content">
        <div className="line-item__content-row">
          <span className="line-item__title">
            {props.line_item.title}
          </span>
        </div>
        <div className="line-item__content-row">
          <div className="line-item__quantity-container">
            <button className="line-item__quantity-update" onClick={() => decrementQuantity(props.line_item.id)}>-</button>
            <span className="line-item__quantity">{props.line_item.quantity}</span>
            <button className="line-item__quantity-update" onClick={() => incrementQuantity(props.line_item.id)}>+</button>
          </div>
          <span className="line-item__price">
            $ { (props.line_item.quantity * props.line_item.variant.price).toFixed(2) }
          </span>
          <button className="line-item__remove" onClick={() => removeLineItem(props.line_item.id)}>×</button>
        </div>
      </div>
    </li>
  )
}

export default LineItem;