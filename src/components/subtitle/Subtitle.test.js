import React from 'react';
import renderer from 'react-test-renderer';

import Subtitle from './Subtitle';

describe('Subtitle', () => {
  test('renders correctly', () => {
    const component = renderer.create(
      <Subtitle />
    );
    expect( component.toJSON() ).toMatchSnapshot();
  });
});