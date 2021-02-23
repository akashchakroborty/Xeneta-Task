import { DEFAULT_PORTS, DEFAULT_RATES } from '../../../Constants/constants';
import { MOCK_PORTS_DATA, MOCK_RATES_DATA } from '../../../Constants/testData';
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
} from '../constants';
import portBasedRatesReducer, { defaultState } from '../reducer';

describe('portBasedRatesReducer', () => {
  it('should return initial state', () => {
    expect(portBasedRatesReducer(undefined, { type: null })).toEqual(defaultState);
  });

  it('should set ports when set port success is fired', () => {
    expect(
      portBasedRatesReducer(defaultState, {
        type: SET_PORTS_SUCCESS,
        payload: MOCK_PORTS_DATA,
      }).ports,
    ).toStrictEqual(MOCK_PORTS_DATA);
  });

  it('should set ports to Default value when set port failure is fired', () => {
    expect(
      portBasedRatesReducer(defaultState, {
        type: SET_PORTS_FAILURE,
        payload: DEFAULT_PORTS,
      }).ports,
    ).toStrictEqual(DEFAULT_PORTS);
  });

  it('should set ports Loading to true when set ports loading is fired', () => {
    expect(
      portBasedRatesReducer(defaultState, {
        type: GET_PORTS_LOADING,
        payload: true,
      }).isPortsLoading,
    ).toStrictEqual(true);
  });

  it('should update origin when update origin is fired', () => {
    expect(
      portBasedRatesReducer(defaultState, {
        type: UPDATE_ORIGIN,
        payload: 'Mock Origin',
      }).origin,
    ).toStrictEqual('Mock Origin');
  });

  it('should update destination when update destination is fired', () => {
    expect(
      portBasedRatesReducer(defaultState, {
        type: UPDATE_DESTINATION,
        payload: 'Mock Destination',
      }).destination,
    ).toStrictEqual('Mock Destination');
  });

  it('should set rates when set rates success is fired', () => {
    expect(
      portBasedRatesReducer(defaultState, {
        type: SET_RATES_SUCCESS,
        payload: MOCK_RATES_DATA,
      }).rates,
    ).toStrictEqual(MOCK_RATES_DATA);
  });

  it('should set rates to Default value when set rates failure is fired', () => {
    expect(
      portBasedRatesReducer(defaultState, {
        type: SET_RATES_FAILURE,
        payload: DEFAULT_RATES,
      }).rates,
    ).toStrictEqual(DEFAULT_RATES);
  });

  it('should set rates loading to true when set rates loading is fired', () => {
    expect(
      portBasedRatesReducer(defaultState, {
        type: GET_RATES_LOADING,
        payload: true,
      }).isRatesLoading,
    ).toStrictEqual(true);
  });

  it('should set rate type when set rate type is fired', () => {
    expect(
      portBasedRatesReducer(defaultState, {
        type: UPDATE_RATE_TYPE,
        payload: 'Mock Rate Type',
      }).selectedRateType,
    ).toStrictEqual('Mock Rate Type');
  });

  it('should update start and end dates when update startEndDate type is fired', () => {
    expect(
      portBasedRatesReducer(defaultState, {
        type: UPDATE_START_END_DATES,
        payload: { startDate: '2021-01-29', endDate: '2021-01-29' },
      }).startDate,
    ).toStrictEqual('2021-01-29');
  });
});
