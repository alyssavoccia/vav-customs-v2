import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navbar.scss';
import MiniLogo from '../../assets/mini-logo.png';

function Navbar() {
  const [active, setActive] = useState('main-menu');
  const navToggle = () => {
    if (window.innerWidth < 769) {
      active === 'main-menu' ? setActive('main-menu main-menu_show') : setActive('main-menu');
    }
  }

  return (
    <>
      <div onClick={navToggle} className="menu-btn">
        <i className="fas fa-bars fa-2x"></i>
      </div>
      <div className="nav-wrapper">
        <nav className="main-nav container">
          <img className="logo" src={MiniLogo} alt="Vav Customs Logo" />
          <ul className={active}>
            <li className="nav-link" onClick={navToggle}><HashLink smooth to='/#home'>Home</HashLink></li>
            <li className="nav-link" onClick={navToggle}><HashLink smooth to='/#about'>About</HashLink></li>
            <li className="nav-link" onClick={navToggle}><HashLink smooth to='/#gallery'>Gallery</HashLink></li>
            <li className="nav-link" onClick={navToggle}><Link to='/blog-posts'>Blog</Link></li>
            <li className="nav-link" onClick={navToggle}><Link to='/store'>Store</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar;