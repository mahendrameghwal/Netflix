const API_KEY = "b0a995e6f30e543c9851f36efe29711a";
const BASE_URL = "https://api.themoviedb.org";





// const API_KEY = "b0a995e6f30e543c9851f36efe29711a";
// const BASE_URL = "https://api.themoviedb.org";
// const Popularurl = `${BASE_URL}/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
// const nowPlaying = `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;


const Requests = {
  UpcomingMovies: `${BASE_URL}/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default Requests;
