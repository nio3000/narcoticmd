//esversion: 6
import React, { Component } from 'react';
import './App.css';
import Editor from "./components/dealer/Dealer";
import Logo from "./components/logo/Logo";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Editor />
      </div>
    );
  }
}

export default App;
