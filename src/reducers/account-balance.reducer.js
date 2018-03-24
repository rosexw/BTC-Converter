const initialState = {
  USD: 156.12,
  BTC: 0.00000
};

export default function accountBalanceReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_BALANCE':
      return state;
    default:
      return state;
  }
}
