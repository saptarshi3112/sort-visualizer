import React from 'react';

import Home from './components/Home';
import Search from './components/Search';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact component={Home} path='/' />
      <Route exact component={Search} path='/search' />
    </Router>
  );
}

export default App;
