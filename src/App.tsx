import React from 'react';
import Home from "./views/im/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Translate from "./views/Translate";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/translate">
          <Translate/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
