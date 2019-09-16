import React, { Component } from 'react';
import CartButton from './CartButton/CartButton';
import CartBody from './CartBody';
import './Cart.css';

class Cart extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      showOverlay: false
    };

    this.handleCartClick = this.handleCartClick.bind(this);
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <span onClick={this.handleCartClick}>
          <CartButton></CartButton>
        </span>
        {
          Boolean(this.state.showOverlay) &&
          <div className="cart-overlay">
            <CartBody></CartBody>
          </div>
        }
      </div>
    );
  }

  handleCartClick() {
    this.setState(state => {
      return {
        ...state,
        showOverlay: !state.showOverlay
      }
    })
  }
}

export default Cart;
