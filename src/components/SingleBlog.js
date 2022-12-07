import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function SingleBlog(props) {
  const [posts, setPosts] = useState([])  
  const {postAuthor} = useParams()
    
    const url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2022-12-06&' +
    'sortBy=popularity&' +
    'apiKey=8eae748eabe14f11ae29039013de3dfe';

    const fetchNews = async () =>{
      try {
        const response = await axios.get(url)
        const data = response.data
        const articles = data.articles
        // articles.forEach(article => {
        //   return console.log(article.title)
        // });
        // console.log(articles)
        setPosts(articles)
      } catch (error) {
        console.log(error.response)
      }
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
      <div>SingleBlog</div>
      <div>
        <h2>{detail.title}</h2>
        <p>{detail.content}</p>
      </div>
    
    <Link to="/">Home</Link>
    </>
    
  )
}

SingleBlog.propTypes = {}

export default SingleBlog
