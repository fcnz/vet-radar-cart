import React from 'react';
import { mount } from 'enzyme';
import { ProductEntry } from './ProductEntry';

function setupComponent() {
  const props = {
    product: {
      name: 'My Product',
      price: 20.25
    },

    addToCart: jest.fn()
  };

  const wrapper = mount(<ProductEntry {...props}></ProductEntry>);

  return {
    props,
    wrapper
  }
}

describe('Integration / ProductEntry', () => {
  let props, wrapper;

  beforeEach(() => {
    const testSetup = setupComponent();
    props = testSetup.props;
    wrapper = testSetup.wrapper;
  });

  it('renders the correct elements', () => {
    expect(wrapper.find('div.product-image').length)
    .toBe(1, 'Product image element found');

    expect(wrapper.text().includes(props.product.name))
    .toBe(true, 'Product name is rendered');

    expect(wrapper.text().includes('$20.25'))
    .toBe(true, 'Product prices is formatted and rendered');

    expect(wrapper.text().includes('Add To Cart'))
    .toBe(true, 'Add To Cart button rendered');
  });

  it('registers a click correctly', () => {
    wrapper.find('button').simulate('click');
    expect(props.addToCart).toBeCalledWith(props.product.name);
  });
});
