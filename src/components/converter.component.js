import React, { Component } from 'react';
import { connect } from 'react-redux';
import { executeTrade, setTradeAmount, fetchConversionRate } from '../actions/trade.action';

const mapStateToProps = (state) => {
  const quote = state.trade.conversionRate && state.trade.tradeAmount ? state.trade.tradeAmount / state.trade.conversionRate : ''
  return {
    tradeAmount: state.trade.tradeAmount,
    tradeAmountValid: state.trade.tradeAmount <= state.trade.USD,
    fetchingConversionRate: state.trade.fetchingConversionRate,
    quote,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTrade: (amount) => dispatch(executeTrade(amount)),
    onSetTradeAmount: (amount) => dispatch(setTradeAmount(amount)),
    onFetchConversionRate: () => dispatch(fetchConversionRate())
  };
}

class Converter extends Component {
  componentDidMount() {
    this.props.onFetchConversionRate();
  }

  handleChange = (event) => {
    this.props.onSetTradeAmount(event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onTrade(this.props.tradeAmount);
  }

  render() {
    const placeholder = this.props.fetchingConversionRate ? 'Fetching...' : '';
    const disabled = !this.props.tradeAmountValid || this.props.fetchingConversionRate;

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Trade</p>
        <input type="text" name="currencySell" value="USD" readOnly/><br/>
        <input type="text" name="amountSell" placeholder="Enter your amount" onChange={this.handleChange} value={this.props.tradeAmount} /><br/>

        <p>For</p>
        <input type="text" name="currencyBuy" value="BTC" readOnly/><br/>
        <input type="text" name="amountBuy" placeholder={placeholder}
        value={this.props.quote} readOnly/><br/>

        <button type="submit" disabled={disabled}>Trade</button>
      </form>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Converter)
