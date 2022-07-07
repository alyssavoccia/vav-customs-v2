import { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { v4 as uuidv4 } from 'uuid';
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

    // UPDATE THIS TO TOAST ERROR
    if (images.length > 2) {
      alert('Max 2 images');
      return;
    }

    // Store images in firebase
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${name}-${image.name}-${uuidv4()}`;

        const storageRef = ref(storage, 'images/' + fileName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
      // UPDATE TO TOAST ERROR
      alert('Error: Images not uploaded');
      return;
    });

    const formDataCopy = {
      ...formData,
      imgUrls
    };

    delete formDataCopy.images;

    const docRef = await addDoc(collection(db, 'customBuilds'), formDataCopy);
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