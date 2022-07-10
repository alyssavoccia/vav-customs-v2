import { useEffect, useState, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import SignIn from '../../components/sign-in/SignIn';
import DashboardGrid from '../../components/admin-dashboard/DashboardGrid';
import './admin.scss';

function Admin() {
  const auth = getAuth();
  const isMounted = useRef(true);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(true);
        } else {
          setCurrentUser(false);
        }
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  return (
    <section className='admin'>
      {currentUser
        ? <DashboardGrid />
        : <SignIn />
      }
    </section>
  )
}

export default Admin;