import React from 'react';
import TestUtils from 'react-dom/test-utils'
import Dealer from './Dealer';

import renderer from 'react-test-renderer';

describe('Dealer', () => {

  test('renders correctly', () => {
    const component = renderer.create(
      <Dealer />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  //TODO replace snaphosts with Enzyme unit testing
  test('onChange', () =>{
    const dealer = TestUtils.renderIntoDocument(<Dealer/>);
    const textarea = TestUtils.findRenderedDOMComponentWithTag(dealer, 'textarea');
    textarea.value = 'elo';
    TestUtils.Simulate.change(textarea);

    expect(textarea).toMatchSnapshot();
  })
});
