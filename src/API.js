export const MOVIE_API = "https://api.themoviedb.org/3";
export const ROUTE_NOW_PLAYING = "/movie/now_playing";
export const ROUTE_POP = "/movie/popular";
export const API_KEY = "cb12866696d0696b62106d1f1101392a";

// API useage example

// "playing"  -> for homepage -> get movies that are now in the theaters
// "pop"      -> for pop movie list -> get popular movies
// export function fetchData(cate, page) {
//   let api = MOVIE_API;
//   if(cate === "playing") api += ROUTE_NOW_PLAYING;
//   else if (cate === "pop") api += ROUTE_POP;
//   api += `?api_key={API_KEY}`
//       + (page > 0 ? `&page=${page}` : "");
//   fetch.(api)
//     .then(res => res.json())
//     .then(val => console.log(val))
// }
