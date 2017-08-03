import React, {Component} from 'react';
import './App.css';
import Druggy from './components/druggy/Druggy.jsx';
import Logo from './components/logo/Logo.jsx';
import Subtitle from './components/subtitle/Subtitle.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo alt="Logo"/>
        <Subtitle value="Keyboard driven markdown editor"/>
        <Druggy/>
      </div>
    );
  }
}

export default App;
