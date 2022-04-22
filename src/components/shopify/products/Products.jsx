import './products.scss';
import Product from "../product/Product";

function Products(props) {
  let products = props.products.map(product => {
    return (
      <Product
        addItemToCart={props.addItemToCart}
        client={props.client}
        key={product.id.toString()}
        product={product}
      />
    )
  });

  return (
    <div className="container products-wrapper">
      {products}
    </div>
  )
}

export default Products;