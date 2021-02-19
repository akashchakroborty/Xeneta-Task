import _ from 'lodash';
import { RatesParam } from '../../Redux/Types/portBasedRatesTypes';
import { PORTS_URL, RATES_URL } from './urls';

const createUrlFromParams = (paramObj: any, path: string) => {
  const urlParams = new URLSearchParams(_.pickBy(paramObj)).toString();
  const baseUrl = ` ${path}`;
  return _.isEmpty(urlParams) ? baseUrl : `${baseUrl}?${urlParams}`;
};

export const getPortsUrl = (): string => {
  return PORTS_URL;
};

export const getRatesUrl = (props: RatesParam): string => {
  return createUrlFromParams(
    {
      ...props,
    },
    RATES_URL,
  );
};
