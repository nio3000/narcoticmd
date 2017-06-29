import React, { Component } from 'react'
import Cocaine from "../cocaine/Cocaine";
import Ace from '../Ace';
import Mousetrap from 'mousetrap';


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
      selectedText: null,
      selectionStart: 0,
      selectionEnd: 0,
      text: ""
    };

    // this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChooseFormat = this.handleChooseFormat.bind(this);
    this.focus = this.focus.bind(this);
    this.giveMeCocaine = this.giveMeCocaine.bind(this);
    this.handleSelectText = this.handleSelectText.bind(this);

  }

  componentDidMount() {
    //Assume that selection is done if user release the shift key
    Mousetrap.bind('shift', this.giveMeCocaine, 'keyup');
  }
  componentWillUnmount() {
    Mousetrap.unbind('shift', this.giveMeCocaine, 'keyup')
  }

  giveMeCocaine() {
    //Show Cocaine only when text is already selected
    if(this.state.selectedText === "") return;
    this.setState({
      showCocaine: true
    })
    // }
  }

  handleSelectText( start, end, text) {
    this.setState({
      selectedText: text,
      selectionStart: start,
      selectionEnd: end
    });
  }

  handleChooseFormat( format ) {
    let formattedSelection = format.replace('{STR}', this.state.selectedText);
    this.setState({
      showCocaine: false,
      text: formattedSelection
    });

    this.focus();
  }

  focus() {
    // this.textArea.focus();
    // this.textArea.selectionStart = this.textArea.selectionEnd;
  }

  render() {
    let cocaine = null;
    if(this.state.showCocaine) {
      cocaine = <Cocaine visible={this.state.showCocaine} onChooseFormat={this.handleChooseFormat} portion={portion} />
    }
    return (
      <div className="Druggy" style={style.container}>
        {cocaine}
        <Ace cssClass="mousetrap" onSelectText={this.handleSelectText} value={this.state.text} />
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