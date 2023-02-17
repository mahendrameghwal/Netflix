import React, { useState } from "react";
import { Link } from "react-router-dom";
import MoviesDetails from "../page/MoviesDetails";


const Rows = ({ Row_name, data }) => {
  
  const [loaded , setloaded] = useState(false);
  const Img_Url = "https://image.tmdb.org/t/p/original";
  <MoviesDetails imgurl={Img_Url}  />
  //single poster in this poster data comes from props
  const Poster = ({ row_name, data, id }) => {

    return (
      <div className="poster-img">
        <Link to={`/moviedetail/${id}`}><img alt={data.id} src={Img_Url.concat(data)} /></Link>
        
     
      </div>
    );
  };

  //poster data map
  return (
    <>
   {
    data?<div><h2 className="title">{Row_name}</h2>
    
    <div className="row-section">
      

      {data.map((movies) => {
     
        return (
          <Poster
            Row_name={Row_name}
            data={movies.poster_path}
            id={movies.id}  key={movies.id}
          />
        );
      })}
    </div> </div>:<div className="Load"><h2>Loading........</h2></div>
   }


   
    </>
  );
};

export default Rows;
