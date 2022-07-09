import miniLogoDark from '../../assets/mini-logo-dark.png';
import './sign-in.scss';

function SignIn() {
  return (
    <div className='sign-in'>
      <div className="sign-in__header">
        <img src={miniLogoDark} alt='Small VAV Customs Logo' />
        <h1>Sign in to your account</h1>
      </div>
      <div className="sign-in__card">
        <form className='sign-in__form'>
          <input className='sign-in__form-input' type='email' name='email' id='email-address' placeholder='Email' />
          <input className='sign-in__form-input' type='password' name='password' id='password' placeholder='Password' />
          <button className='sign-in__form-button' type='submit'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn;