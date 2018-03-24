import React, { Component } from 'react';
import { connect } from 'react-redux';
import { executeTrade, setTradeAmount } from '../actions/trade.action';

const mapStateToProps = (state) => {
  return {
    tradeAmount: state.trade.tradeAmount,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTrade: (amount) => dispatch(executeTrade(amount)),
    onSetTradeAmount: (amount) => dispatch(setTradeAmount(amount))
  };
}

class Converter extends Component {

  handleChange = (event) => {
    this.props.onSetTradeAmount(event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onTrade(this.props.tradeAmount);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Trade</p>
        <input type="text" name="currencySell" value="USD" readOnly/><br/>
        <input type="text" name="amountSell" placeholder="Enter your amount" onChange={this.handleChange} value={this.props.tradeAmount} /><br/>

        <p>For</p>
        <input type="text" name="currencyBuy" value="BTC" readOnly/><br/>
        <input type="text" name="amountBuy" placeholder = "Display Quote" readOnly/><br/>

        <button type="submit">Trade</button>
      </form>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Converter)
