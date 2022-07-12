import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import SignIn from '../../../components/sign-in/SignIn';
import './admin.scss';

function Admin() {
  const auth = getAuth();
  const isMounted = useRef(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate('/admin/dashboard');
        }
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  return (
    <section className='admin'>
      <SignIn />
    </section>
  )
}

export default Admin;