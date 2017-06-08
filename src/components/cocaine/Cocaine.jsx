import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';
import './Cocaine.css';


class Cocaine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedValue: null,
      uses: this.props.portion,
      key: ''
    };

    this.optionsHandleChange = this.optionsHandleChange.bind(this);
    this.handleShortcut = this.handleShortcut.bind(this);

  }

  optionsHandleChange(value) {
    this.setState({ selectedValue: value });
  }

  handleShortcut( event ) {
    let key = event.target.value.toLocaleLowerCase();

    this.setState({
      uses: this.props.portion.find((item) => item.key === key)
  });

  }

  render() {
    let options = <label className="cocaine__hidden-option"><Radio/></label>;
    if(this.state.uses && this.state.uses.options) {
      options = this.state.uses.options.map(item =>
        <label
          key={item.key}
          className="cocaine__label"
        ><Radio value={item.key}/>{item.name}</label>
      );
    }
    return (
      <div className="cocaine">
        <form>
          <input type="text" onChange={this.handleShortcut} onKeyDown={this.resetKey} className="cocaine__inhaler" autoFocus value={this.state.key}/>
          <section className="cocaine__section">
            <p className="cocaine__section-header">[E]mphasis</p>
          </section>
          <section className="cocaine__section">
            <p className="cocaine__section-header">[H]eaders</p>
          </section>
          <section className="cocaine__section">
          <RadioGroup
            name="headers"
            selectedValue={this.setState.selectedValue}
            onChange={this.optionsHandleChange}
            className="cocaine__section-options">
            {options}
          </RadioGroup>
          </section>
        </form>
      </div>
    );
  }
}



export let style = {
  visible: {
    display: 'block'
  },
  hidden: {
    display: 'none'
  },
  checked: {
    background: "FF9E7C"
  }
};


export default Cocaine;