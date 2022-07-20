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
import {HomePage} from "./HomePage";

export const MovieContext = React.createContext();

function App() {

    // for homepage
    // TODO:: for pop-movies
    // TODO:: add to like/block list

    // for like list
    const [likeList, setLikeList] = useState([]);
    // TODO:: remove from like list
    // TODO:: add to block list

    // for block list
    const [blockList, setBlockList] = useState([]);
    // TODO:: remove from block list
    // TODO:: add to like list

    // const [popMovies, setPopMovies] = useState([]);
    // const [movieList, setmovieList] = useState([]);

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
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<Sort />} /> */}
          <Route path="/movies-list" element={<Movie />} />
          <Route path="/liked-list" element={<LikeList />} />
          <Route path="/blocked-list" element={<Blockist />} />
        </Routes>
      </MovieContext.Provider>
    );
  }

  export default App;
