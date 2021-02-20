import { AppState } from '../store';
import { Ports } from '../Types/portBasedRatesTypes';

export const selectPorts = (state: AppState): Ports[] => state.portBasedRates.ports;
export const selectIsPortsLoading = (state: AppState): boolean =>
  state.portBasedRates.isPortsLoading;
export const selectIsRatesLoading = (state: AppState): boolean =>
  state.portBasedRates.isRatesLoading;
export const selectOrigin = (state: AppState): string => state.portBasedRates.origin;
export const selectDestination = (state: AppState): string => state.portBasedRates.destination;
