import axios, { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import Rows from "./Rows";

const HomeContent = () => {
  const [isloaded, setisloaded] = useState(true);
  const [Popular, setPopular] = useState([]);
  const [NowPlaying, setNowPlaying] = useState([]);
  const [Topratd, setTopratd] = useState([]);
  const [upcomingData, setupcomingData] = useState([]);
  const [errormsg, seterrormsg] = useState(null);

  const API_KEY = "b0a995e6f30e543c9851f36efe29711a";
  const BASE_URL = "https://api.themoviedb.org";
  const Popularurl = `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const NowplayingUrl = `${BASE_URL}/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  const TopratedUrl = ` ${BASE_URL}/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  const upcomingMoviesURL= `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

  const PopularFunc = async () => {
    await axios
      .get(Popularurl)
      .then((resp) => {
        setPopular(resp.data.results);
        setisloaded(false);
      })
      .catch((err) => {
        seterrormsg(err.message);
      })
  };

  const NoWplayFunc = async () => {
    await axios
      .get(NowplayingUrl)
      .then((resp) => {
        setNowPlaying(resp.data.results);
        setisloaded(false);
      })
      .catch((err) => {
        seterrormsg(err.message);
      });
  };

  const TopratedFunc = async () => {
    await axios
      .get(TopratedUrl)
      .then((resp) => {
        setTopratd(resp.data.results);
        setisloaded(false);
      })
      .catch((err) => {
        seterrormsg(err);
      });
  };

  const UpComingMoviesFunc = async () => {
    await axios
      .get(upcomingMoviesURL)
      .then((resp) => {
      setupcomingData(resp.data.results);
        setisloaded(false);
      })
      .catch((err) => {
        seterrormsg(err);
      });
  };
  useEffect(() => {
    PopularFunc();
    NoWplayFunc();
    TopratedFunc();
    UpComingMoviesFunc();
  }, []);

  if (
    isloaded ||
    Popular === [] ||
    NowPlaying === [] ||
    Topratd === [] ||
    upcomingData === []
  ) {
    return <h2>loading.......</h2>;
  } else if (errormsg) {
    return <h2>{errormsg}</h2>;
  }
  
  else {
    return (
      <div className="main-row-section">
        <Rows Row_name={"Popular Movies"} data={Popular} />
        <Rows Row_name={"Top rated Movies"} data={Topratd} />
        <Rows Row_name={"Trending Movies"} data={NowPlaying} />
        <Rows Row_name={"UpComing Movies"} data={upcomingData} />
      </div>
    );
  }
};

export default HomeContent;
