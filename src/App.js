import { Navbar } from "./components/navbar";
import React, { StrictMode } from 'react';
import redux, { Provider } from "react-redux";
import Movie from "./MovieComponent";

function App() {
    return (
      <>
        <Navbar />
        <Movie />
      </>
    );
  }
  
  export default App;
