import { Navbar } from "./components/navbar";
import React, { StrictMode, useState, useC } from 'react';
import redux, { Provider } from "react-redux";
import { Selector } from "./components/selector";
import "./App.sass";
import ReactDOM from 'react-dom';
import Movie from "./components/movie1/MovieComponent";
import Sort from "./components/sort/Sort";
import { LikeList } from "./components/likeList";
import { Blockist } from "./components/blockList";
import { Route, Routes } from "react-router-dom";

export const MovieContext = React.createContext();

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

    return (
      <MovieContext.Provider value={allMovieLists}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Selector />} />
          {/* <Route path="/" element={<Sort />} /> */}
          <Route path="/movies-list" element={<Movie />} />
          <Route path="/liked-list" element={<LikeList />} />
          <Route path="/blocked-list" element={<Blockist />} />
        </Routes>
      </MovieContext.Provider>
    );
  }

  export default App;
