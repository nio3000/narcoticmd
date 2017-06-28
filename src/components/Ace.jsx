import React, {Component} from 'react';
import AceEditor from 'react-ace';


import 'brace/mode/markdown';
import 'brace/theme/github';

class Ace extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      value: "",
      theme: 'github',
      mode: 'markdown',
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      fontSize: 18,
      showGutter: false,
      showPrintMargin: false,
      highlightActiveLine: false,
      enableSnippets: false,
      showLineNumbers: false,
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onSelectText = this.onSelectText.bind(this);
  }
  componentDidMount() {
    const textarea = this.aceEditor.editor.textInput.getElement();
    textarea.classList.add(this.props.cssClass);
  }

  onSelectText( newValue, event ) {
    // console.log('select-change: newValue', newValue);
    // console.log('select-change: event', event);

    // console.log('aceEditor', this.aceEditor.editor.session.getTextRange(newValue.getRange()));
    // console.log('aceEditor',     textarea.classList);
  }

  onTextChange( value ) {
    //Empty now
  }

  render() {
    return(
      <AceEditor
        value={this.state.value}
        mode={this.state.mode}
        theme={this.state.theme}
        name="druggy"
        onChange={this.onTextChange}
        onSelectionChange={this.onSelectText}
        fontSize={this.state.fontSize}
        height="100%"
        width="100%"
        ref={( editor ) => this.aceEditor = editor}
        setOptions={{
          enableBasicAutocompletion: this.state.enableBasicAutocompletion,
          enableLiveAutocompletion: this.state.enableLiveAutocompletion,
          enableSnippets: this.state.enableSnippets,
          showLineNumbers: this.state.showLineNumbers,
          tabSize: 2,
        }}
      />
    );
  }
}

export default Ace;