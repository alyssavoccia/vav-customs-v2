import './storegrid.scss';

function StoreGrid() {
  let storeItems;

  return (
    <section className='store'>
      <h1 className='store-title'>Store</h1>
      {storeItems 
        ? <h1>Items in store</h1>
        : <div className='store-no-items'>
            <h2 className='store-no-items_title'>There are currently no items in the store.</h2>
            <p className='store-no-items_info'>Please check back later, or contact me to discuss what you're looking for.</p>
          </div> 
        
      }
    </section>
  )
}

export default StoreGrid;