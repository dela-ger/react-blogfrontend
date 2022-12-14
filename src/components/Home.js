import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import uniqid from "uniqid"
import arrowRight from "../Assets/arrow-right-solid.svg";
import axios from 'axios';
import  { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore'

function Home() {
  // const url = 'https://newsapi.org/v2/everything?' +
  // 'q=Apple&' +
  // 'from=2022-12-14&' +
  // 'sortBy=popularity&' +
  // 'apiKey=8eae748eabe14f11ae29039013de3dfe';
  const [posts, setPost] = useState([])

  // const fetchNews = async () =>{
  //   try {
  //     const response = await axios.get(url)
  //     const data = response.data
  //     const articles = data.articles
      
  //     setPost(articles)
  //   } catch (error) {
  //     console.log(error.response)
  //   }
  // }

  const fetchNews = () => {
    const postsRef = collection(db, 'posts')
    getDocs(postsRef).then((snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({id: doc.id, ...doc.data()})
    })
    setPost(results);
  })
  }

  useEffect(() => {
    fetchNews()
  },[])

  // console.log(posts)

  
  
  // function getPosts() {
  //   let list = []
  //   let result = []

  //   posts.map(post => {
  //     return list.push(
  //       <div key={uniqid()} className="blog-card">
  //         <div className="image-featured">
            
  //         </div>
  //         <div className="title-block">
  //           <div className="title">
  //             <h3>{post.title}</h3>
  //           </div>
  //           <div className="date-btn">
  //             <span id="date">
  //               September,2022
  //             </span>
  //             <Link to={`/blog/${post.author}`}>
  //               <button className='more-btn'><img id='arrow-right' src={arrowRight} alt="arrow right" /></button>
  //             </Link>
  //           </div>
  //         </div>
          
  //       </div>
  //     )
  //   })

  //   for(let i=0; i<list; i++){
  //     result.push(
  //       list[i]
  //     )
  //   }

  //   return result
    
  // }
  function getPosts() {
    // let list = [];
    // let result = [];

    return posts.map(post => {
      return (
        <div key={uniqid()} className="blog-card">
          <div className="image-featured">
            
           </div>
           <div className="title-block">
            <div className="title">
              <h3>{post.title}</h3>
             </div>
             <div className="date-btn">
               <span id="date">
                 September,2022
               </span>
               <Link to={`/blog/${post.author}`}>
                 <button className='more-btn'><img id='arrow-right' src={arrowRight} alt="arrow right" /></button>
               </Link>
             </div>
           </div>
          
         </div>
      )
    })

    // for (let i = 0; i < list; i++){
    //   result.push(list[i])
    // }
  }

  // if(posts.length === 0) {
  //   return null
  // }

  console.log(getPosts())
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

<hr />

      <section className='newsletter'>
        <div className="description news-box">
          <h1>Stay in the know</h1>
          <p>Join Kob's blog Newsletter to stay up-to-date
            on what's happening with people in the community
          </p>
          <img src="" alt="" />
        </div>

        <div className="news-sign-up news-box">
          <h2>Join Our Newsletter</h2>

          <form action="/" method="post">
            <div className="form-box">
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='email' className='form-input' placeholder='kobby@gmail.com'/>

              <label htmlFor="first-name">First name</label>
              <input type="text" name='first-name' id='first-name' className='form-input' placeholder='Kobby'/>
            
              <label htmlFor="last-name">Last name</label>
              <input type="text" name="last-name" id="last-name" className='form-input' placeholder='Bobby'/>

              <input type="button" value="Submit" className='form-input' id='submit-btn'/>
            </div>

          </form>
        </div>

      </section>

    </>
  )
}

export default Home