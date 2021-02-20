import { AppState } from '../store';
import { Ports } from '../Types/portBasedRatesTypes';

export const selectPorts = (state: AppState): Ports[] => state.portBasedRates.ports;
export const selectIsPortsLoading = (state: AppState): boolean =>
  state.portBasedRates.isPortsLoading;
