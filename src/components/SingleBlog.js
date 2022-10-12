import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function SingleBlog(props) {
    const {postAuthor} = useParams()
    const url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2022-10-04&' +
    'sortBy=popularity&' +
    'apiKey=8eae748eabe14f11ae29039013de3dfe';

  return (
    <>
    <div>SingleBlog</div>
    <div>
    <h2></h2>
    <h5></h5>
    <h3>{postAuthor}</h3>
    </div>
    
    <Link to="/">Home</Link>
    </>
    
  )
}

SingleBlog.propTypes = {}

export default SingleBlog
