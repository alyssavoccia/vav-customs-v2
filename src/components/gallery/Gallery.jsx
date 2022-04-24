import './gallery.scss';
import GalleryData from './GalleryData';

function Gallery() {
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
        { GalleryData.map((img, i) => {
            return (
              <img className='item' src={img.src} alt={img.alt} key={i} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Gallery;