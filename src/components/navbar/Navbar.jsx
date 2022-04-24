import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navbar.scss';
import CartContext from '../../context/cart/CartContext';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg';
import MiniLogo from '../../assets/mini-logo.png';

function Navbar() {
  const { dispatch } = useContext(CartContext);
  const [active, setActive] = useState('navbar__main-menu');

  const navToggle = () => {
    if (window.innerWidth < 769) {
      active === 'navbar__main-menu' ? setActive('navbar__main-menu navbar__main-menu_show') : setActive('navbar__main-menu');
    }
  }

  return (
    <div className='navbar'>
      <div onClick={navToggle} className="navbar__menu-btn">
        <i className="fas fa-bars fa-2x"></i>
      </div>
      <div className="navbar__wrapper">
        <nav className="navbar__main-nav container">
          <img className="navbar__main-nav-logo" src={MiniLogo} alt="Vav Customs Logo" />
          <ul className={active}>
            <li className="navbar__main-menu-link" onClick={navToggle}><HashLink className='link' smooth to='/#home'>Home</HashLink></li>
            <li className="navbar__main-menu-link" onClick={navToggle}><HashLink smooth to='/#about'>About</HashLink></li>
            <li className="navbar__main-menu-link" onClick={navToggle}><HashLink smooth to='/#gallery'>Gallery</HashLink></li>
            <li className="navbar__main-menu-link" onClick={navToggle}><Link to='/blog-posts'>Blog</Link></li>
            <li className="navbar__main-menu-link" onClick={navToggle}><Link to='/store'>Store</Link></li>
          </ul>
          <div className="navbar__main-nav__view-cart" onClick={()=> dispatch({ type: 'OPEN_CART' })}>
            <ShoppingIcon className='navbar__main-nav__view-cart-icon' />
            <span className='navbar__main-nav__view-cart-icon-count'>{}</span>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;