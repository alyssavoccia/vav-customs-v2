import { useState } from 'react';
import './product.scss';

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }

  return (
    <div className="product">
      <div className='product__card'>
        {props.product.images.length ? <img src={props.product.images[0].src} alt={`${props.product.title} product shot`} className='product__card-img' /> : null}
        <div className='prodcut__card-info'>
          <h2 className="product__card-title">{props.product.title}</h2>
          <span className="product__card-price">${props.product.variants[0].price}</span>
          <p className='product__card-description'>{props.product.description}</p>
        </div>
        <div className='product__card-buy'>
          <input className='product__card-quantity' min="1" type="number" defaultValue={1} onChange={handleQuantityChange}></input>
          <button disabled={!props.available} className={props.available ? 'product__card-btn product__card-btn-buy' : 'product__card-btn'} onClick={() => props.addItemToCart(props.product.variants[0].id, quantity)}>
            {!props.available ? 'Sold Out' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product;