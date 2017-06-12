import React from 'react';
import TestUtils from 'react-dom/test-utils'
import Druggy from './Druggy';

import renderer from 'react-test-renderer';

describe('Druggy', () => {

  test('renders correctly', () => {
    const component = renderer.create(
      <Druggy />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  //TODO replace snaphosts with Enzyme unit testing
  test('onChange', () =>{
    const dealer = TestUtils.renderIntoDocument(<Druggy/>);
    const textarea = TestUtils.findRenderedDOMComponentWithTag(dealer, 'textarea');
    textarea.value = 'elo';
    TestUtils.Simulate.change(textarea);

    expect(textarea).toMatchSnapshot();
  })
});
