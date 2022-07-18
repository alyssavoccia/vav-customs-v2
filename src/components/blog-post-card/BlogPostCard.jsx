import { Link } from 'react-router-dom';
import './blogPostCard.scss';

function BlogPostCard({ blog }) {
  return (
      <div className="blog-post__card">
        <Link to='#'>
          <img src={`${blog.imgUrl}`} alt='Blog post cover' />
        </Link>
        <div className='blog-post__card-body'>
          <h2>{blog.title}</h2>
          <p>Welcome to my blog!</p>
          <button>Read more</button>
        </div>
      </div>
  )
}

export default BlogPostCard;