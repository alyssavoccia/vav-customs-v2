import { useState, useContext, useEffect } from 'react';
import './products.scss';
import Product from "../product/Product";
import CartContext from '../../../context/cart/CartContext';

function Products({selectedProducts}) {
  const { products } = useContext(CartContext);
  const [showProducts, setShowProducts] = useState(products);

  useEffect(() => {
    switch (selectedProducts) {
      case 'all':
        setShowProducts(products);
        break;
      case 'woodwork':
        setShowProducts(products.filter(product => product.productType === 'woodwork'));
        break;
      case 'custom':
        setShowProducts(products.filter(product => product.productType === 'custom'));
        break;
      case 'plans':
        setShowProducts(products.filter(product => product.productType === 'plans'));
        break;
      case 'tools':
        setShowProducts(products.filter(product => product.productType === 'tools'));
        break;
      case 'apparel':
        setShowProducts(products.filter(product => product.productType === 'apparel'));
        break;
      case 'accessories':
        setShowProducts(products.filter(product => product.productType === 'accessories'));
        break;
      default:
        setShowProducts(products);
    }
  }, [products, selectedProducts]);

  let allProducts = showProducts.map(product => {
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