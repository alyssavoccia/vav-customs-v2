import { useEffect, useState, useContext } from 'react';
import BlogPostsContext from '../../context/blog-posts/BlogPostsContext';

function Sidenav({ category, currentBlog }) {
  const { blogPosts } = useContext(BlogPostsContext);
  const [similarPosts, setSimilarPosts] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const relatedPosts = blogPosts.filter(blog => blog.category === category && blog.category && blog.title !== currentBlog);
    setSimilarPosts(relatedPosts.slice(0, 2));
    const newPosts = blogPosts.sort((a, b) => b.timestamp - a.timestamp);
    setRecentPosts(newPosts.slice(0, 2));
  }, [blogPosts, category, currentBlog]);

  return (
    <div className='sidenav'>
      <div className='sidenav__similar'>
        <h3>Similar Posts</h3>
          {similarPosts && similarPosts.length > 0
            ? similarPosts.map(post => (
                <div key={post.title} className='sidenav__post'>
                  <div className="sidenav__post-header">
                    <p>{post.title}</p>
                  </div>
                </div> 
              ))
            : <p>Currently no posts available</p>
          }
      </div>
      <div className='sidenav__recent'>
        <h3>Recent Posts</h3>
          {recentPosts && recentPosts.length > 0
            ? recentPosts.map(post => (
                <div key={post.title} className="sidenav__post">
                  <div className="sidenav__post-header">
                    <p>{post.title}</p>
                    <p>{post.tagline}</p>
                  </div>
                </div>
              ))
            : <p>Currently no posts available</p>
          }
      </div>
    </div>
  )
}

export default Sidenav;