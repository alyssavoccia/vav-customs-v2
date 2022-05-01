import { useState, useEffect } from 'react';
import Products from '../../components/shopify/products/Products';
import '../../global.scss';
import './store.scss';

function Store() {
  const [selected, setSelected] = useState('all');

  const list = [
    {
      id: 'all',
      title: 'All'
    },
    {
      id: 'woodwork',
      title: 'Woodwork'
    },
    {
      id: 'custom',
      title: 'Custom Pieces'
    },
    {
      id: 'plans',
      title: 'Plans'
    },
    {
      id: 'tools',
      title: 'Tools'
    },
    {
      id: 'apparel',
      title: 'Apparel'
    },
    {
      id: 'accessories',
      title: 'Accessories'
    }
  ];

  useEffect(() => {
    switch (selected) {

    }
  }, [selected]);

  return (
    <div className='store container'>
      <h1 className='section-title'>Store</h1>
      <ul className='store__categories'>
        {list.map(item => (
          <li key={item.title} className={`store__options ${item.id === selected && 'active'}`} onClick={() => setSelected(item.id)}>{item.title}</li>
        ))}
      </ul>
      <Products />
    </div>
  )
}

export default Store;