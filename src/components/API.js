const MOVIE_API = "https://api.themoviedb.org/3";
const ROUTE_NOW_PLAYING = "/movie/now_playing";
const ROUTE_POP = "/movie/popular";
const API_KEY = "cb12866696d0696b62106d1f1101392a";

export const IMG_API = "https://image.tmdb.org/t/p/w500";

// API useage example

// "playing"  -> for homepage -> get movies that are now in the theaters
// "pop"      -> for pop movie list -> get popular movies
export function getURL(cate, page) {
  let url = MOVIE_API;
  if(cate === "playing") url += ROUTE_NOW_PLAYING;
  else if (cate === "pop") url += ROUTE_POP;
  url += `?api_key=${API_KEY}`
      + (page > 0 ? `&page=${page}` : "");
  return url;
}