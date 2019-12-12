import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Index from './components/index';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const indexEl = document.getElementById("index");
  ReactDOM.render(<Index store={store} />, indexEl);
});