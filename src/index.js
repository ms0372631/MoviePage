import React from 'react';
import ReactDOM from 'react-dom/client';
import createStore from './store/store';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
let preloadedState = undefined;
const store = createStore(preloadedState)
root.render(
  <React.StrictMode>
    <Router>
      <App store={store}/>
    </Router>
  </React.StrictMode>
);
