import { PortBasedRatesActionTypes } from '../Types/portBasedRatesActionTypes';
import { PortBasedRatesState } from '../Types/portBasedRatesTypes';
import {
  DEFAULT_PORTS,
  DEFAULT_RATES,
  SET_PORTS_FAILURE,
  SET_PORTS_SUCCESS,
} from './constants';

export const defaultState: PortBasedRatesState = {
  ports: DEFAULT_PORTS,
  rates: DEFAULT_RATES,
};

const portBasedRatesReducer = (
  state = defaultState,
  action: PortBasedRatesActionTypes,
): PortBasedRatesState => {
  switch (action.type) {
    case SET_PORTS_SUCCESS:
      return {
        ...state,
        ports: action.payload,
      };
    case SET_PORTS_FAILURE:
      return {
        ...state,
        ports: DEFAULT_PORTS,
      };
    default:
      return state;
  }
};

export default portBasedRatesReducer;
