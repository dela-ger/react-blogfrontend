import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import Posts from "../data/data.json"

function SingleBlog(props) {
    const {blogId} = useParams()  

  return (
    <>
    <div>SingleBlog</div>
    <div>
    {/* <h2>{title}</h2>
    <h5>{body}</h5> */}
    <h3>{blogId}</h3>
    </div>
    
    <Link to="/">Home</Link>
    </>
    
  )
}

SingleBlog.propTypes = {}

export default SingleBlog
