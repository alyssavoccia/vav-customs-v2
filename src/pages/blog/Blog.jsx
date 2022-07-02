import BlogPostsGrid from '../../components/blog-posts-grid/BlogPostsGrid';
import './blog.scss';

function BlogPosts() {
  return (
    <div className='blog container' id='custom-build'>
      <h1 className='section-title'>Blog Posts</h1>
      <BlogPostsGrid />
    </div>
  )
}

export default BlogPosts;