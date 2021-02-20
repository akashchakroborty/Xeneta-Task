import {
  GET_PORTS_LOADING,
  SET_PORTS_FAILURE,
  SET_PORTS_SUCCESS,
  UPDATE_DESTINATION,
  UPDATE_ORIGIN,
} from '../PortBasedRates/constants';
import { Ports } from './portBasedRatesTypes';

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

export type PortBasedRatesActionTypes =
  | SetPortsSuccess
  | SetPortsFailure
  | GetPortsLoading
  | UpdateOrigin
  | UpdateDestination;
