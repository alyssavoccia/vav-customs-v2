import './blogpostsgrid.scss';

function StoreGrid() {
  let blogPosts;

  return (
    <section className='blog-posts'>
      {blogPosts 
        ? <h1>Blogs</h1>
        : <div className='blog-posts-no-items'>
            <h2 className='blog-posts-no-items_title'>There are currently no blogs available.</h2>
            <p className='blog-posts-no-items_info'>Please check back later!</p>
          </div> 
        
      }
    </section>
  )
}

export default StoreGrid;