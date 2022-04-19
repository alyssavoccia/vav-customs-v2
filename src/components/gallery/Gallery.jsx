import { useState, useEffect } from 'react';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../../firebase.config';
import './gallery.scss';

function Gallery() {
  const [loading, setLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const getGridImages = async () => {
      const imageUrls = [];
      const imageseRef = ref(storage);
      listAll(imageseRef).then((res) => {
        res.items.forEach(item => {
          getDownloadURL(ref(storage, `/${item._location.path_}`)).then(url => {
            imageUrls.push(url);
            if (imageUrls.length === res.items.length) {
              setGalleryImages(imageUrls);
              setLoading(false);
            }
          });
        });
      });
    }
  
    getGridImages();
  }, []);

  if (loading) {
    return <h1>Loading</h1>
  }

  return (
    <section className="gallery" id="gallery">
      <div className="social-media container">
        <div className="social-media_icons">
          <i className="fab fa-facebook-f fa-5x"></i>
          <i className="fab fa-instagram fa-5x"></i>
        </div>
        <div className="social-media_text">
          <p>Follow me on social media to see my latest work!</p>
        </div>
      </div>
      <div className="gallery-masonry container">
        { galleryImages &&
            galleryImages.map((img, i) => {
              return (
                <img className='item' src={`${img}`} alt='Woodwork piece' key={i} />
              )
            })
        }
      </div>
    </section>
  )
}

export default Gallery;