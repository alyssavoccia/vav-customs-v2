import { Link } from 'react-router-dom';
import './blog.scss';

function Blog() {
  return (
    <section class="blog">
      <div class="blog-content container">
        <div class="blog-content_text">
          <p class="blog-content_text-main">Interested in reading more?</p>
          <p>Check out my blog!</p>
        </div>
        <Link className='btn' to='/blog-posts'>See Blog Posts</Link>
      </div>
    </section>
  )
}

export default Blog;