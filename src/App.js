import { Navbar } from "./components/Navbar";
import React, { StrictMode, useState, useC } from 'react';
import redux, { Provider } from "react-redux";
import "./styles/App.sass";
import ReactDOM from 'react-dom';
import { PagePopMovies } from "./components/PagePopMovies";
import Sort from "./components/sort/Sort";
import { LikeList } from "./components/PageLikeList";
import { BlockList } from "./components/PageBlockList";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";

export const MovieContext = React.createContext();


function App() {

    const [savedList, setSavedList] = useState([]);

    const allMovieLists = {
      savedList,
      setSavedList
    };

    return (
      <MovieContext.Provider value={allMovieLists}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies-list" element={<PagePopMovies />} />
          <Route path="/liked-list" element={<LikeList />} />
          <Route path="/blocked-list" element={<BlockList />} />
        </Routes>
      </MovieContext.Provider>
    );
  }

  export default App;
