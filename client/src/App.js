import React from 'react';

import Home from './components/Home';
import Search from './components/Search';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {
  Provider
} from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact component={Home} path='/' />
        <Route exact component={Search} path='/search' />
      </Router>
    </Provider>
  );
}

export default App;
