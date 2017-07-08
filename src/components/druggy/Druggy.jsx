import React, { Component } from 'react'
import Cocaine from "../cocaine/Cocaine";
import Mousetrap from 'mousetrap';
import SimpleMDE from 'react-simplemde-editor';

require("react-simplemde-editor/dist/simplemde.min.css");

const portion = [
  {
    name: 'header',
    key: 'h',
    options: [
      { key: '1', name: 'h1', format: 'h1'},
      { key: '2', name: 'h2', format: 'h2'},
      { key: '3', name: 'h3', format: 'h3'},
    ]
  },
  {
    name: 'emphasis',
    key: 'e',
    options: [
      {key: 'b', name: 'b', format: 'bold'},
      {key: 'i', name: 'i', format: 'italic'},
      {key: 's', name: 's', format: 'strike'}
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
      value: ""
    };

    this.handleChooseFormat = this.handleChooseFormat.bind(this);
    this.giveMeCocaine = this.giveMeCocaine.bind(this);
    this.handleCocaineBlur = this.handleCocaineBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.formatOption = this.formatOption.bind(this);
  }

  componentDidMount() {
    //Assume that selection is done if user release the shift key
    // Mousetrap.bind('shift', this.giveMeCocaine, 'keyup');
    Mousetrap.bind('backspace', this.deleteSelection)
  }
  componentWillUnmount() {
    // Mousetrap.unbind('shift', this.giveMeCocaine, 'keyup')
  }

  giveMeCocaine() {
    //Show Cocaine only when text is already selected
    if(this.state.selectedText === "") return;
    this.setState({
      showCocaine: true
    })
  }

  extraKeys = {
    // Up: (cm) => {
    //   // cm.replaceSelection("");
    //   // this.editor.simplemde['toggleBold']();
    //   // this.editor;
    // },
    "Shift": (cm) => {
      if (cm.getSelection()) {
        this.giveMeCocaine();
      }
    }
  };

  /**
   * map format option choosen in Cocaine to name required by editor
   * @param format string
   *
   * TODO: Unit test
   */
  formatOption( format ) {
    let functionName;
    switch( format ) {
      case 'bold':
        functionName = 'toggleBold';
        break;
      case 'italic':
        functionName = 'toggleItalic';
        break;
      case 'strike':
        functionName = 'toggleStrikethrough';
        break;
      case 'h1':
        functionName = 'toggleHeading1';
        break;
      case 'h2':
        functionName = 'toggleHeading2';
        break;
      case 'h3':
        functionName = 'toggleHeading3';
        break;
      default:
        functionName = null;
    }
    return functionName;
  }

  handleChooseFormat( format ) {
    // let formattedSelection = format.replace('{STR}', this.state.selectedText);
    if(this.formatOption( format )) {
      this.editor.simplemde[this.formatOption(format)]();
    }
    this.setState({
      showCocaine: false,
    });
    //Clear selection by set cursor at the end of selected text
    this.editor.simplemde.codemirror.setCursor(this.editor.simplemde.codemirror.getCursor(false));
    this.editor.simplemde.codemirror.focus();
  }

  handleCocaineBlur() {
    this.setState({
      showCocaine: false
    });
  }

  onChange( value ) {
    // console.log('vaalue!', this.editor.simplemde.__codemirror.getSelection());
    if(this.editor.simplemde.codemirror.somethingSelected()) {
     const showCocaine =  setInterval(() => {
       clearInterval( showCocaine );
       this.giveMeCocaine();
       console.log('Zaznaczone!');

      }, 1000);

    }

    this.setState({
      value: value
    })
  }

  render() {
    let cocaine = null;
    if(this.state.showCocaine) {
      cocaine = <Cocaine visible={this.state.showCocaine} onChooseFormat={this.handleChooseFormat} portion={portion} onBlur={this.handleCocaineBlur} />
    }
    return (
      <div className="Druggy" style={style.container}>
        {cocaine}
        <SimpleMDE
          // value={this.state.value}
          onChange={this.onChange}
          options={
            {
              autofocus: true,
              spellChecker: true
            }
          }
          extraKeys={this.extraKeys}
          ref={( editor ) => this.editor = editor}

        />
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
};


export default Druggy;