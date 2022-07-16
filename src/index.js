import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
let preloadedState = undefined;
const store = createStore(preloadedState)
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);
