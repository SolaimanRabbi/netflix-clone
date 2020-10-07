const API_Key = "44325f4e1419694c9d6a35e30a9cba14";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_Key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_Key}&with_networks=213`,
  fetchToRated: `/movie/top_rated?api_key=${API_Key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_Key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_Key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_Key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_Key}&with-genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_Key}&with_genres=99`,
};

export default requests;
