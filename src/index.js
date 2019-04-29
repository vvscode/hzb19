import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';

import store from './redux/store';

import * as actions from './redux/actions';
const tests = localStorage.getItem('isTestRunning');
if (tests) {
  // window._store.dispatch(window._actions.addTask({ title: 'xxxx', priority: 1}))
  window._store = store;
  window._actions = actions;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
