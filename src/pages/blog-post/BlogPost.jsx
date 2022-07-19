import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogPostsContext from '../../context/blog-posts/BlogPostsContext';
import Sidenav from '../../components/sidenav/Sidenav';
import './blogPost.scss';

function BlogPost() {
  const { blogPosts } = useContext(BlogPostsContext);
  const [loading, setLoading] = useState(true);
  const [blogPost, setBlogPost] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (blogPosts) {
      const currentTitle = params.blogTitle.indexOf('%20') === -1 ? params.blogTitle : params.blogTitle.split('%20').join(' ');
      const currentBlog = blogPosts.filter(item => item.title === currentTitle);
      setBlogPost(currentBlog[0]);

      if (blogPost) {
        console.log(blogPost)
        setLoading(false);
      }
    }
  }, [blogPost, blogPosts, params.blogTitle]);

  if (loading) {
    return <p>Loading Blog Post</p>
  }

  return (
    <div className='container'>
      <Link className='btn btn-secondary' to='/blog-posts'>Back to Blog Posts</Link>
      <div className="blog-post">
        <article className="blog-post__content">
          <div className="blog-post__content-header">
            <h1 className="blog-post__content-header__title">{blogPost.title}</h1>
            <span className="blog-post__content-header__info">{blogPost.category} | {blogPost.timestamp.toDate().toDateString()}</span>
          </div>
          <div className='blog-post__content-body' dangerouslySetInnerHTML={{ __html: blogPost.body}}></div>
        </article>
        <div className="blog-post__sidebar">
          <Sidenav category={blogPost.category} currentBlog={blogPost.title} />
        </div>
      </div>
    </div>
  )
}

export default BlogPost;