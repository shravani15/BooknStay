import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";

import Navbar from "./Components/Navbar";
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            
        </Switch>
      </div>
    );
  }
}

export default App;
