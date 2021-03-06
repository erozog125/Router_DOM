import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,    
} from "react-router-dom";

import { Home } from './Components/Page/Home/Home';
import { Page2 } from './Components/Page/Page2/Page2';

function App() {
  return (
    <div className="App">
      <Router>               
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/segundaPage">
            <Page2 />          
          </Route>
        </Switch>      
      </Router>
    </div>
  );
}

export default App;

