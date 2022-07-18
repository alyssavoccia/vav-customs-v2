import { useContext } from 'react';
import BlogPostsContext from '../../context/blog-posts/BlogPostsContext';
import BlogPostCard from '../blog-post-card/BlogPostCard';
import './blogpostsgrid.scss';

function StoreGrid() {
  const { blogPosts } = useContext(BlogPostsContext)

  return (
    <section className='blog-posts__grid'>
      {blogPosts 
        ? <div className="blog-posts__grid-cards">
            {blogPosts.map(blog => (
              // console.log(blog)
              <BlogPostCard key={blog.title} blog={blog} />
            ))}
          </div>
        : <div className='blog-posts__grid-no-items'>
            <h2 className='blog-posts-__gridno-items_title'>There are currently no blogs available.</h2>
            <p className='blog-posts__grid-no-items_info'>Please check back later!</p>
          </div> 
        
      }
    </section>
  )
}

export default StoreGrid;