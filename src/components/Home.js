import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import seven from "../Assets/17.svg";
import arrowRight from "../Assets/arrow-right-solid.svg";
import axios from 'axios';
import Posts from "../data/data.json"

function Home() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1'
  const [posts, setPost] = useState([])


// function to put data into the posts state
  const dataPost = () => {
    setPost(Posts)
    
  }
  useEffect(() => {
    dataPost()
  },[])

  console.log(posts)
  
  function getPosts() {
    let list = []
    let result = []

    posts.map(post => {
      return list.push(
        <div className="blog-card">
          <div className="image-featured">
            
          </div>
          <div className="title-block">
            <div className="title">
              <h3>{/*{Posts.map(post => {
              return post
            })}*/}{post.title}</h3>
            </div>
            <div className="date-btn">
              <span id="date">
                September,2022
              </span>
              <Link to="/blog">
                <button className='more-btn'><img id='arrow-right' src={arrowRight} alt="arrow right" /></button>
              </Link>
            </div>
          </div>
          
        </div>
      )
    })

    // for(let i=0; i<list.length; i+=2){
    //   result.push(
    //     <div>
    //       <div>
    //         {list[i]}
    //       </div>
    //       <div>
    //         {list[i+1] ? list[i+1] : null }
    //       </div>
    //     </div>
    //   )
    // }

    for(let i=0; i<list.length; i++){
      result.push(
        list[i]
      )
    }

    return result
    
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
        {getPosts()}
      </section>
    </>
  )
}

export default Home