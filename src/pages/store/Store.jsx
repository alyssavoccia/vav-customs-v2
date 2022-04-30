import './store.scss';
import Products from '../../components/shopify/products/Products';

function Store() {
  return (
    <div className='store container'>
      <header className='store__header'>
        <h1 className='store__title'>Store</h1>
      </header>
      <Products />
    </div>
  )
}

export default Store;