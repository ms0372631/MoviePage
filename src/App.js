import { Navbar } from "./components/navbar";
import React, { StrictMode, useState, useC } from 'react';
import redux, { Provider } from "react-redux";
import { Selector } from "./selector";
import "./App.sass";
import ReactDOM from 'react-dom';
import Movie from "./components/movie1/MovieComponent";
import Sort from "./components/sort/Sort";

function App() {
  
    const [likeList, setLikeList] = useState([]);
    const [blockList, setBlockList] = useState([]);
    const [popMovies, setPopMovies] = useState([]);
    const [movieList, setmovieList] = useState([]);

    const allMovieLists = {
      likeList,
      setLikeList,
      blockList,
      setBlockList,
      movieList,
      setmovieList
    };

    const MovieContext = React.createContext(allMovieLists);

    return (
      <MovieContext.Provider value={MovieContext}>
        <Navbar />
        <Selector />
        <Sort />
        <Movie/>
      </MovieContext.Provider>
    );
  }

  export default App;
