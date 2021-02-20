import {
  DEFAULT_LOADING,
  DEFAULT_PORTS,
  DEFAULT_RATES,
  EMPTY_STRING,
} from '../../Constants/constants';
import { PortBasedRatesActionTypes } from '../Types/portBasedRatesActionTypes';
import { PortBasedRatesState } from '../Types/portBasedRatesTypes';
import {
  GET_PORTS_LOADING,
  GET_RATES_LOADING,
  SET_PORTS_FAILURE,
  SET_PORTS_SUCCESS,
  SET_RATES_FAILURE,
  SET_RATES_SUCCESS,
  UPDATE_DESTINATION,
  UPDATE_ORIGIN,
} from './constants';

export const defaultState: PortBasedRatesState = {
  ports: DEFAULT_PORTS,
  rates: DEFAULT_RATES,
  isPortsLoading: DEFAULT_LOADING,
  isRatesLoading: DEFAULT_LOADING,
  origin: EMPTY_STRING,
  destination: EMPTY_STRING,
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
    case GET_PORTS_LOADING:
      return {
        ...state,
        isPortsLoading: action.payload,
      };
    case UPDATE_ORIGIN:
      return {
        ...state,
        origin: action.payload,
      };
    case UPDATE_DESTINATION:
      return {
        ...state,
        destination: action.payload,
      };
    case SET_RATES_SUCCESS:
      return {
        ...state,
        rates: action.payload,
      };
    case SET_RATES_FAILURE:
      return {
        ...state,
        rates: DEFAULT_RATES,
      };
    case GET_RATES_LOADING:
      return {
        ...state,
        isRatesLoading: action.payload,
      };
    default:
      return state;
  }
};

export default portBasedRatesReducer;