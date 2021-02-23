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
} from '../PortBasedRates/constants';
import { Ports, Rates, StartEndDates } from './portBasedRatesTypes';

export interface SetPortsSuccess {
  type: typeof SET_PORTS_SUCCESS;
  payload: Ports[];
}

export interface SetPortsFailure {
  type: typeof SET_PORTS_FAILURE;
}

export interface GetPortsLoading {
  type: typeof GET_PORTS_LOADING;
  payload: boolean;
}

export interface UpdateOrigin {
  type: typeof UPDATE_ORIGIN;
  payload: string;
}

export interface UpdateDestination {
  type: typeof UPDATE_DESTINATION;
  payload: string;
}

export interface SetRatesSuccess {
  type: typeof SET_RATES_SUCCESS;
  payload: Rates[];
}

export interface SetRatesFailure {
  type: typeof SET_RATES_FAILURE;
}

export interface GetRatesLoading {
  type: typeof GET_RATES_LOADING;
  payload: boolean;
}

export interface UpdateRateType {
  type: typeof UPDATE_RATE_TYPE;
  payload: string;
}

export interface PortBasedRatesInvalid {
  type: null;
}

export interface UpdateStartEndDates {
  type: typeof UPDATE_START_END_DATES;
  payload: StartEndDates;
}

export type PortBasedRatesActionTypes =
  | SetPortsSuccess
  | SetPortsFailure
  | GetPortsLoading
  | UpdateOrigin
  | UpdateDestination
  | SetRatesSuccess
  | SetRatesFailure
  | GetRatesLoading
  | UpdateRateType
  | PortBasedRatesInvalid
  | UpdateStartEndDates;
