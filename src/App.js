import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appoinment from './Components/Appoinment/Appoinment/Appoinment';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/appoinment">
          <Appoinment/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
