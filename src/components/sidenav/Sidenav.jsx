import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import BlogPostsContext from '../../context/blog-posts/BlogPostsContext';
import './sidenav.scss';

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
      <div className='sidenav__section'>
        <h3>Similar Posts</h3>
          {similarPosts && similarPosts.length > 0
            ? similarPosts.map(post => (
                <Link key={post.title} className='sidenav__section-post'>
                  <div className="sidenav__post-header">
                    <p>{post.title}</p>
                  </div>
                </Link> 
              ))
            : <p className='sidenav__section-no-posts'>Currently no posts available</p>
          }
      </div>
      <div className='sidenav__section'>
        <h3>Recent Posts</h3>
          {recentPosts && recentPosts.length > 0
            ? recentPosts.map(post => (
              <div key={post.title} className="sidenav__section-post">
                <Link  to={`/blog-posts/${post.title}`}>
                  <h4 classsname='sidenav__section-post-title'>{post.title}</h4>
                  <p>{post.tagline}</p>
                  <span>{post.timestamp.toDate().toDateString()}</span>
                </Link>
              </div>
            ))
            : <p>Currently no posts available</p>
          }
          {recentPosts && recentPosts.length === 2 && 
            <Link to='/blog-posts' className='sidenav__section-link'>See all</Link>
          }
      </div>
    </div>
  )
}

export default Sidenav;