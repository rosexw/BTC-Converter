const initialState = {
  USD: 156.12,
  BTC: 0.00000
};

export default function accountBalanceReducer(state = initialState, action) {
  switch (action.type) {
    case 'EXECUTE_TRADE':
      return {
        ...state,
        [action.currencySell]: state[action.currencySell] - action.amountSell,
        [action.currencyBuy]: state[action.currencyBuy] + action.amountSell * 2,
      };
    default:
      return state;
  }
}
