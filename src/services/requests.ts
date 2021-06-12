import { solveParams } from "../utils/requestSolver"

export const movieList = {
   /**
    * Movie Recommendation
    */
   trending: {
      title: "Recomendados",
      params: solveParams("/trending/all/week")
   },
   topRated: {
      title: "Em Alta",
      params: solveParams("/movie/top_rated")
   },
   /**
    * Movie Categories
    */
   action: {
      title: "Ação",
      params: solveParams("/discover/movie?with_genres=28")
   },
   comedy: {
      title: "Comédia",
      params: solveParams("/discover/movie?with_genres=35")
   },
   horror: {
      title: "Terror",
      params: solveParams("/discover/movie?with_genres=27")
   },
   romance: {
      title: "Romance",
      params: solveParams("/discover/movie?with_genres=10749")
   },
   documentary: {
      title: "Documentários",
      params: solveParams("/discover/movie?with_genres=99")
   }
}


