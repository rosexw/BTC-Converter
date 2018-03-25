import { fetchPrice } from '../server';

export function executeTrade(amountSell, currencySell = "USD", currencyBuy = "BTC") {
  return {
    type: "EXECUTE_TRADE",
    amountSell,
    currencySell,
    currencyBuy
  }
}

export function setTradeAmount(amountSell) {
  return {
    type: "SET_TRADE_AMOUNT",
    amountSell
  }
}

const fetchConversionRateStart = () => {
  return {
    type: "FETCH_CONVERSION_RATE_START"
  }
}

const fetchConversionRateSuccess = (price) => {
  return {
    type: "FETCH_CONVERSION_RATE_SUCCESS",
    price
  }
}


export const fetchConversionRate = () => {
  return (dispatch) => {
    dispatch(fetchConversionRateStart());
    fetchPrice("BTCUSD").then(
      price => dispatch(fetchConversionRateSuccess(price))
    );
  }
}
