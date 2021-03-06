import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { DEFAULT_PORTS, DEFAULT_RATES } from '../../Constants/constants';
import { HttpMethods, RestClient, StatusCode } from '../../utility/restClient';
import { getPortsUrl, getRatesUrl } from '../../Utility/url-utils/urlBuilder';
import { AppState } from '../store';
import {
  PortBasedRatesActionTypes,
  UpdateDestination,
  UpdateOrigin,
  UpdateRateType,
  UpdateStartEndDates,
} from '../Types/portBasedRatesActionTypes';
import { RatesParam, StartEndDates } from '../Types/portBasedRatesTypes';
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

export const getPorts = (): ThunkAction<
  Promise<void>,
  AppState,
  void,
  PortBasedRatesActionTypes
> => async (dispatch: ThunkDispatch<AppState, void, PortBasedRatesActionTypes>) => {
  try {
    dispatch({
      type: GET_PORTS_LOADING,
      payload: true,
    });
    const url = getPortsUrl();
    const response = await RestClient({
      url,
      method: HttpMethods.get,
    });
    dispatch({
      type: GET_PORTS_LOADING,
      payload: false,
    });
    if (response.status === StatusCode.success) {
      dispatch({
        type: SET_PORTS_SUCCESS,
        payload: response.data,
      });
    }
    if (response.status === StatusCode.noContent) {
      dispatch({
        type: SET_PORTS_SUCCESS,
        payload: DEFAULT_PORTS,
      });
    }
  } catch (err) {
    dispatch({
      type: SET_PORTS_FAILURE,
    });
  }
};

export const updateOrigin = (origin: string): UpdateOrigin => {
  return {
    type: UPDATE_ORIGIN,
    payload: origin,
  };
};

export const updateDestination = (destination: string): UpdateDestination => {
  return {
    type: UPDATE_DESTINATION,
    payload: destination,
  };
};

export const getRates = (
  props: RatesParam,
): ThunkAction<Promise<void>, AppState, void, PortBasedRatesActionTypes> => async (
  dispatch: ThunkDispatch<AppState, void, PortBasedRatesActionTypes>,
) => {
  try {
    dispatch({
      type: GET_RATES_LOADING,
      payload: true,
    });
    const url = getRatesUrl(props);
    const response = await RestClient({
      url,
      method: HttpMethods.get,
    });
    dispatch({
      type: GET_RATES_LOADING,
      payload: false,
    });
    if (response.status === StatusCode.success) {
      dispatch({
        type: SET_RATES_SUCCESS,
        payload: response.data,
      });
    }
    if (response.status === StatusCode.noContent) {
      dispatch({
        type: SET_RATES_SUCCESS,
        payload: DEFAULT_RATES,
      });
    }
  } catch (err) {
    dispatch({
      type: SET_RATES_FAILURE,
    });
  }
};

export const updateRateType = (selectedRateType: string): UpdateRateType => {
  return {
    type: UPDATE_RATE_TYPE,
    payload: selectedRateType,
  };
};

export const updateStartEndDates = ({ startDate, endDate }: StartEndDates): UpdateStartEndDates => {
  return {
    type: UPDATE_START_END_DATES,
    payload: { startDate, endDate },
  };
};
