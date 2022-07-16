import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import './custombuild.scss';

function CustomBuild() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    images: {}
  });
  const { name, email, message, images } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();

    if (images.length > 2) {
      toast.error('Max 2 images allowed for upload.');
      return;
    }

    // Store images in firebase
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${name}-${image.name}`;

        const storageRef = ref(storage, 'images/' + fileName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            switch (snapshot.state) {
              case 'paused':
                break;
              case 'running':
                break;
              default:
                break;
            }
          },
          (error) => {
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
              resolve(downloadURL);
            });
          }
        )
      })
    }
    
    const imgUrls = await Promise.all(
      [...images].map(image => storeImage(image))
    ).catch(() => {
      toast.error('Images not uploaded.');
      return;
    });

    const formDataCopy = {
      ...formData,
      imgUrls,
      timestamp: serverTimestamp(),
      status: 'Not Viewed',
      notes: ''
    };

    delete formDataCopy.images;

    await addDoc(collection(db, 'customBuilds'), formDataCopy);

    setFormData({
      name: '',
      email: '',
      message: '',
      images: {}
    });
    document.getElementById('images').value = null;

    toast.success('Form successfully submitted!');

    emailjs.send('service_fpgitnp', 'template_sn40wi6', formData, 'x0Y0O4zI5XkZwpMCk')
    .then((result) => {

    }, (error) => {
        console.log(error.text);
    });
  };

  const onChange = (e) => {
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files
      }));
    }

    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value
      }));
    }
  };

  return (
    <section className='custom-build container' id='custom-build'>
      <h1 className='section-title'>Custom Build</h1>
      <p className='section-description'>Have a custom build that you're looking for? Fill out the form below to get started!</p>
      <HashLink to='/#gallery' className='custom-build__gallery-link'>Check out my work</HashLink>
      <form className='custom-build__form' onSubmit={onSubmit}>
        <input type="text" id='name' name="user_name" placeholder='Name' onChange={onChange} value={name} />
        <input type="email" id='email' name="email" placeholder='Email' onChange={onChange} value={email} />
        <textarea rows="5" id='message' placeholder='Message' name='message' onChange={onChange} value={message} />
        <label className='image-label'>Have some inspiration? <span className='small-text'>(2 file max)</span></label>
        <input type='file' className='file-input' id='images' max='2' accept='.jpg,.png,.jpeg' multiple onChange={onChange} />
        <button type='submit' className='custom-build__form-button'>Submit</button>
      </form>
    </section>
  )
}

export default CustomBuild;