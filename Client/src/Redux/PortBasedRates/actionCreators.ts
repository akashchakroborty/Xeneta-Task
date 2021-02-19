import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { HttpMethods, RestClient, StatusCode } from '../../utility/restClient';
import { getPortsUrl } from '../../Utility/url-utils/urlBuilder';
import { AppState } from '../store';
import { PortBasedRatesActionTypes } from '../Types/portBasedRatesActionTypes';
import { DEFAULT_PORTS, SET_PORTS_FAILURE, SET_PORTS_SUCCESS } from './constants';

export const getPorts = (): ThunkAction<
  Promise<void>,
  AppState,
  void,
  PortBasedRatesActionTypes
> => async (dispatch: ThunkDispatch<AppState, void, PortBasedRatesActionTypes>) => {
  try {
    const url = getPortsUrl();
    const response = await RestClient({
      url,
      method: HttpMethods.get,
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
