import { Navbar } from "./components/navbar";
import React, { StrictMode } from 'react';
import redux, { Provider } from "react-redux";
import { Selector } from "./selector";
import "./App.sass";
import ReactDOM from 'react-dom';
import Movie from "./components/movie1/MovieComponent";
import Sort from "./components/sort/Sort";

function App() {
    return (
      <>
        <Navbar />
        <Selector />
        <Sort />
        <Movie />
      </>
    );
  }

  export default App;
