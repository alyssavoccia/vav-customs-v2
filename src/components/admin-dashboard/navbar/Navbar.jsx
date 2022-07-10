import miniLogo from '../../../assets/mini-logo.png';
import './navbar.scss';

function Navbar() {
  return (
    <div className="admin-navbar">
      <div className='admin-navbar__logo'>
        <img src={miniLogo} alt='VAV Customs Logo' className='admin-navbar__logo-img' />
      </div>
      <ul className='admin-navbar__list'>

      </ul>
    </div>
  )
}

export default Navbar;