import { Routes, Route } from "react-router-dom";
import SmoothScroll from 'smooth-scroll';
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/Landing";
import BlogPosts from "./pages/BlogPosts";
import Store from "./pages/Store";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog-posts" element={<BlogPosts />} />
        <Route path='/store' element={<Store />} />
      </Routes>
    </>
  );
}

export default App;