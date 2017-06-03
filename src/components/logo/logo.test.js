import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo';

import renderer from 'react-test-renderer';


describe( 'Logo', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Logo />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});