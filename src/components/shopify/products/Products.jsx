import { useContext } from 'react';
import './products.scss';
import Product from "../product/Product";
import CartContext from '../../../context/cart/CartContext';

function Products() {
  const { products } = useContext(CartContext);

  let allProducts = products.map(product => {
    return (
      <Product
        key={product.id.toString()}
        product={product}
        available={product.availableForSale}
      />
    )
  });

  return (
    <div className="products-wrapper">
      {allProducts}
    </div>
  )
}

export default Products;