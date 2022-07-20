import React, {useState, useEffect} from "react";
import MovieComponent from "./components/movie1/MovieComponent";
import "./HomePage.css";

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
   

    useEffect(() => {
        const url='https://api.themoviedb.org/3/movie/now_playing?api_key=cb12866696d0696b62106d1f1101392a';
        fetch(url).then(response=>response.json())
        .then(response=>setMovies(response.results))
    }, []);

    return (
        <div className="HomePage">
        <h1>Our Top Rated Movie List</h1>
        <h2>This is the home page</h2>
        <div className="movies_container">
        {movies.map(movie=>(
            <MovieComponent 
            key={movie.id}
            id={movie.id}
            name={movie.title}
            poster_path={movie.poster_path}
            date={movie.release_date}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
            overview={movie.overview}/>
            ))}
        </div>
        </div>
    )
}