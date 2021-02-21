/* eslint-disable */
import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { DEFAULT_PORTS, DEFAULT_RATES } from '../../../Constants/constants';
import { MOCK_PORTS_DATA, MOCK_RATES_DATA } from '../../../Constants/testData';
import { RestClient } from '../../../utility/restClient';
import { AppState } from '../../store';
import { AppActions } from '../../Types/appActionsTypes';
import {
  getPorts,
  getRates,
  updateDestination,
  updateOrigin,
  updateRateType,
} from '../actionCreators';
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
} from '../constants';

const middlewares = [thunk];
export const mockStore = createMockStore<AppState, ThunkDispatch<AppState, void, AppActions>>(
  middlewares,
);

jest.mock('../../../utility/restClient');

describe('Port Based Rates Action', () => {
  it('should create an action to update origin', () => {
    const expectedAction = {
      type: UPDATE_ORIGIN,
      payload: 'Mock Origin',
    };
    expect(updateOrigin('Mock Origin')).toEqual(expectedAction);
  });

  it('should create an action to update destination', () => {
    const expectedAction = {
      type: UPDATE_DESTINATION,
      payload: 'Mock Destination',
    };
    expect(updateDestination('Mock Destination')).toEqual(expectedAction);
  });

  it('should create an action to update rate type', () => {
    const expectedAction = {
      type: UPDATE_RATE_TYPE,
      payload: 'Mock Rate Type',
    };
    expect(updateRateType('Mock Rate Type')).toEqual(expectedAction);
  });

  describe('Test getPorts action creator', () => {
    it('creates SET_PORTS_SUCCESS after successfully fetching Ports with 200 status.', () => {
      (RestClient as jest.Mock<any>).mockImplementation(() => {
        return Promise.resolve({ status: 200, data: MOCK_PORTS_DATA });
      });

      const expectedActions = [
        {
          type: GET_PORTS_LOADING,
          payload: true,
        },
        {
          type: GET_PORTS_LOADING,
          payload: false,
        },
        { type: SET_PORTS_SUCCESS, payload: MOCK_PORTS_DATA },
      ];

      const store = mockStore();
      return store.dispatch(getPorts()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates SET_PORTS_SUCCESS after successfully fetching  Ports with 204 status.', () => {
      (RestClient as jest.Mock<any>).mockImplementation(() => {
        return Promise.resolve({ status: 204 });
      });

      const expectedActions = [
        {
          type: GET_PORTS_LOADING,
          payload: true,
        },
        {
          type: GET_PORTS_LOADING,
          payload: false,
        },
        { type: SET_PORTS_SUCCESS, payload: DEFAULT_PORTS },
      ];

      const store = mockStore();
      return store.dispatch(getPorts()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates SET_PORTS_FAILURE after failure in fetching  Ports with 400 status.', () => {
      (RestClient as jest.Mock<any>).mockImplementation(() => {
        return Promise.reject({ status: 400 });
      });

      const expectedActions = [
        {
          type: GET_PORTS_LOADING,
          payload: true,
        },
        { type: SET_PORTS_FAILURE },
      ];

      const store = mockStore();
      return store.dispatch(getPorts()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('Test getRates action creator', () => {
    const mockParams = { origin: 'Mock origin', destination: 'Mock destination' };
    it('creates SET_RATES_SUCCESS after successfully fetching Rates with 200 status.', () => {
      (RestClient as jest.Mock<any>).mockImplementation(() => {
        return Promise.resolve({ status: 200, data: MOCK_RATES_DATA });
      });

      const expectedActions = [
        {
          type: GET_RATES_LOADING,
          payload: true,
        },
        {
          type: GET_RATES_LOADING,
          payload: false,
        },
        { type: SET_RATES_SUCCESS, payload: MOCK_RATES_DATA },
      ];

      const store = mockStore();
      return store.dispatch(getRates(mockParams)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates SET_RATES_SUCCESS after successfully fetching  Rates with 204 status.', () => {
      (RestClient as jest.Mock<any>).mockImplementation(() => {
        return Promise.resolve({ status: 204 });
      });

      const expectedActions = [
        {
          type: GET_RATES_LOADING,
          payload: true,
        },
        {
          type: GET_RATES_LOADING,
          payload: false,
        },
        { type: SET_RATES_SUCCESS, payload: DEFAULT_RATES },
      ];

      const store = mockStore();
      return store.dispatch(getRates(mockParams)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates SET_RATES_FAILURE after failure in fetching Rates with 400 status.', () => {
      (RestClient as jest.Mock<any>).mockImplementation(() => {
        return Promise.reject({ status: 400 });
      });

      const expectedActions = [
        {
          type: GET_RATES_LOADING,
          payload: true,
        },
        { type: SET_RATES_FAILURE },
      ];

      const store = mockStore();
      return store.dispatch(getRates(mockParams)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
