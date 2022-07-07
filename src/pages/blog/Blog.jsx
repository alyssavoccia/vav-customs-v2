import BlogPostsGrid from '../../components/blog-posts-grid/BlogPostsGrid';
import './blog.scss';

function BlogPosts() {
  return (
    <section className='blog container' id='custom-build'>
      <h1 className='section-title'>Blog Posts</h1>
      <BlogPostsGrid />
    </section>
  )
}

export default BlogPosts;