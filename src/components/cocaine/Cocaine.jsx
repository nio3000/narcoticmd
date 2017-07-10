import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';
import './Cocaine.css';


class Cocaine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedValue: null,
      choosenPortion: null,
      key: ''
    };

    this.chooseFormatting = this.chooseFormatting.bind(this);
    this.handleShortcut = this.handleShortcut.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  /**
   * Choose formatting option
   * @param value ???
   */
  chooseFormatting(value) {
    this.setState({ selectedValue: value });
  }

  handleShortcut(event) {
    let key = event.target.value.toLocaleLowerCase();
    //Choose group
    let choosenPortion = this.props.portion.find((item) => item.key === key);
    //Prevent from reaction for undefined key
    if ( choosenPortion && !this.state.choosenPortion ) {
      this.setState({
        choosenPortion: choosenPortion
      });
      //TODO test
      //Return format if there is only one option (e.g. blockquote)
      if(choosenPortion.options.length === 1) {
        console.log(choosenPortion);
        this.props.onChooseFormat( choosenPortion.options[0].format );
        this.setState({
          key
        })
      }

    }
    else if ( this.state.choosenPortion ) {
      // Choose formatting option
      let option = this.state.choosenPortion.options.find((item) => item.key === key);
      if( !option ) {
        this.props.onChooseFormat(null);
        return;
      }
      this.props.onChooseFormat( option.format );
      this.setState({
        key
      })
    }
  }

  /**
   * Replace first occurence of shortcut in formatting option name
   * @param option string
   */
  displayShortcut( option ) {
    //
  }

  /**
   * Change Cocaine visible state in parent component
   */
  onBlur() {
    this.props.onBlur();
  }

  render() {
    let options = <label className="cocaine__hidden-option"><Radio/></label>;
    if(this.state.choosenPortion && this.state.choosenPortion.options) {
      options = this.state.choosenPortion.options.map(item =>
        <label
          key={item.key}
          className="cocaine__label"
        >
          <Radio value={item.key}/>{item.name}
        </label>
      );
    }
    return (
      <div className="cocaine" onBlur={this.onBlur}>
        <form>
          <input
            type="text"
            onChange={this.handleShortcut}
            onKeyDown={this.resetKey}
            className="cocaine__inhaler mousetrap"
            value={this.state.key}
            autoFocus
          />

          {this.props.portion.map( item =>
            <section className="cocaine__section" key={item.key}>
              <p className="cocaine__section-header">{ item.name }</p>
            </section>
          )}
          <section className="cocaine__section">
          <RadioGroup
            name="headers"
            selectedValue={this.setState.selectedValue}
            onChange={this.chooseFormatting}
            className="cocaine__section-options">
            {options}
          </RadioGroup>
          </section>
        </form>
      </div>
    );
  }
}


export default Cocaine;