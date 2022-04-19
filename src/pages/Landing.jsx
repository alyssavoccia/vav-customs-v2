import { useState, useEffect } from "react";
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from "../firebase.config";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Gallery from "../components/gallery/Gallery";
import Blog from "../components/blog/Blog";

function Landing() {
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
            }
          });
        });
      });
    }
  
    getGridImages();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Gallery galleryImages={galleryImages} />
      <Blog />
    </>
  )
}

export default Landing;