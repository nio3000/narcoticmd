import React, { Component } from 'react'
import Cocaine from "../cocaine/Cocaine";


export class Dealer extends Component {
  constructor( props ) {
    super(props);

    this.state = {
      text: ''
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onSelectText = this.onSelectText.bind(this);
  }

  onSelectText( event ) {
    let selectionStart = event.target.selectionStart;
    let selectionEnd = event.target.selectionEnd;

    if(selectionStart !== selectionEnd) {
      console.log(`${selectionStart} >><< ${selectionEnd}`);
    }
  }

  onTextChange( event ) {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div className="Dealer" style={style.container}>
        <Cocaine visible={true} />
        <textarea
          value={this.state.text}
          onChange={this.onTextChange}
          onSelect={this.onSelectText}
          className="textarea"
          style={style.textarea}
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