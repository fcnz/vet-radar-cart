import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartButton.css';

function mapStateToProps(state) {
  return { count: state.cartCount }
}

export class CartButton extends Component {
  render() {
    return (
      <Button variant="outline-primary" style={{ position: 'relative' }}>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        {
          Boolean(this.props.count) &&
          <span className="count-indicator">{this.props.count}</span>
        }
      </Button>
    )
  }
}

export default connect(mapStateToProps)(CartButton);
