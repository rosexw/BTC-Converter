import React, { Component } from 'react';
import { connect } from 'react-redux';
import { executeTrade } from '../actions/account-balance.action';

const mapDispatchToProps = (dispatch) => {
  return {
    onTrade: () => dispatch(executeTrade(10))
  };
}

class Converter extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onTrade();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Trade</p>
        <input type="text" name="currencySell" value="USD"/><br/>
        <input type="text" name="amountSell" placeholder="Enter your amount" /><br/>

        <p>For</p>
        <input type="text" name="currencyBuy" value="BTC"/><br/>
        <input type="text" name="amountBuy" placeholder = "Display Quote"/><br/>

        <button type="submit">Trade</button>
      </form>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Converter)
