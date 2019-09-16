import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/shoppingActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import formatCurrency from '../../utils/formatCurrency';
import './ProductList.css'

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => dispatch(addToCart(product))
  }
}

export class ProductEntry extends Component {
  constructor() {
    super(...arguments);

    this.handleAddButton = this.handleAddButton.bind(this);
  }

  render() {
    return (
      <div className="d-flex flex-column mb-4">
        {/* TODO this is a placeholder for a real image, it will need different styling */}
        <div className="product-image d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faCamera} size="6x"></FontAwesomeIcon>
        </div>

        <div>{this.props.product.name}</div>

        <div className="d-flex align-items-center">
          <div className="mr-auto">{formatCurrency(this.props.product.price)}</div>

          <Button variant="outline-dark" onClick={this.handleAddButton}>
            Add To Cart
          </Button>
        </div>
      </div>
    );
  }

  handleAddButton() {
    this.props.addToCart(this.props.product.name);
  }
}

export default connect(null, mapDispatchToProps)(ProductEntry);
