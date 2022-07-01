import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navbar.scss';
import CartContext from '../../context/cart/CartContext';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg';
import MiniLogo from '../../assets/mini-logo.png';

function Navbar() {
  const { dispatch, totalItemsInCart } = useContext(CartContext);
  const [active, setActive] = useState('navbar__menu');
  const [mobileIcon, setMobileIcon] = useState('navbar__toggler');

  const navToggle = () => {
    if (window.innerWidth < 769) {
      active === 'navbar__menu' ? setActive('navbar__menu navbar-active') : setActive('navbar__menu')
    }
    // Icon toggle
    mobileIcon === 'navbar__toggler' ? setMobileIcon('navbar__toggler toggle') : setMobileIcon('navbar__toggler')
  };

  return (
    <nav className="navbar">
      <HashLink className='link' smooth to='/#home'><img className="navbar__logo" src={MiniLogo} alt="Vav Customs Logo" /></HashLink>
      <div className='navbar__links-cart'>
        <ul className={active}>
          <li className="navbar__item" onClick={navToggle}>
            <HashLink className='link' smooth to='/#home'>Home</HashLink>
          </li>
          <li className="navbar__item" onClick={navToggle}>
            <HashLink smooth to='/#about'>About</HashLink>
          </li>
          <li className="navbar__item" onClick={navToggle}>
            <HashLink smooth to='/#gallery'>Gallery</HashLink>
          </li>
          <li className="navbar__item" onClick={navToggle}>
            <Link to='/the-shop'>The Shop</Link>
          </li>
          <li className="navbar__item" onClick={navToggle}>
            <Link to='/blog-posts'>Blog</Link>
          </li>
          <li className="navbar__item" onClick={navToggle}>
            <Link to='/custom-build'>Custom Build</Link>
          </li>
          <li className="navbar__item" onClick={navToggle}>
            <Link to='/store'>Store</Link>
          </li>
        </ul>
        <div className="navbar__view-cart" onClick={()=> dispatch({ type: 'OPEN_CART' })}>
          <ShoppingIcon className='navbar__view-cart__icon' />
          <span className='navbar__view-cart__icon-count'>{totalItemsInCart}</span>
        </div>
        <div onClick={navToggle} className={mobileIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;