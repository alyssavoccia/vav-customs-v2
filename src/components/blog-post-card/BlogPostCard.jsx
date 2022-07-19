import { Link } from 'react-router-dom';
import './blogPostCard.scss';

function BlogPostCard({ blog }) {
  return (
    <div className="blog-post__card">
      <Link className='blog-post__card-img' to={`/blog-posts/${blog.title}`}>
        <img src={`${blog.imgUrl}`} alt='Blog post cover' />
        {blog.category && <span className={`blog-post__card-img__tag blog-post__card-img__${blog.category.toLowerCase()}`}>{blog.category}</span>}
      </Link>
      <div className='blog-post__card-body'>
        <h2>{blog.title}</h2>
        <p>{blog.tagline}</p>
        <Link to={`/blog-posts/${blog.title}`} className='blog-post__card-btn'>Read more</Link>
      </div>
    </div>
  )
}

export default BlogPostCard;