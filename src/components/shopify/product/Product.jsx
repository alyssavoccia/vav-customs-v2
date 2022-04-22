import { useState } from 'react';
import './product.scss';

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }

  return (
    <div className="product">
      {props.product.images.length ? <img src={props.product.images[0].src} alt={`${props.product.title} product shot`}/> : null}
      <h5 className="product__title">{props.product.title}</h5>
      <span className="product__price">${props.product.variants[0].price}</span>
      <label className="product__option">
        Quantity
        <input min="1" type="number" defaultValue={1} onChange={handleQuantityChange}></input>
      </label>
      <button className="product__buy button" onClick={() => props.addItemToCart(props.product.id, quantity)}>Add to Cart</button>
    </div>
  )
}

export default Product