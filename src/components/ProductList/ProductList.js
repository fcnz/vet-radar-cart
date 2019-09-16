import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductEntry from './ProductEntry/ProductEntry';

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export class ProductList extends Component {
  render() {
    const productElements = this.props.products.map(product =>
      <ProductEntry product={product} key={product.name}></ProductEntry>
    );

    return (
      <div className="m-4 d-flex justify-content-around flex-wrap">
        {productElements}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProductList);
