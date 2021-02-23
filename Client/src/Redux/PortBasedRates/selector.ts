import { AppState } from '../store';
import { Ports, Rates } from '../Types/portBasedRatesTypes';

export const selectPorts = (state: AppState): Ports[] => state.portBasedRates.ports;

export const selectIsPortsLoading = (state: AppState): boolean =>
  state.portBasedRates.isPortsLoading;

export const selectIsRatesLoading = (state: AppState): boolean =>
  state.portBasedRates.isRatesLoading;

export const selectOrigin = (state: AppState): string => state.portBasedRates.origin;

export const selectDestination = (state: AppState): string => state.portBasedRates.destination;

export const selectRates = (state: AppState): Rates[] => state.portBasedRates.rates;

export const selectRateType = (state: AppState): string => state.portBasedRates.selectedRateType;

export const selectIsGetRateClicked = (state: AppState): boolean =>
  state.portBasedRates.isGetRateClicked;

export const selectStartDate = (state: AppState): string => state.portBasedRates.startDate;

export const selectEndDate = (state: AppState): string => state.portBasedRates.endDate;

export const selectFilteredRates = (state: AppState): Rates[] => state.portBasedRates.filteredRates;
