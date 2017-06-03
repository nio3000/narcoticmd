import React from 'react';
import Cocaine from './Cocaine';
import renderer from 'react-test-renderer';

describe('Cocaine', () => {
  test('renders correctly', () => {
   const component = renderer.create(
     <Cocaine />
   );
   let tree = component.toJSON();
   expect(tree).toMatchSnapshot();
  })
});