import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SimilarMoviesElement from "../components/SimilarMoviesElement";

const MoviesDetails = () => {
  const { id } = useParams();
  const [isloaded, setloaded] = useState(true);
  const [iserror, seterror] = useState(false);
  const [ResultFromApi, setResultFromapi] = useState(null);
  const [SimilarMoviedata, SetSimilarMoviedata] = useState(null);
  const [ImageUrl, setImageUrl] = useState("https://image.tmdb.org/t/p/original");

  // https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=<<api_key>>&language=en-US&page=1

  const SimilarMovies = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=b0a995e6f30e543c9851f36efe29711a&language=en-US&page=1`;
  const MoviesDetailsURL = `https://api.themoviedb.org/3/movie/${id}?api_key=b0a995e6f30e543c9851f36efe29711a&language=en-US`;
  const CastDetailUrl = `  https://api.themoviedb.org/3/movie/${id}/credits?api_key=b0a995e6f30e543c9851f36efe29711a&language=en-US`;

  console.log(CastDetailUrl);
  const GetDetails = () => {
    axios
      .get(MoviesDetailsURL)
      .then((resp) => {
        setResultFromapi(resp.data);

        setloaded(false);
      })
      .catch((error) => {
        seterror(error);
      });
  };

  const GetSimilarMovies = () => {
    axios
      .get(SimilarMovies)
      .then((resp) => {
        SetSimilarMoviedata(resp.data);
        setloaded(false);
        SetSimilarMoviedata(resp.data.results);
      })
      .catch((error) => {
        seterror(error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      GetDetails();
      GetSimilarMovies();
    }, 2000);
  }, []);

  if (isloaded) {
    return <h2 style={{ color: "white" }}>Loading...</h2>;
  } else if (iserror) {
    return <h2>{iserror}</h2>;
  } else {
    return (
      <>
        {ResultFromApi ? (
          <div className="movie-details">
            <div className="movieinfo">
              <section className="moviedetail-row-1">
                <figure>
                  <img
                    alt={ResultFromApi.title}
                    src={ImageUrl.concat(ResultFromApi.poster_path)}
                  />
                </figure>
              </section>
              <section className="moviedetail-row-2">
                <h2 className="title">{ResultFromApi.title}</h2>

                <section className="movie-times">
                  {" "}
                  <span>
                    <span> {Math.floor(ResultFromApi.runtime / 60)}Hour </span>
                    {ResultFromApi.runtime % 60}Min
                  </span>{" "}
                  <span>{ResultFromApi.release_date}</span>{" "}
                </section>

                <article className="overview">
                  <h2>Overview</h2>
                  <p>{ResultFromApi.overview}</p>
                  {ResultFromApi.tagline ? (
                    <h2 className="tagline">
                      <h4 className="tagline-head">TAGLINE</h4>
                      {ResultFromApi.tagline}
                    </h2>
                  ) : null}
                </article>

                <section className="movie-times">
                  <span>Geners:</span>{" "}
                  {ResultFromApi.genres.map((x, i) => {
                    return <span key={i}>{x.name}</span>;
                  })}
                </section>
                <section>
                  <h2 className="overview">similar Movies</h2>
                  <div className="recommend">
                 
                    <SimilarMoviesElement
                      UrlImage={ImageUrl}
                      similardata={SimilarMoviedata}
                    />
                  </div>
                </section>
              </section>
            </div>
          </div>
        ) : (
          <h2>loading.....</h2>
        )}
      </>
    );
  }
};

export default MoviesDetails;
