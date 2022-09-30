import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import seven from "../Assets/17.svg";

function Home() {

  const [blog, setBlog] = useState([])

  const getCard = () => {

  }
  

  return (
    <>
      <section className='hero'>
        <div className="hero-content">
          <h1> What Topic will we put here...</h1>
          <button id='hero-btn'><Link to='/blog'>Read more</Link></button>
        </div>
      </section>

<hr />

      <section className="featured-blogs">
        <div className="blog-card">
          <div className="image-featured">
            <img id="title-svg" src={seven} alt="some svg" />
          </div>
          <div className="title">
            <h3>The Best Harry Potter Films</h3>
          </div>
          <div className="date-btn">
            <span id="date">
              September,2022
            </span>
            <button className='feat-btn'>More</button>
          </div>
        </div>

        <div className="blog-card">
          <div className="image-featured">
            <img id="title-svg" src={seven} alt="some svg" />
          </div>
          <div className="title">
            <h3>The Best Harry Potter Films</h3>
          </div>
          <div className="date-btn">
            <span id="date">
              September,2022
            </span>
            <button className='feat-btn'>More</button>
          </div>
        </div>

        <div className="blog-card">
          <div className="image-featured">
            <img id="title-svg" src={seven} alt="some svg" />
          </div>
          <div className="title">
          <h3>The Best Harry Potter Films</h3>
          </div>
          <div className="date-btn">
            <span id="date">
              September,2022
            </span>
            <button className='feat-btn'>More</button>
          </div>
        </div>

        <div className="blog-card">
          <div className="image-featured">
            <img id="title-svg" src={seven} alt="some svg" />
          </div>
          <div className="title">
          <h3>The Best Harry Potter Films</h3>
          </div>
          <div className="date-btn">
            <span id="date">
              September,2022
            </span>
            <button className='feat-btn'>More</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home