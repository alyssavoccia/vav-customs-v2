import { useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase.config';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import SmoothScroll from 'smooth-scroll';
import Client from 'shopify-buy/index.unoptimized.umd';
import CartContext from "./context/cart/CartContext";
import CustomBuildsContext from "./context/custom-builds/CustomBuildsContext";
import BlogPostsContext from "./context/blog-posts/BlogPostsContext";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/Landing";
import TheShop from "./pages/the-shop/TheShop";
import Blog from "./pages/blog/Blog";
import CustomBuild from './pages/custom-build/CustomBuild';
import Store from "./pages/store/Store";
import Contact from "./components/contact/Contact";
import Cart from "./components/shopify/cart/Cart";
import Admin from './pages/admin-dashboard/admin/Admin';
import Dashboard from "./pages/admin-dashboard/dashboard/Dashboard";
import CreateBlog from './pages/admin-dashboard/create-blog/CreateBlog';
import AdminNavbar from "./components/admin-dashboard/navbar/AdminNavbar";
import CustomBuilds from "./pages/admin-dashboard/custom-builds/CustomBuilds";
import BuildCardMoreInfo from "./pages/admin-dashboard/build-card-more-info/BuildCardMoreInfo";
import BlogPosts from "./pages/admin-dashboard/blog-posts/BlogPosts";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});

function App() {
  const { dispatch } = useContext(CartContext);
  const { dispatch: setCustomBuilds } = useContext(CustomBuildsContext);
  const { dispatch: setBlogPosts } = useContext(BlogPostsContext);
  const location = useLocation();
  const auth = getAuth();

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

    const fetchBlogPosts = async () => {
      const blogPostsRef = collection(db, 'blogPosts');
      const querySnap = await getDocs(blogPostsRef);
      const blogPosts = [];

      querySnap.forEach((doc) => {
        blogPosts.push(doc.data());
      });

      setBlogPosts({ type: 'ADD_BLOG_POSTS', payload: blogPosts });
    }
    
    onAuthStateChanged(auth, async userAuth => {
      if (userAuth) {
        const fetchCustomBuilds = async () => {
          try {
            // Get reference
            const customBuildsRef = collection(db, 'customBuilds');
    
            const querySnap = await getDocs(customBuildsRef);
    
            const recentBuilds = [];
    
            querySnap.forEach((doc) => {
              recentBuilds.push(doc.data());
            });
    
            setCustomBuilds({ type: 'ADD_CUSTOM_BUILDS', payload: recentBuilds });
          } catch (error) {
            toast.error('Could not fetch recent builds');
          }
        };
    
        fetchCustomBuilds();
      }
      fetchBlogPosts();
    })
  }, [auth, dispatch, setBlogPosts, setCustomBuilds]);

  return (
    <div className="app">
      {!location.pathname.includes('/admin') && <Navbar />}
      {(location.pathname === '/admin' || location.pathname === '/admin/') ? <></> : location.pathname.includes('/admin/') && <AdminNavbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="the-shop" element={<TheShop />} />
        <Route path="/blog-posts" element={<Blog />} />
        <Route path='/custom-build' element={<CustomBuild />} />
        <Route path='/store' element={<Store />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/dashboard' element={<PrivateRoute />}>
          <Route path='/admin/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/admin/custom-builds' element={<PrivateRoute />}>
          <Route path='/admin/custom-builds' element={<CustomBuilds />} />
        </Route>
        <Route path='/admin/custom-build/:userName' element={<PrivateRoute />}>
          <Route path='/admin/custom-build/:userName' element={<BuildCardMoreInfo />} />
        </Route>
        <Route path='/admin/create-blog' element={<PrivateRoute />}>
          <Route path='/admin/create-blog' element={<CreateBlog />} />
        </Route>
        <Route path='/admin/blog-posts' element={<PrivateRoute />}>
          <Route path='/admin/blog-posts' element={<BlogPosts />} />
        </Route>
      </Routes>
      <ToastContainer />
      {!location.pathname.includes('/admin') && <Contact />}
      <Cart /> 
    </div>
  );
}

export default App;