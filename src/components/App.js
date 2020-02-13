import React from 'react';
import './App.css';
import Home from './Home';
import Template from './Template'
import {Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/template' component={Template} />
    </Switch>
    </div>
  );
}

export default App;
