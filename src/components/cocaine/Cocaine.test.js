import React from 'react';
import Cocaine from './Cocaine';
import { Radio } from 'react-radio-group';
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer';

const portionMock = [
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

describe('Cocaine', () => {
  it('renders correctly on hardcoded position', () => {
   const component = renderer.create(
     <Cocaine portion={portionMock} position={{left:0, right: 0, top: 0, bottom: 0}}/>
   );
   let tree = component.toJSON();
   expect(tree).toMatchSnapshot();
  });

  it('inhaler has focus', () => {
    const cocaine = mount(
      <Cocaine visible={true} portion={portionMock} position={{left:0, right: 0, top: 0, bottom: 0}}/>
    );
    const inhaler = cocaine.find('.cocaine__inhaler');
    expect(inhaler.matchesElement(document.activeElement)).toBeTruthy()
  });

  it('renders h1 option if user press "h" key', () => {
    const component = mount(
      <Cocaine portion={portionMock} position={{left:0, right: 0, top: 0, bottom: 0}}/>
    );
    const inhaler = component.find('.cocaine__inhaler');
    inhaler.simulate('change', { target: {value: 'h'}});
    let h1 = component.find("label").at(0);
    expect(h1.text()).toBe("1h1");

  });
  xit('Do nothing when user press key not assigned to any group', () => {
    const component = mount(
      <Cocaine portion={portionMock} position={{left:0, right: 0, top: 0, bottom: 0}}/>
    );
    const inhaler = component.find('.cocaine__inhaler');
    inhaler.simulate('change', { target: {value: '.'}});
  })

});
