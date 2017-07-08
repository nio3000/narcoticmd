import React from 'react';
import Cocaine from './Cocaine';
import renderer from 'react-test-renderer';

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
  test('renders correctly', () => {
   const component = renderer.create(
     <Cocaine portion={portion} />
   );
   let tree = component.toJSON();
   expect(tree).toMatchSnapshot();
  })
});

//Hide on blur

//Allow to delete selected text (x key in cocaine?)