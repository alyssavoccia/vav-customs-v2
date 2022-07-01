import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import SmoothScroll from 'smooth-scroll';
import Client from 'shopify-buy/index.unoptimized.umd';
import CartContext from "./context/cart/CartContext";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/Landing";
import TheShop from "./pages/the-shop/TheShop";
import BlogPosts from "./pages/BlogPosts";
import CustomBuild from './pages/custom-build/CustomBuild';
import Store from "./pages/store/Store";
import Contact from "./components/contact/Contact";
import Cart from "./components/shopify/cart/Cart";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});

function App() {
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    // Create client
    const client = Client.buildClient({
      domain: 'vavcustoms.myshopify.com',
      storefrontAccessToken: '493769b404bf83733826c0783d32ff85'
    });
    dispatch({ type: 'CLIENT_CREATED', payload: client });

    // Get all products
    client.product.fetchAll().then(res => {
      dispatch({ type: 'PRODUCTS_FOUND', payload: res});
    });

    if (!localStorage.getItem('userCart')) {
      // Set up checkout
      client.checkout.create().then(res => {
        dispatch({ type: 'CHECKOUT_FOUND', payload: res});
      });
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="the-shop" element={<TheShop />} />
        <Route path="/blog-posts" element={<BlogPosts />} />
        <Route path='/custom-build' element={<CustomBuild />} />
        <Route path='/store' element={<Store />} />
      </Routes>
      <Contact />
      <Cart />
    </div>
  );
}

export default App;