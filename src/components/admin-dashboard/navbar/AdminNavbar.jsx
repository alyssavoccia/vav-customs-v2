import { Link } from 'react-router-dom';
import miniLogo from '../../../assets/mini-logo.png';
import './adminNavbar.scss';

function AdminNavbar() {
  return (
    <div className="admin-navbar">
      <div className='admin-navbar__logo'>
        <img src={miniLogo} alt='VAV Customs Logo' className='admin-navbar__logo-img' />
      </div>
      <ul className='admin-navbar__list'>
        <li>

        </li>
      </ul>
    </div>
  )
}

export default AdminNavbar;