import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Pages";
import Rooms from "./Pages";
import Navbar from "./Components/Navbar";
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms" components={Rooms} />
        </Switch>
      </div>
    );
  }
}

export default App;
