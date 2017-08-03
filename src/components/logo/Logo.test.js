import React from 'react';
import renderer from 'react-test-renderer';
import Logo from './Logo.jsx';

describe( 'Logo', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Logo alt="Logo"/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
