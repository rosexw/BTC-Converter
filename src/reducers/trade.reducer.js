const initialState = {
  USD: 156.12,
  BTC: 0.00000,
  tradeAmount: '',
  fetchingConversionRate: false
};

export default function tradeReducer(state = initialState, action) {
  switch (action.type) {
    case 'EXECUTE_TRADE':
      return {
        ...state,
        [action.currencySell]: state[action.currencySell] - action.amountSell,
        [action.currencyBuy]: state[action.currencyBuy] + action.amountSell / state.conversionRate,
        tradeAmount: ''
      };
    case 'SET_TRADE_AMOUNT':
      return {
        ...state,
        tradeAmount: action.amountSell
      };
    case 'FETCH_CONVERSION_RATE_START':
      return {
        ...state,
        fetchingConversionRate: true
      }
    case 'FETCH_CONVERSION_RATE_SUCCESS':
      return {
        ...state,
        conversionRate: action.price,
        fetchingConversionRate: false
      }
    default:
      return state;
  }
}
