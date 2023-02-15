import React, { useEffect, useState } from 'react';
import axios from "axios";
import Requests from '../api/Request';
import {ImPlay3} from "react-icons/im"
import { Link, useNavigate } from 'react-router-dom';

const UpcomingMovies = () => {
const [errormsg,seterrormsg]= useState(false);
const [isloaded, setloaded]=useState(false);
const [URL,setURL]= useState(Requests.UpcomingMovies);
const [imgUrl,setImgUrl]= useState("https://image.tmdb.org/t/p/original")
// const [videoKey,setvideokey]=useState(null);
const [ results,setresults] = useState();
const navigate = useNavigate();

useEffect(()=>{
 axios.get(URL)
 .then(resp=>{
  //getting randoms data from api  
  const randoms= Math.floor(Math.random()*20)
  const data = resp.data.results[randoms];

  setloaded(true); 
   setresults(data)
 })
 .catch(error=>{
    console.log(error);
    seterrormsg(error);
    setloaded(true);
    
})


},[])

// const  Getvideo=()=>{
//   console.log(results.id);
//   axios.get(`https://api.themoviedb.org/3/movie/${results.id}/videos?api_key=b0a995e6f30e543c9851f36efe29711a&language=en-US`)
//   .then(resp=>{
//     const Videosdata =resp.data.results[0];
//     console.log(Videosdata);
//     setvideokey(`https://www.youtube.com/watch?v=`+Videosdata.key)
//     navigate(videoKey)
    
//   })
// }


if(!isloaded){
  return  <h2>Loading...</h2>
} else if (errormsg) {
    return <h2>Something error found</h2>
} 
else{
return <div style={{backgroundImage:`url(${(imgUrl.concat(results.backdrop_path))})`}} className='w-100 upcoming'>
  <div className='movies-details-wrapper'>
   <div className='movies-details'>

   <h2 className='title'>{results.title}</h2>
   <p className='descrtiption'>{results.overview}</p>

   <div className='my'>
 <button  className='btn white-btn'> <ImPlay3/>Play</button>
<button  className='btn gray-btn  white mx'> More Info</button>
   </div>
   </div>

  </div>



</div>


}







}

export default UpcomingMovies