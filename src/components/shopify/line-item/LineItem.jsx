import './line-item.scss';

function LineItem(props) {
  const decrementQuantity = (lineItemId) => {
    const updatedQuantity = props.line_item.quantity - 1;
    props.updateQuantityInCart(lineItemId, updatedQuantity);
  };

  const incrementQuantity = (lineItemId) => {
    const updatedQuantity = props.line_item.quantity + 1;
    props.updateQuantityInCart(lineItemId, updatedQuantity);
  };

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
          <button className="line-item__remove" onClick={()=> props.removeLineItemInCart(props.line_item.id)}>×</button>
        </div>
      </div>
    </li>
  )
}

export default LineItem;