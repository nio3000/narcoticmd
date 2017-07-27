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

describe('Snapshot: ', () => {
  it('renders correctly on hardcoded position', () => {
   const component = renderer.create(
     <Cocaine portion={portionMock} position={{left:0, right: 0, top: 0, bottom: 0}}/>
   );
   let tree = component.toJSON();
   expect(tree).toMatchSnapshot();
  });
});

describe('Assert: ', () => {
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
    expect(component.state().choosenPortion.options[0].format).toBe("h1");
    expect(component.state().choosenPortion.options[1].format).toBe("h2");
    expect(component.state().choosenPortion.options[2].format).toBe("h3");
  });
  it('renders "bold" option if user press "e" key', () => {
    const component = mount(
      <Cocaine portion={portionMock} position={{left:0, right: 0, top: 0, bottom: 0}}/>
    );
    const inhaler = component.find('.cocaine__inhaler');
    inhaler.simulate('change', { target: {value: 'e'}});
    let name = component.find("label").at(0);
    expect(name.text()).toBe("bbold");
  });
  it('returns "quotation" format if user press "q" key', () => {
    const component = mount(
      <Cocaine portion={portionMock} position={{left:0, right: 0, top: 0, bottom: 0}} onChooseFormat={jest.fn()}/>
    );
    const inhaler = component.find('.cocaine__inhaler');
    inhaler.simulate('change', { target: {value: 'q'}});
    let formatState = component.state().choosenPortion.options[0].format;
    expect(formatState).toBe("blockquotes");
  });
  xit('Do nothing when user press key not assigned to any group', () => {
    const component = mount(
      <Cocaine portion={portionMock} position={{left:0, right: 0, top: 0, bottom: 0}}/>
    );
    const inhaler = component.find('.cocaine__inhaler');
    inhaler.simulate('change', { target: {value: '.'}});
  })
});
