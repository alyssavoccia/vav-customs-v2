import { useEffect, useState, useContext } from 'react';
import BlogPostsContext from '../../context/blog-posts/BlogPostsContext';

function Sidenav({ category, currentBlog }) {
  const { blogPosts } = useContext(BlogPostsContext);
  const [similarPosts, setSimilarPosts] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const relatedPosts = blogPosts.filter(blog => blog.category === category && blog.category && blog.title !== currentBlog);
    setSimilarPosts(relatedPosts.slice(0, 1));
  }, [blogPosts, category, currentBlog]);

  return (
    <div>
      <div>
        <h3>Similar Posts</h3>
            {similarPosts.length > 0
              ? similarPosts.map(post => (
                  <p>{post.title}</p>
                ))
              : <p>Currently no posts available</p>
            }
      </div>
      <div>
        <h3>Recent Posts</h3>
      </div>
    </div>
  )
}

export default Sidenav;