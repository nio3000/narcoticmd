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
    //If key is undefined do nothing
    if ( choosenPortion && !this.state.choosenPortion ) {
      this.setState({
        choosenPortion: choosenPortion
      });
      //TODO test
      //Return format if there is only one option (e.g. blockquote or codeblock)
      if(choosenPortion.options.length === 1) {
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
   * Change Cocaine visible state in parent component
   */
  onBlur() {
    //Comment this out for inspection purpose
    this.props.onBlur();
  }

  markShortcut() {

  }

  render() {
    let options = <label className="cocaine__hidden-option"><Radio/></label>;
    if(this.state.choosenPortion && this.state.choosenPortion.options) {
      options = this.state.choosenPortion.options.map(item =>
        <label
          key={item.key}
          className="cocaine__label"
        >
          <Radio value={item.key}/><span className="cocaine__keymark">{item.key}</span>{item.name}
        </label>
      );
    }
    return (
      <div className="cocaine" onBlur={this.onBlur} style={{left: this.props.position.left, top: this.props.position.bottom + 75}}>
        <form>
          <input
            type="text"
            onChange={this.handleShortcut}
            onKeyDown={this.resetKey}
            className="cocaine__inhaler mousetrap"
            value={this.state.key}
            autoFocus
          />

          {this.props.portion.filter( item => {
            if (this.state.choosenPortion) {
              return item.key === this.state.choosenPortion.key;
            } else {
              return item;
            }
          }).map( item => {
            let keymark = <span className="cocaine__keymark">{item.key}</span>;
            if(this.state.choosenPortion) {
              keymark = null;
            }
            return(
               <section className="cocaine__section" key={item.key}>
                <p className="cocaine__section-header">{keymark} { item.name}
                </p>
                {/*<p className="cocaine__section-header"><span className="cocaine__keymark">E</span></p>*/}
              </section>
            )
          })}
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