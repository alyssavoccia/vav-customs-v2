import './store.scss';
import Products from '../../components/shopify/products/Products';
import '../../global.scss';

function Store() {
  return (
    <div className='store container'>
      <h1 className='section-title'>Store</h1>
      <Products />
    </div>
  )
}

export default Store;