import {
  DEFAULT_GET_RATES_CLICKED,
  DEFAULT_LOADING,
  DEFAULT_PORTS,
  DEFAULT_RATES,
  DEFAULT_RATE_TYPE,
  EMPTY_STRING,
} from '../../Constants/constants';
import { filterRatesBasedOnDates } from '../../Utility/commonUtils';
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
  UPDATE_RATE_TYPE,
  UPDATE_START_END_DATES,
} from './constants';

export const defaultState: PortBasedRatesState = {
  ports: DEFAULT_PORTS,
  rates: DEFAULT_RATES,
  filteredRates: DEFAULT_RATES,
  isPortsLoading: DEFAULT_LOADING,
  isRatesLoading: DEFAULT_LOADING,
  origin: EMPTY_STRING,
  destination: EMPTY_STRING,
  startDate: EMPTY_STRING,
  endDate: EMPTY_STRING,
  selectedRateType: DEFAULT_RATE_TYPE,
  isGetRateClicked: DEFAULT_GET_RATES_CLICKED,
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
        isPortsLoading: DEFAULT_LOADING,
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
      // eslint-disable-next-line no-case-declarations
      const length = action.payload.length;
      return {
        ...state,
        rates: action.payload,
        filteredRates: action.payload,
        startDate: action.payload[0].day,
        endDate: action.payload[length - 1].day,
        selectedRateType: DEFAULT_RATE_TYPE,
        isGetRateClicked: true,
      };
    case SET_RATES_FAILURE:
      return {
        ...state,
        rates: DEFAULT_RATES,
        filteredRates: DEFAULT_RATES,
        isRatesLoading: DEFAULT_LOADING,
        selectedRateType: DEFAULT_RATE_TYPE,
        isGetRateClicked: true,
      };
    case GET_RATES_LOADING:
      return {
        ...state,
        isRatesLoading: action.payload,
      };
    case UPDATE_RATE_TYPE:
      return {
        ...state,
        selectedRateType: action.payload,
      };
    case UPDATE_START_END_DATES:
      // eslint-disable-next-line no-case-declarations
      const { startDate, endDate } = action.payload;
      return {
        ...state,
        startDate,
        endDate,
        filteredRates: filterRatesBasedOnDates(state.rates, startDate, endDate),
      };
    default:
      return state;
  }
};

export default portBasedRatesReducer;
