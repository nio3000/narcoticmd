import React from 'react';
import renderer from 'react-test-renderer';

import Subtitle from './Subtitle';

describe('Subtitle', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Subtitle value="Editor for markdown-addicted writers"/>
    );
    expect( component.toJSON() ).toMatchSnapshot();
  });
  it('doesn\'t render if its value is empty', () => {
    const component = renderer.create(
      <Subtitle value=""/>
    );
    expect( component.toJSON() ).toMatchSnapshot();
  })
});