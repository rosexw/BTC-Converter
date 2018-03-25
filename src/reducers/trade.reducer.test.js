import tradeReducer from './trade.reducer';
import { setTradeAmount, executeTrade, fetchConversionRateStart, fetchConversionRateSuccess } from '../actions/trade.action';

// null sets it as initialState
it('sets trade amount', () => {
  expect(tradeReducer(null, setTradeAmount(123)).tradeAmount).toEqual(123);
});

it('executes trade', () => {
  const initialState = {
    USD: 100,
    BTC: 0.00000,
    conversionRate: 2
  };
  const newState = tradeReducer(initialState, executeTrade(10));
  expect(newState.USD).toEqual(90);
  expect(newState.BTC).toEqual(5);
  expect(newState.tradeAmount).toEqual('');
});

it('starts fetching conversion rate', () => {
  expect(tradeReducer(null, fetchConversionRateStart()).fetchingConversionRate).toBe(true);
});

it('fetches conversion rate if successful', () => {
  const newState = tradeReducer(null, fetchConversionRateSuccess(10));
  expect(newState.fetchingConversionRate).toBe(false);
  expect(newState.conversionRate).toEqual(10);
});
