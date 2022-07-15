import React from 'react';
import ReactDOM from 'react-dom/client';
import createStore from "./store/store"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);
