import { fetchPrice } from '../server';

export function executeTrade(amountSell, currencySell = "USD", currencyBuy = "BTC") {
  return {
    type: "EXECUTE_TRADE",
    amountSell,
    currencySell,
    currencyBuy
  }
}

export const setTradeAmount = amountSell => {
  return {
    type: "SET_TRADE_AMOUNT",
    amountSell
  }
}

export const fetchConversionRateStart = () => {
  return {
    type: "FETCH_CONVERSION_RATE_START"
  }
}

export const fetchConversionRateSuccess = (price) => {
  return {
    type: "FETCH_CONVERSION_RATE_SUCCESS",
    price
  }
}

// uses Redux Thunk middleware - allows us to write action creators that return a function instead of an action
export const fetchConversionRate = () => {
  return (dispatch) => {
    dispatch(fetchConversionRateStart());
    fetchPrice("BTCUSD").then(
      price => dispatch(fetchConversionRateSuccess(price))
    );
  }
}
