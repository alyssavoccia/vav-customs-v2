import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Gallery from "../components/gallery/Gallery";
import Services from "../components/services/Services";
import Blog from "../components/blog/Blog";

function Landing() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Blog />
    </>
  )
}

export default Landing;