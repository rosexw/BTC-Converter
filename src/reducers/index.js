import { combineReducers } from 'redux'
import tradeReducer from './trade.reducer';
 
export default combineReducers({
  trade: tradeReducer,
})
