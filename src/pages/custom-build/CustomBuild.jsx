import { useState } from 'react';
import './custombuild.scss';

function CustomBuild() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userSubject, setUserSubject] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const onChange = (e) => {
    switch (e.target.id) {
      case 'user-name':
        setUserName(e.target.value);
        break;
      case 'user-subject':
        setUserSubject(e.target.value);
        break;
      case 'message':
        setUserMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className='custom-build container' id='custom-build'>
      <h1 className='section-title'>Custom Build</h1>
      <p className='section-description'>Have a custom build that you're looking for? Fill out the form below to get started!</p>
      <p className='small-text'>You will be able to attach an image upon submission of the form.</p>

      <form className='custom-build__form'>
        <input type="text" id='user-name' name="user_name" placeholder='Name' onChange={onChange} />
        <input type="text" id='user-subject' name="user_subject" placeholder='Subject' onChange={onChange} />
        <textarea rows="5" id='message' placeholder='Message' name='message' onChange={onChange} />
        <a className='custom-build__form-button' href={`mailto:alyssa.voccia@gmail.com?subject=${userName + ' - ' + userSubject}&body=${userMessage}`}>Submit</a>
      </form>
    </div>
  )
}

export default CustomBuild;