import React from 'react';
import { shallow } from 'enzyme';
import { CartButton } from './CartButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function setupComponent(props = { count: 2 }) {
  const wrapper = shallow(<CartButton {...props}></CartButton>);

  return {
    props,
    wrapper
  }
}

describe('Integration / CartButton', () => {
  it('renders the correct elements', () => {
    const { wrapper, props } = setupComponent();

    expect(wrapper.find(FontAwesomeIcon).length).toBe(1, 'Rendered cart icon');
    expect(wrapper.find('.count-indicator').length).toBe(1, 'Rendered count indicator');
    expect(wrapper.find('.count-indicator').text()).toBe(String(props.count));
  });

  it('does not render the count indicator when the count is zero', () => {
    const { wrapper } = setupComponent({ count: 0 });

    expect(wrapper.find('.count-indicator').length).toBe(0, 'Shouldn\'t render count indicator');
  });
});
