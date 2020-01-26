import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Navbar from './navigation/Navbar';
import Learn from './learn/Learn';
import Browse from './browse/Browse';
import Admin from './admin/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/learn" />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
