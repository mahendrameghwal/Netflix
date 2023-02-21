import React from 'react'
import { Link } from 'react-router-dom'
import "./Errorpage.scss"
const ErrorPages = () => {
  return (
    <div className='error-div'>
    <div  className='wrapper'>
    <h1>404 Error</h1>
    <h2>Page Not Found - Sorry, the URL you requested could not be found. </h2>
  <Link to={"/"}>  <button className=' btn btn-read'>go to home</button></Link>
    
    </div>
    
    </div>
  )
}

export default ErrorPages