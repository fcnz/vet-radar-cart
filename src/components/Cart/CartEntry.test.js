import React from 'react';
import { shallow } from 'enzyme';
import { CartEntry } from './CartEntry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function setupComponent() {
  const props = {
    product: {
      name: 'My Product',
      price: 1.11,
      qty: 2
    },

    setQuantity: jest.fn(),
    removeProduct: jest.fn()
  };
  const wrapper = shallow(<CartEntry {...props}></CartEntry>);

  return {
    props,
    wrapper
  }
}

describe('Integration / CartEntry', () => {
  let props, wrapper;

  beforeEach(() => {
    const testSetup = setupComponent();
    props = testSetup.props;
    wrapper = testSetup.wrapper;
  });

  it('renders the correct elements', () => {
    const text = wrapper.text();
    expect(text.includes(props.product.name)).toBe(true);
    expect(wrapper.find('input').props().value).toBe(props.product.qty);
    expect(text.includes(`($${props.product.price})`)).toBe(true);
    expect(text.includes(`$${props.product.price * props.product.qty}`)).toBe(true);
    expect(wrapper.find(FontAwesomeIcon).length).toBe(1);
  });

  it('calls setQuantity when input blurred', () => {
    const newQuantity = 3
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: newQuantity } });
    input.simulate('blur');

    expect(props.setQuantity).toBeCalledWith(props.product.name, newQuantity);
  });

  it('doesn\'t call setQuantity if input isn\'t blurred yet', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 50 } });

    expect(props.setQuantity).not.toBeCalled();
  });

  it('calls removeProduct correctly', () => {
    wrapper.find(FontAwesomeIcon).simulate('click');

    expect(props.removeProduct).toBeCalledWith(props.product.name);
  });
});
