import React, { useEffect } from 'react'

function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="blogs-container">
      <div className="blogs-heading">
        <h2>Our Blogs</h2>
      </div>
      <div className="blog-post">
        <div className="blog-cards">
          <div className="blog-card">
          <img src="https://picsum.photos/200/300" alt="Blog Post"/>
          <div className="blog-content">
            <h3>Blog Post 1</h3>
            <p>Lorem, ipsum dolordolorem? Saepe necessitatibus placeat reiciendis aliquam, eius ea!</p>
            <button>See More</button>
          </div>
          </div>
          <div className="blog-card">
          <img src="https://picsum.photos/200/300" alt="Blog Post"/>
          <div className="blog-content">
            <h3>Blog Post 2</h3>
            <p>Lorem, ipsum dolordolorem? Saepe necessitatibus placeat reiciendis aliquam, eius ea!</p>
            <button>See More</button>
          </div>
          </div>
          <div className="blog-card">
          <img src="https://picsum.photos/200/300" alt="Blog Post"/>
          <div className="blog-content">
            <h3>Blog Post 3</h3>
            <p>Lorem, ipsum dolordolorem? Saepe necessitatibus placeat reiciendis aliquam, eius ea!</p>
            <button>See More</button>
          </div>
          </div>
          <div className="blog-card">
          <img src="https://picsum.photos/200/300" alt="Blog Post"/>
          <div className="blog-content">
            <h3>Blog Post 4</h3>
            <p>Lorem, ipsum dolordolorem? Saepe necessitatibus placeat reiciendis aliquam, eius ea!</p>
            <button>See More</button>
          </div>
          </div>
          <div className="blog-card">
          <img src="https://picsum.photos/200/300" alt="Blog Post"/>
          <div className="blog-content">
            <h3>Blog Post 5</h3>
            <p>Lorem, ipsum dolordolorem? Saepe necessitatibus placeat reiciendis aliquam, eius ea!</p>
            <button>See More</button>
          </div>
          </div>
          <div className="blog-card">
          <img src="https://picsum.photos/200/300" alt="Blog Post"/>
          <div className="blog-content">
            <h3>Blog Post 6</h3>
            <p>Lorem, ipsum dolordolorem? Saepe necessitatibus placeat reiciendis aliquam, eius ea!</p>
            <button>See More</button>
          </div>
          </div>
          <div className="blog-card">
          <img src="https://picsum.photos/200/300" alt="Blog Post"/>
          <div className="blog-content">
            <h3>Blog Post 7</h3>
            <p>Lorem, ipsum dolordolorem? Saepe necessitatibus placeat reiciendis aliquam, eius ea!</p>
            <button>See More</button>
          </div>
          </div>
          <div className="blog-card">
          <img src="https://picsum.photos/200/300" alt="Blog Post"/>
          <div className="blog-content">
            <h3>Blog Post 8</h3>
            <p>Lorem, ipsum dolordolorem? Saepe necessitatibus placeat reiciendis aliquam, eius ea!</p>
            <button>See More</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs