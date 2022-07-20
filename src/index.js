import React from 'react';
import ReactDOM from 'react-dom/client';
import createStore from './store/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
let preloadedState = undefined;
const store = createStore(preloadedState)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </React.StrictMode>
);
