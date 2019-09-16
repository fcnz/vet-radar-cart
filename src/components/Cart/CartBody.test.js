import React from 'react';
import { shallow } from 'enzyme';
import { CartBody } from './CartBody';
import Button from 'react-bootstrap/Button';
import CartEntry from './CartEntry';

function setupComponent(cart) {
  const props = {
    cart: cart || [{
      name: 'Product One',
      price: 11.11,
      qty: 1
    }, {
      name: 'Product Two',
      price: 22.22,
      qty: 2
    }],

    total: 55.55
  };

  const wrapper = shallow(<CartBody {...props}></CartBody>);

  return {
    props,
    wrapper
  }
}

describe('Integration / CartBody', () => {
  let props, wrapper;

  beforeEach(() => {
    const testSetup = setupComponent();
    props = testSetup.props;
    wrapper = testSetup.wrapper;
  });

  it('renders the correct elements', () => {
    expect(wrapper.find(CartEntry)).toHaveLength(2);
    expect(wrapper.find(Button).text()).toContain(`Checkout (Total: $${props.total})`);
  });

  it('renders the no items message', () => {
    const { wrapper } = setupComponent([]);

    expect(wrapper.text()).toContain('There are no items in the cart.');
  });
});
