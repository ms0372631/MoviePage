import React, {useState, useEffect} from "react";
import {MovieComponent} from "./movie-components/MovieComponent";
import { Carousel } from "./carousel/Carousel"
import { getURL } from "./API";
import "../styles/HomePage.css";

export const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const url=getURL("playing");
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
            movie={movie}/>
            ))}
        </div>
        </div>
    )
}
