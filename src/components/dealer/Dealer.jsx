import React, { Component } from 'react'
import Cocaine from "../cocaine/Cocaine";

const portion = [
  {
    name: 'header',
    key: 'h',
    options: [
      { key: '1', name: 'h1', format: '#'},
      { key: '2', name: 'h2',  format: '##'},
      { key: '3', name: 'h3',  format: '###'},
      { key: '4', name: 'h4',  format: '####'}
    ]
  },
  {
    name: 'emphasis',
    key: 'e',
    options: [
      {key: 'b', name: 'b',  format: "__"},
      {key: 'i', name: 'i',  format: "_"},
      {key: 's', name: 's',  format: '~~'}
    ]
  }
];

export class Dealer extends Component {
  constructor( props ) {
    super(props);

    this.state = {
      text: '',
      selectedText: [],
      showCocaine: false
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onSelectText = this.onSelectText.bind(this);
    this.handleChooseFormat = this.handleChooseFormat.bind(this);
  }

  onSelectText( event ) {
    let selectionStart = event.target.selectionStart;
    let selectionEnd = event.target.selectionEnd;

    if(selectionStart !== selectionEnd) {
      this.setState({
        selectedText: [selectionStart, selectionEnd]
      });
    }else{
      this.setState({
        selectedText: [],
        showCocaine: false,
      });
    }
  }

  handleKeyUp( event ) {
    //Assume that selection is done if user release the shift key
    if(event.keyCode === 16 && this.state.selectedText.length > 0) {
      this.setState({
        showCocaine: true
      })
    }
  }

  onTextChange( event ) {
    this.setState({text: event.target.value})
  }

  handleChooseFormat( format ) {
    console.log(format);
    this.setState({showCocaine: false});
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    let cocaine = null;
    if(this.state.showCocaine) {
      cocaine = <Cocaine visible={this.state.showCocaine} onChooseFormat={this.handleChooseFormat} portion={portion} />
    }
    return (
      <div className="Dealer" style={style.container}>
        {cocaine}
        <textarea
          value={this.state.text}
          onKeyUp={this.handleKeyUp}
          onChange={this.onTextChange}
          onSelect={this.onSelectText}
          className="textarea"
          style={style.textarea}
          autoFocus
        />
      </div>
    );
  }
};

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


export default Dealer;