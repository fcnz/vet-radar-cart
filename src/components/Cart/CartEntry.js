import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { setQuantity, remove } from '../actions/shoppingActions';
import formatCurrency from '../utils/formatCurrency';

// There are two actions that can be done from the cart component that can affect global state.
function mapDispatchToProps(dispatch) {
  return {
    setQuantity: (product, qty) => dispatch(setQuantity(product, qty)),
    removeProduct: product => dispatch(remove(product))
  };
}

export class CartEntry extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      tempQuantity: this.props.product.qty
    };

    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleQuantityBlur = this.handleQuantityBlur.bind(this);
  }

  render() {
    return (
      <tr className="mb-2">
        <td width="100%">
          {this.props.product.name}
          &nbsp;
          ({formatCurrency(this.props.product.price)})
        </td>

        <td>
          <input
            type="number"
            step="1"
            className="ml-2"
            style={{ width: '4em', padding: '0.25em 0.5em' }}
            value={this.state.tempQuantity}
            onChange={this.handleQuantityChange}
            onBlur={this.handleQuantityBlur}
          ></input>
        </td>

        <td className="pl-2" style={{ textAlign: 'right' }}>
          {formatCurrency(this.props.product.price * this.props.product.qty)}
        </td>

        <td>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={this.handleRemoveClick}
            style={{ cursor: 'pointer' }}
            className="ml-2"
          ></FontAwesomeIcon>
        </td>
      </tr>
    )
  }

  handleRemoveClick() {
    this.props.removeProduct(this.props.product.name);
  }

  // Keep track of the local state of the input on change so that it can
  // be used when the input is blurred.
  handleQuantityChange(event) {
    const qty = event.target.value
    this.setState(state => {
      return {
        ...state,
        tempQuantity: qty
      }
    })
  }

  handleQuantityBlur() {
    // If the number received is no good, then revert back to the global state
    if (this.state.tempQuantity === '' || this.state.tempQuantity == null || isNaN(this.state.tempQuantity)) {
      return this.setState(state => {
        return {
          ...state,
          tempQuantity: this.props.product.qty
        }
      })
    }

    // Send the floor of the given value to redux and keep local state in sync.
    this.props.setQuantity(
      this.props.product.name,
      Math.floor(this.state.tempQuantity)
    );
    this.setState(state => {
      return {
        ...state,
        tempQuantity: Math.floor(this.state.tempQuantity)
      }
    })
  }
}

export default connect(null, mapDispatchToProps)(CartEntry);
