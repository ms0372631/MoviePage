import { Navbar } from "./components/navbar";
import React, { StrictMode, useState, useC } from 'react';
import redux, { Provider } from "react-redux";
import "./App.sass";
import ReactDOM from 'react-dom';
import { PagePopMovies } from "./components/PagePopMovies";
import Sort from "./components/sort/Sort";
import { LikeList } from "./components/likeList";
import { BlockList } from "./components/blockList";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";

export const MovieContext = React.createContext();

function App() {

    // for homepage
    // TODO:: for pop-movies
    // TODO:: access like list
    // TODO:: access block list
    // TODO:: add to like/block list

    const [savedList, setSavedList] = useState([]);
    // for like list
    // TODO:: access like list
    // TODO:: remove from like list
    // TODO:: add to block list

    // for block list
    // TODO:: access block list
    // TODO:: remove from block list
    // TODO:: add to like list

    // const [popMovies, setPopMovies] = useState([]);
    // const [movieList, setmovieList] = useState([]);

    const allMovieLists = {
      savedList,
      setSavedList
    };

    return (
      <MovieContext.Provider value={allMovieLists}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<Sort />} /> */}
          <Route path="/movies-list" element={<PagePopMovies />} />
          <Route path="/liked-list" element={<LikeList />} />
          <Route path="/blocked-list" element={<BlockList />} />
        </Routes>
      </MovieContext.Provider>
    );
  }

  export default App;
