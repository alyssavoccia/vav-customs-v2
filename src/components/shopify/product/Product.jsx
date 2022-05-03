import React, { useState, useContext } from 'react';
import { Modal } from 'react-responsive-modal';
import CartContext from '../../../context/cart/CartContext';
import { addItemToCart, updateTotalItemsInCart } from '../../../context/cart/CartActions';
import './product.scss';

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const { dispatch, client, checkout } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }

  const handleSubmit = async () => {
    const newCheckoutObj = await addItemToCart(client, checkout, props.product.variants[0].id, quantity);
    dispatch({ type: 'ADD_VARIANT_TO_CART', payload: {isCartOpen: true, checkout: newCheckoutObj}});
    const totalItems = await updateTotalItemsInCart(newCheckoutObj);
    dispatch({ type: 'UPDATE_TOTAL_ITEMS_IN_CART', payload: {items: totalItems}});
  }

  return (
    <>
      <div className="product" id='product'>
        <div className='product__card'>
          <div className="product__card-img-container" onClick={() => setOpen(true)}>
            {props.product.images.length ? <img src={props.product.images[0].src} alt={`${props.product.title} product shot`} className='product__card-img' /> : null}
            <div className="product__card-overlay">
              <p className="product__card-overlay-text">View Details</p>
            </div>
          </div>
          <div className='prodcut__card-info'>
            <h2 className="product__card-title">{props.product.title}</h2>
            <span className="product__card-price">${props.product.variants[0].price}</span>
            <p className='product__card-description'>{props.product.description}</p>
            <div className='product__card-buy'>
              <label className='prodcut__card-buy-info'>
                Quantity:
                <input className='product__card-quantity' min="1" type="number" defaultValue={1} onChange={handleQuantityChange}></input>
              </label>
              <button disabled={!props.available} className={props.available ? 'product__card-btn product__card-btn-buy' : 'product__card-btn'} onClick={handleSubmit}>
                {!props.available ? 'Sold Out' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="modal__product">
          <div className="modal__product-img-container">
            <img src={props.product.images[0].src} alt={`${props.product.title} product shot`} className='modal__product-img' />
          </div>
          <div className="modal__product-info">
            <div className="modal__product-text">
              <h2 className="modal__product-title">{props.product.title}</h2>
              <p className="modal__product-price">${props.product.variants[0].price}</p>
              <p className='modal__product-description'>{props.product.description}</p>
            </div>
            <div className='modal__product-buy'>
              <label className='moda__product-buy-info'>
                Quantity:
                <input className='product__card-quantity' min="1" type="number" defaultValue={1} onChange={handleQuantityChange} tabIndex='-1'></input>
              </label>
              <button disabled={!props.available} className={props.available ? 'product__card-btn product__card-btn-buy' : 'product__card-btn'} onClick={handleSubmit} tabIndex='-1'>
                {!props.available ? 'Sold Out' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Product;