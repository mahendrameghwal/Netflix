import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SimilarMoviesElement = ({ UrlImage, similardata  }) => {
 

  return (
   
    <div className="recommend">
      {similardata.map((similar, i) => {
        if (similar.backdrop_path === null) {
          return <div key={i}>{null} </div>;
        } else {
          return (
            <Link key={i} to={`/moviedetail/${similar.id}`}>
              <img 
                alt={similardata.title}
                src={UrlImage.concat(similar.backdrop_path)}
              />
               </Link>
          );
        }
      })}
    </div>
  );
};

export default SimilarMoviesElement;

