import { Link, useLocation } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartArea, faScrewdriverWrench, faPenToSquare, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import miniLogo from '../../../assets/mini-logo.png';
import './adminNavbar.scss';

function AdminNavbar() {
  const auth = getAuth();
  const location = useLocation();

  return (
    <div className="admin-navbar">
      <div className='admin-navbar__logo'>
        <img src={miniLogo} alt='VAV Customs Logo' className='admin-navbar__logo-img' />
      </div>
      <ul className='admin-navbar__list'>
        <li className='admin-navbar__list-item'>
          <Link className={`${location.pathname === '/admin/dashboard' && 'admin-navbar__list-link-active'} admin-navbar__list-link`} to='/admin/dashboard'>
            <FontAwesomeIcon className='admin-navbar__list-icon' icon={faChartArea} />
          </Link>
        </li>
        <li className='admin-navbar__list-item'>
          <Link className={`${location.pathname === '/admin/custom-builds' && 'admin-navbar__list-link-active'} admin-navbar__list-link`} to='/admin/custom-builds'>
            <FontAwesomeIcon className='admin-navbar__list-icon' icon={faScrewdriverWrench} />
          </Link>
        </li>
        <li className='admin-navbar__list-item'>
          <Link className={`${location.pathname === '/admin/create-blog' && 'admin-navbar__list-link-active'} admin-navbar__list-link`} to='/admin/create-blog'>
            <FontAwesomeIcon className='admin-navbar__list-icon' icon={faPenToSquare} />
          </Link>
        </li>
        <li className='admin-navbar__list-item'>
          <Link className='admin-navbar__list-link' to='/admin'>
            <FontAwesomeIcon className='admin-navbar__list-icon' icon={faArrowRightToBracket} onClick={() => auth.signOut()} />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default AdminNavbar;