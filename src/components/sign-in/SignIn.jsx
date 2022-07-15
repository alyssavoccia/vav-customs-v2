import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import miniLogoDark from '../../assets/mini-logo-dark.png';
import './sign-in.scss';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      await signInWithEmailAndPassword(auth, email, password);

    } catch (error) {
      toast.error('Incorrect login information');
    } 
  }

  return (
    <div className='sign-in'>
      <div className="sign-in__header">
        <img src={miniLogoDark} alt='Small VAV Customs Logo' />
        <h1>Sign in to your account</h1>
      </div>
      <div className="sign-in__card">
        <form className='sign-in__form' onSubmit={onSubmit}>
          <input className='sign-in__form-input' type='email' name='email' id='email' placeholder='Email' onChange={onChange} />
          <input className='sign-in__form-input' type='password' name='password' id='password' placeholder='Password' onChange={onChange} />
          <button className='sign-in__form-button' type='submit'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn;