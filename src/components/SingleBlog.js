import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import apple from '../Assets/apple.png'
import Footer from './Footer';
import  { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore'
import NavBar from './NavBar';

function SingleBlog(props) {
  const [posts, setPosts] = useState([])  
  const {postAuthor} = useParams()
    
    // const url = 'https://newsapi.org/v2/everything?' +
    // 'q=Apple&' +
    // 'from=2022-12-14&' +
    // 'sortBy=popularity&' +
    // 'apiKey=8eae748eabe14f11ae29039013de3dfe';

    // const fetchNews = async () =>{
    //   try {
    //     const response = await axios.get(url)
    //     const data = response.data
    //     const articles = data.articles
    //     // articles.forEach(article => {
    //     //   return console.log(article.title)
    //     // });
    //     // console.log(articles)
    //     setPosts(articles)
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
      setPosts(results);
    })
    } 

    useEffect(() => {
      fetchNews()
    },[])

    // console.log(posts)

    const detail = posts.find((post) => post.author === postAuthor )


    if(posts.length === 0) {
      return null
    }
    
    // console.log(detail)
  return (
    <>
    <NavBar />
      
      <div className='single-container'>
        <div className="single-content">
          <h1>{detail.title}</h1>
          <div className="apple-img">
          <img src={apple} alt="apple logo from flaticon.com" />
          </div>
          

          <p>{detail.content}</p>
        </div>
       
      </div>
    
    <Link to="/home">Home</Link>
    <Footer />
    </>
    
  )
}

SingleBlog.propTypes = {}

export default SingleBlog
