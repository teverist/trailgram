import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Index from './components/index';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const indexEl = document.getElementById("index");

  ReactDOM.render(<Index store={store} />, indexEl);
});