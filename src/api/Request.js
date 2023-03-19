const API_KEY = "b0a995e6f30e543c9851f36efe29711a";
const BASE_URL = "https://api.themoviedb.org";

const Requests = {
  UpcomingMovies: `${BASE_URL}/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default Requests;
