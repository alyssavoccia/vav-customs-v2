import Hero from "../components/landing-page/hero/Hero";
import About from "../components/landing-page/about/About";
import Gallery from "../components/landing-page/gallery/Gallery";
import Services from "../components/landing-page/services/Services";
import Blog from "../components/landing-page/blog/Blog";

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