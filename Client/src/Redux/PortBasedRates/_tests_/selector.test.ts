import { defaultState as portBasedRatesState } from '../reducer';
import {
  selectDestination,
  selectEndDate,
  selectFilteredRates,
  selectIsGetRateClicked,
  selectIsPortsLoading,
  selectIsRatesLoading,
  selectOrigin,
  selectPorts,
  selectRates,
  selectRateType,
  selectStartDate,
} from '../selector';
import { AppState } from '../../store';

export const mockState: AppState = {
  portBasedRates: portBasedRatesState,
};
describe('Port Based Rates Selector', () => {
  it('Test port based rates selectors', () => {
    expect(selectPorts(mockState)).toEqual(mockState.portBasedRates.ports);

    expect(selectIsPortsLoading(mockState)).toEqual(mockState.portBasedRates.isPortsLoading);

    expect(selectIsRatesLoading(mockState)).toEqual(mockState.portBasedRates.isRatesLoading);

    expect(selectOrigin(mockState)).toEqual(mockState.portBasedRates.origin);

    expect(selectDestination(mockState)).toEqual(mockState.portBasedRates.destination);

    expect(selectRates(mockState)).toEqual(mockState.portBasedRates.rates);

    expect(selectRateType(mockState)).toEqual(mockState.portBasedRates.selectedRateType);

    expect(selectIsGetRateClicked(mockState)).toEqual(mockState.portBasedRates.isGetRateClicked);

    expect(selectStartDate(mockState)).toEqual(mockState.portBasedRates.startDate);

    expect(selectEndDate(mockState)).toEqual(mockState.portBasedRates.endDate);

    expect(selectFilteredRates(mockState)).toEqual(mockState.portBasedRates.filteredRates);
  });
});
