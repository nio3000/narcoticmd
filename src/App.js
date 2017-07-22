//esversion: 6
import React, { Component } from 'react';
import './App.css';
import Druggy from "./components/druggy/Druggy";
import Logo from "./components/logo/Logo";
import Subtitle from "./components/subtitle/Subtitle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Subtitle />
        <Druggy />
      </div>
    );
  }
}

export default App;
