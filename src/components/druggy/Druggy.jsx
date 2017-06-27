import React, { Component } from 'react'
import Cocaine from "../cocaine/Cocaine";
import Ace from '../Ace';




const portion = [
  {
    name: 'header',
    key: 'h',
    options: [
      { key: '1', name: 'h1', format: '#{STR}'},
      { key: '2', name: 'h2', format: '##{STR}'},
      { key: '3', name: 'h3', format: '###{STR}'},
      { key: '4', name: 'h4', format: '####{STR}'}
    ]
  },
  {
    name: 'emphasis',
    key: 'e',
    options: [
      {key: 'b', name: 'b', format: '__{STR}__'},
      {key: 'i', name: 'i', format: '_{STR}_'},
      {key: 's', name: 's', format: '~~{STR}~~'}
    ]
  },
  {
    name: 'blockquotes',
    key: 'q',
    options: [
      { name: 'quotation', key: 'q', format: '> {STR}' }
    ]
  },
  {
    name: 'list',
    key: 'l',
    options: [
      { name: 'ordered', key: 'o', format: '1. {STR}' },
      { name: 'unordered', key: 'u', format: '* {STR}' },
    ]
  }
];
//TODO
// Links                               | U
// Images                              | I
// Code and Syntax Highlighting        | C
// Tables                              | T
// Inline HTML                         | ???
//   Horizontal Rule                     | R
//   Line Breaks
// YouTube Videos

export class Druggy extends Component {
  constructor( props ) {
    super(props);

    this.state = {
      showCocaine: false,
    };

    // this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChooseFormat = this.handleChooseFormat.bind(this);
    this.focus = this.focus.bind(this);
  }

  handleKeyUp( event ) {
    //Assume that selection is done if user release the shift key
    if(event.keyCode === 16 && this.state.selectedText.length > 0) {
      this.setState({
        showCocaine: true
      })
    }
  }



  handleChooseFormat( format ) {
    let selectedText = this.state.text.slice( this.state.selectedText[0], this.state.selectedText[1])
    let formattedSelection = format.replace('{STR}', selectedText);
    this.setState({
      showCocaine: false,
      text: this.state.text.replace(selectedText, formattedSelection)
    });
    this.focus();
  }

  focus() {
    this.textArea.focus();
    this.textArea.selectionStart = this.textArea.selectionEnd;
  }

  render() {
    let cocaine = null;
    if(this.state.showCocaine) {
      cocaine = <Cocaine visible={this.state.showCocaine} onChooseFormat={this.handleChooseFormat} portion={portion} />
    }
    return (
      <div className="Druggy" style={style.container}>
        {cocaine}
        <Ace />
      </div>
    );
  }
}

export const style = {
  container: {
    height: '70%',
    margin: 'auto',
    width: '80%'
  },
  textarea: {
    border: '2px solid #999',
    height: '100%',
    width: '100%',
  }
};


export default Druggy;