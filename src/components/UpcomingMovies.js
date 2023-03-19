/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Requests from "../api/Request";
import { ImPlay3 } from "react-icons/im";
// import SearchResultComponent from "../page/SearchResultComponent";
import { useNavigate } from "react-router-dom";
import HomeContent from "./HomeContent";

const UpcomingMovies = () => {
  const navigate = useNavigate();
  const [errormsg, seterrormsg] = useState(null);
  const [isloaded, setloaded] = useState(true);
  const [URL, setURL] = useState(Requests.UpcomingMovies);
  const [results, setresults] = useState(null);

  const [showInput, setShowInput] = useState(false);
  const [SearchResult, setSearchResult] = useState("");
  const [Query, setQuery] = useState("");
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const SearchApiURL = `https://api.themoviedb.org/3/search/movie?api_key=b0a995e6f30e543c9851f36efe29711a&language=en-US&query=${Query}&page=1&include_adult=false`;

  const GetRandomUpComingData = async () => {
    await axios
      .get(URL)
      .then((resp) => {
        //getting randoms data from api
        const randoms = Math.floor(Math.random() * 20);
        const data = resp.data.results[randoms];

        setloaded(false);
        setresults(data);
      })
      .catch((error) => {
        seterrormsg(error.message);
        setloaded(false);
      });
  };

  const HandleSearchForm = (e) => {
    e.preventDefault();

    GetseacrhDataFunction();
  };
  const GetseacrhDataFunction = async () => {
    await axios
      .get(SearchApiURL)
      .then((resp) => {
        setSearchResult(resp.data.results);
        console.log(SearchResult);
      return SearchResult && <HomeContent Query={`Search Results of ${Query}`} data={SearchResult}/>

      })
      .catch((error) => {
        seterrormsg(error.message);
      });
  };

  useEffect(() => {
    GetRandomUpComingData();
  }, []);

  if (isloaded || results === null) {
    return (
      <div className="Load-div">
        <h2 style={{ color: "white" }}>
        
        <img style={{height:"200px"}} src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="loading" />
        </h2>
      </div>
    );
  } else if (errormsg) {
    return (
      <div className="Load-div">
        <h2 style={{ color: "white" }}>Something went wroung</h2>
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundImage: `url(${imgUrl.concat(results.backdrop_path)})`,
        }}
        className="w-100 upcoming"
      >
        <section>
          {showInput ? (
            <form action="/searchresult" onSubmit={HandleSearchForm}>
              <input
                value={Query}
                name="search"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                placeholder="Search movies"
                className="search-btn search-bar"
                type={"text"}
              />
            </form>
          ) : (
            <img
              title="tap to open search"
              className="search-btn"
              onClick={() => {
                setShowInput(!showInput);
              }}
              alt={"search-img"}
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-search-instagram-flatart-icons-outline-flatarticons.png"
            />
          )}
        </section>

        <div className="movies-details-wrapper">
          <div className="movies-details">
            <h2 className="title">{results.title}</h2>
            <p className="descrtiption">{results.overview}</p>

            <div className="my">
              <button className="btn white-btn">
                <ImPlay3 />
                Play
              </button>
              <button className="btn gray-btn  white mx"> More Info</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UpcomingMovies;
