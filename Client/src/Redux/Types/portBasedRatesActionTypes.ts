import { SET_PORTS_FAILURE, SET_PORTS_SUCCESS } from '../PortBasedRates/constants';
import { Ports } from './portBasedRatesTypes';

export interface SetPortsSuccess {
  type: typeof SET_PORTS_SUCCESS;
  payload: Ports[];
}

export interface SetPortsFailure {
  type: typeof SET_PORTS_FAILURE;
}

export type PortBasedRatesActionTypes = SetPortsSuccess | SetPortsFailure;
