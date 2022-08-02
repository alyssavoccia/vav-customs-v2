import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import './custombuild.scss';
// import coffeeTable from '../../../public/assets/table1.jpg';

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
    <>
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
      <section className="why-block">
        <h2 className='why-block__title'>Why Custom?</h2>
        <div className="why-block__section">
          <div className="why-block__section-img">
            <img src='/assets/grid-images/table1.jpg' alt='Custom wood coffee table' />
          </div>
          <div className="why-block__section-text">
            <h3>Uniquely Yours</h3>
            <p>If you're not looking for a pre-made piece, this option allows you to order a fully custom piece exactly how you want. This means no two pieces will be the same, giving you a unique piece for your home. The options are endless as you are able to specify type of wood and duotone, and specifications to name a few. Have a picture of a piece of furniture or item that you want to draw inspiration from? You are able to upload it and tell us why you like it and how you want it incorporated into your piece!</p>
          </div>
        </div>
        <div className="why-block__section">
          <div className="why-block__section-text move-bottom">
            <h3>More Options for Pieces</h3>
            <p>Our store offers a wide variety of pre-made peieces, however, you might not find exactly what you're looking for. A custom order allows us to create pieces that you wouldn't otherwise find in our store because they are a specialized item.</p> {/* WORK ON */}
          </div>
          <div className="why-block__section-img">
            <img src='/assets/grid-images/vanity1.jpg' alt='Custom wood coffee table' />
          </div>
        </div>
        <div className="why-block__section">
          <div className="why-block__section-img">
            <img src='/assets/grid-images/bathroom1.jpg' alt='Custom wood coffee table' />
          </div>
          <div className="why-block__section-text">
            <h3>Matching Wood Sets</h3>
            <p>Are you working on a DIY project redoing a part of your house? Custom orders allow us to create matching sets to help you complete your project! You're able to receive pieces of the same style to seamlessly fit together, completing your space.</p> {/* WORK ON */}
          </div>
        </div>
      </section>
    </>
  )
}

export default CustomBuild;