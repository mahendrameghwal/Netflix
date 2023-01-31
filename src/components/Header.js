
import {logo} from "../images/image"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='fixed-header header container-fluid'>
   <div><Link to={"/"}><img alt='netflix-logo' className='logo' src={logo}/></Link></div>

   <div>
   <button className='btn btn-header transparent'>English</button>
   <button  className='btn btn-header btn-read'>Sign in</button>

   </div>

    
    
    </div>
  )
}

export default Header