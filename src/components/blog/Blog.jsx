import { Link } from 'react-router-dom';
import './blog.scss';

function Blog() {
  return (
    <section className="blog">
      <div className="blog__content container">
        <div className="blog__content-text">
          <p className="blog__content-text-main">Interested in reading more?</p>
          <p>Check out my blog!</p>
        </div>
        <Link className='btn' to='/blog-posts'>See Blog Posts</Link>
      </div>
    </section>
  )
}

export default Blog;