import React from 'react';
import { shallow } from 'enzyme';
import { ProductList } from './ProductList';
import ProductEntry from './ProductEntry/ProductEntry';

function setupComponent() {
  const props = {
    products: [{
      name: 'Product One',
      price: 11.11
    }, {
      name: 'Product Two',
      price: 22.22
    }]
  };

  const wrapper = shallow(<ProductList {...props}></ProductList>);

  return {
    props,
    wrapper
  }
}

describe('Integration / ProductList', () => {
  let wrapper;

  beforeEach(() => {
    const testSetup = setupComponent();
    wrapper = testSetup.wrapper;
  });

  it('renders the correct elements', () => {
    expect(wrapper.find(ProductEntry).length).toBe(2);
  });
});
