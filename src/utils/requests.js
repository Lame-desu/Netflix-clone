const requests = {
  fetchTrending: "/trending/all/week",
  fetchNetflixOriginals: "/discover/tv?with_networks=213",
  fetchTopRatedMovies: "/movie/top_rated",
  fetchActionMovies: "/discover/movie?with_generes=28",
  fetchComedyMovies: "/discover/movie?with_generes=35",
  fetchHorrorMovies: "/discover/movie?with_generes=27",
  fetchRomanticMovies: "/discover/movie?with_generes=10749",
  fetchDocumentaries: "/discover/movie?with_generes=99",
  fetchTvShow: "tv/popular?page=1",
};

export default requests;
