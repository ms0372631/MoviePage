import { Navbar } from "./components/navbar";
import React, { StrictMode } from 'react';
import redux, { Provider } from "react-redux";
import Movie from "./MovieComponent";
import { Selector } from "./Selector";
import "./App.sass";

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
