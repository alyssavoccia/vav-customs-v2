import Shop1 from '../../assets/shop1.jpg';
import Shop2 from '../../assets/shop2.jpg';
import Shop3 from '../../assets/shop3.jpg';
import '../../global.scss';
import './theshop.scss';

function TheShop() {
  return (
    <div className='the-shop'>
      <h1 className="section-title">The Shop</h1>
      <div className="container">
        <div className="the-shop__contents">
          <div className="the-shop__images">
            <img src={Shop1} alt="Shop" />
            <img src={Shop2} alt="Shop" />
            <img src={Shop3} alt="Shop" />
          </div>
          <div className="the-shop__favorites">
            <h2 className="section-subtitle">Tools In The Shop</h2>
          </div>
          <div className="the-shop__recommendations">
            <h2 className="section-subtitle">Other Tools I Recommend</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheShop