import React, {useState, useEffect} from "react";

export const HomePage = () => {
    const [movies, setMovies] = useState();

    useEffect(() => {
        fetch(`url`).then((res)=>res.json()).then()
    }, []);

    return (
        <div>
        <h1>Our Top Rated Movie List</h1>
        <h2>This is the home page</h2>
        </div>
    )
}