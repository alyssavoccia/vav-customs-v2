import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/cart/CartContext';
import { CustomBuildsProvider } from './context/custom-builds/CustomBuildsContext';
import { BlogPostsProvider } from './context/blog-posts/BlogPostsContext';
import './index.css';
import 'react-responsive-modal/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BlogPostsProvider>
        <CustomBuildsProvider>
          <Router>
            <App />
          </Router>
        </CustomBuildsProvider>
      </BlogPostsProvider>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();