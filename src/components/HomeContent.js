import axios from "axios";
import React, { useState, useEffect } from "react";
import Rows from "./Rows";

const HomeContent = () => {

  const [Popular, setPopular] = useState([]);
  const [NowPlaying, setNowPlaying] = useState([]);
  const [Topratd, setTopratd] = useState([]);
  const [PopularTV, setPopularTV] = useState([]);

  const API_KEY = "b0a995e6f30e543c9851f36efe29711a";
  const BASE_URL = "https://api.themoviedb.org";
  const NowplayingUrl = `${BASE_URL}/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  const Popularurl = `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const TopratedUrl = ` ${BASE_URL}/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  const PopularTvshowUrl = `${BASE_URL}/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    const PopularFunc = async () => {
      await axios.get(Popularurl).then((resp) => {
        setPopular(resp.data.results);
      });
    };

    const NoWplayFunc = async () => {
      await axios.get(NowplayingUrl).then((resp) => {
        setNowPlaying(resp.data.results);
      });
    };

    const TopratedFunc = async () => {
      await axios.get(TopratedUrl).then((resp) => {
        setTopratd(resp.data.results);
      });
    };

    const PopularTvFunc = async () => {
      await axios.get(PopularTvshowUrl).then((resp) => {
        setPopularTV(resp.data.results);
      });
    };

    PopularFunc();
    NoWplayFunc();
    TopratedFunc();
    PopularTvFunc();
  }, []);

  return (
    <div className="main-row-section">
      <Rows Row_name={"Popular Movies"} data={Popular} />
      <Rows Row_name={"Top rated Movies"} data={Topratd} />
      <Rows Row_name={"Trending Movies"} data={NowPlaying} />
      <Rows Row_name={"Popular TV Show"} data={PopularTV} />
    </div>
  );
};

export default HomeContent;
