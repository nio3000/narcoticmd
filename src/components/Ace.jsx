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

    this.state.value = this.props.value;
  }

  componentWillReceiveProps( nextProps ) {
    if(nextProps.value !== this.props.value) {
      this.aceEditor.editor.session.replace( this.aceEditor.editor.selection.getRange(), nextProps.value);
      this.aceEditor.editor.focus();
    }
  }

  onSelectText( newValue, event ) {
    let start = newValue.getRange().start;
    let end = newValue.getRange().end;
    let selectedText = this.aceEditor.editor.session.getTextRange(newValue.getRange());
    this.props.onSelectText( start, end, selectedText );
  }

  onTextChange( value ) {
    this.setState({
      value: value
    })
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
        editorProps={{$blockScrolling: 'Infinity'}}
      />
    );
  }
}

export default Ace;