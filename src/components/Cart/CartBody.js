import React, { Component } from 'react';
import { connect } from 'react-redux';
import formatCurrency from '../utils/formatCurrency';
import CartEntry from './CartEntry';
import Button from 'react-bootstrap/Button';

function mapStateToProps(state) {
  return {
    cart: state.cart.sort((a, b) => (a.name > b.name) ? 1 : -1),
    total: state.cart.reduce((total, entry) => total + entry.price * entry.qty, 0)
  }
}

export class CartBody extends Component {
  render() {
    const cartEntries = this.props.cart.map(product =>
      <CartEntry product={product} key={product.name}></CartEntry>
    )

    return !cartEntries.length
      ? <div>There are no items in the cart.</div>
      : <div className="d-flex flex-column">
          <p><strong>Shopping Cart</strong></p>

          <table>
            <tbody>
              {cartEntries}
            </tbody>
          </table>

          <Button onClick={this.handleCheckoutClick} variant="success" className="ml-auto mt-4">
            Checkout (Total: {formatCurrency(this.props.total)})
          </Button>
        </div>
  }

  handleCheckoutClick() {
    alert(
      'Congratulations, you\'ve made it! Click OK to continue shopping as '
      + 'checkout was not part of the test.'
    )
  }
}

export default connect(mapStateToProps)(CartBody);
