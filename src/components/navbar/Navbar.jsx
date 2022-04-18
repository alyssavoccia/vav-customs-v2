import { useState } from 'react';
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
      <div onClick={navToggle} class="menu-btn">
        <i class="fas fa-bars fa-2x"></i>
      </div>
      <div class="nav-wrapper">
        <nav class="main-nav container">
          <img class="logo" src={MiniLogo} alt="Vav Customs Logo" />
          <ul class={active}>
            <li class="nav-link" onClick={navToggle}><a href="#home">Home</a></li>
            <li class="nav-link" onClick={navToggle}><a href="#about">About</a></li>
            <li class="nav-link" onClick={navToggle}><a href="#gallery">Gallery</a></li>
            <li class="nav-link" onClick={navToggle}><a href="#home">Blog</a></li>
            <li class="nav-link" onClick={navToggle}><a href="#gallery">Store</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar;