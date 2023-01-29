import React from 'react'
import {logo} from "../images/image"


const Header = () => {
  return (
    <div className='fixed-header header container-fluid'>
   <div><img alt='netflix-logo' className='logo' src={logo}/></div>

   <div>
   <button className='btn btn-header transparent'>English</button>
   <button className='btn btn-header btn-read'>Sign in</button>

   </div>

    
    
    </div>
  )
}

export default Header