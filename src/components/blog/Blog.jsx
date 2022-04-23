import { Link } from 'react-router-dom';
import './blog.scss';

function Blog() {
  return (
    <section className="blog">
      <div className="blog-content container">
        <div className="blog-content_text">
          <p className="blog-content_text-main">Interested in reading more?</p>
          <p>Check out my blog!</p>
        </div>
        <Link className='btn' to='/blog-posts'>See Blog Posts</Link>
      </div>
    </section>
  )
}

export default Blog;