export const fetchMovies = page => (
  $.ajax({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=${page}`
  })
)