import React, { Component } from 'react'
import Cocaine from "../cocaine/Cocaine";
import Mousetrap from 'mousetrap';
import SimpleMDE from 'react-simplemde-editor';

require("react-simplemde-editor/dist/simplemde.min.css");

/**
 * key: key on keyboard
 * name: name of the function displayed in Cocaine for user
 * format: function code returned to Druggy component
 *
 * @type {[*]}
 */
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
      {key: 'b', name: 'bold', format: 'bold'},
      {key: 'i', name: 'italic', format: 'italic'},
      {key: 's', name: 'strike', format: 'strike'}
    ]
  },
  {
    name: 'blockquotes',
    key: 'q',
    options: [
      { name: 'quotation', key: 'q', format: 'blockquotes' }
    ]
  },
  {
    name: 'codeblock',
    key: 'c',
    options: [
      { name: 'code', key: 'c', format: 'codeblock' }
    ]
  },
  {
    name: 'list',
    key: 'l',
    options: [
      { name: 'ordered', key: 'o', format: 'orderedlist' },
      { name: 'unordered', key: 'u', format: 'unorderedlist' },
    ]
  },
  {
    name: 'link',
    key: 'i',
    options: [
      { name: 'link', key: 'i', format: 'link' }
    ]
  },
];
//TODO
// Images                              | I
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
      value: "",
      cursorPosition: {left:0, right: 0, top: 0, bottom: 0}
    };

    this.handleChooseFormat = this.handleChooseFormat.bind(this);
    this.giveMeCocaine = this.giveMeCocaine.bind(this);
    this.handleCocaineBlur = this.handleCocaineBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.formatOption = this.formatOption.bind(this);
    this.takeCocaineAway = this.takeCocaineAway.bind(this);
    this.setFocusOnEditor = this.setFocusOnEditor.bind(this);

    //Editor
    this.simplemde = '';
    this.codemirror = '';
  }

  componentDidMount() {
    Mousetrap.bind('escape', this.takeCocaineAway);
    this.simplemde = this.editor.simplemde;
    this.codemirror = this.editor.simplemde.codemirror;

    this.editor.simplemde.element.classList.add('mousetrap');

    this.simplemde.value(
      '### Text formatting:   \n' +
      '1. Select any text by keyboard (Shift + Arrows)   \n' +
      '2. Press **TAB** key   \n' +
      '3. Press keys displayed in squares.'
    );
  }

  /**
   * Display Cocaine
   */
  giveMeCocaine() {
    if (!this.editor.simplemde.codemirror.somethingSelected()) return;
    let cursorPos = this.codemirror.cursorCoords(false, 'local');
    this.setState({
      showCocaine: true,
      cursorPosition: cursorPos
    })
  }

  /**
   * Key event handled by SimpleMDE
   */
  extraKeys = {
    "Tab": (cm) => {
        this.giveMeCocaine();
    }
  };


  /**
   * Unmount Cocaine
   */
  takeCocaineAway() {
    this.setState({
      showCocaine: false
    });
    this.setFocusOnEditor()
  }

  setFocusOnEditor() {
    this.codemirror.focus();
  }

  /**
   * Map format option choosen in Cocaine to name required by SimpleMDE editor
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
      case 'blockquotes':
        functionName = 'toggleBlockquote';
        break;
      case 'codeblock':
        functionName = 'toggleCodeBlock';
        break;
      case 'orderedlist':
        functionName = 'toggleOrderedList';
        break;
      case 'unorderedlist':
        functionName = 'toggleUnorderedList';
        break;
      case 'link':
        functionName = 'drawLink';
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
    this.takeCocaineAway();
    //Clear selection by set cursor at the end of selected text
    this.editor.simplemde.codemirror.setCursor(this.editor.simplemde.codemirror.getCursor(false));
  }

  handleCocaineBlur() {
    this.takeCocaineAway();
  }

  onChange( value) {
    this.setState({
      value: value
    })
  }

  render() {
    let cocaine = null;
    if(this.state.showCocaine) {
      cocaine = <Cocaine visible={this.state.showCocaine} onChooseFormat={this.handleChooseFormat} portion={portion} onBlur={this.handleCocaineBlur} position={this.state.cursorPosition}/>
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
              spellChecker: false,
              indentWithTabs: false,
              toolbar: ["bold", "italic", "|", "heading-1", "heading-2", "heading-3", "|", "unordered-list", "ordered-list", "link", "image", "|", "code", "quote", "|", "preview"],
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
    position: 'relative',
    width: '80%'
  },
};


export default Druggy;