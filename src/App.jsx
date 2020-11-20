import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Project from "./Components/Project/Project/Project";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/project">
            <Project></Project>
          </Route>
          <Route path="/">
          <Project></Project>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
