import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import redux,{Provider} from "react-redux";
import Movie from "./MovieComponent";

function App() {
    return (
      <div>
        <Movie />
      </div>
    );
  }
  
  export default App;
