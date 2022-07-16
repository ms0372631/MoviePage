import { Navbar } from "./components/navbar";
import React, { StrictMode } from 'react';
import redux, { Provider } from "react-redux";
import { Selector } from "./Selector";
import "./App.sass";
import ReactDOM from 'react-dom';
import Movie from "./components/movie1/MovieComponent";

function App() {
    return (
      <>
        <Navbar />
        <Selector />
        <Movie />
      </>
    );
  }

  export default App;
