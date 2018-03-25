import { combineReducers } from 'redux'
import tradeReducer from './trade.reducer';

// combineReducers is a helper function that combines objects with different functions into a single reducing function.
// at the moment, there is only one reducing function, but more could be added later.
export default combineReducers({
  trade: tradeReducer,
})
