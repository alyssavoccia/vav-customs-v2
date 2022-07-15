import { Link } from 'react-router-dom';
import '../../../global.scss';
import './services.scss';

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h1 className="section-title">What We Provide</h1>
        <div className="services__content">
          <div className="services__items-container">
            <div className="services__item">
              <div className="icon-container">
                <i className="fa-solid fa-screwdriver-wrench fa-2x"></i>
              </div>
              <p>Custom one-of-a-kind wood pieces. You can select from one of our pre-made pieces, or message us to create your dream item.</p>
            </div>
            <div className="services__item">
              <div className="icon-container">
                <i className="fa-solid fa-arrow-up-right-dots fa-2x"></i>
              </div>
              <p>High quality products require high quality materials. We source only the best raw materials to create our products.</p>
            </div>
            <div className="services__item">
              <div className="icon-container">
                <i className="fa-solid fa-people-arrows-left-right fa-2x"></i>
              </div>
              <p>Customer service you can count on. This is an investment and we want to ensure that you are getting your dream piece.</p>
            </div>
          </div>
          <div className="services__shop-info">
            <div className="services__shop-info-text">
              <p className="services__shop-info-text-title">Want to see what goes on behind the scenes?</p>
              <p>See the shop setup, what tools I use, and what I recommend to get started!</p>
            </div>
            <Link className='btn btn-primary' to='/the-shop'>Check out The Shop!</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;