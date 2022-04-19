import './blog.scss';

function Blog() {
  return (
    <section class="blog">
      <div class="blog-content container">
        <div class="blog-content_text">
          <p class="blog-content_text-main">Interested in reading more?</p>
          <p>Check out my blog!</p>
        </div>
        <a className="btn" href="#">See Blog Posts</a>
      </div>
    </section>
  )
}

export default Blog