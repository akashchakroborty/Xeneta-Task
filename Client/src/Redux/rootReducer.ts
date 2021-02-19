import { combineReducers } from 'redux';
import portBasedRatesReducer from './PortBasedRates/reducer';

export default combineReducers({
  portBasedRates: portBasedRatesReducer,
});
