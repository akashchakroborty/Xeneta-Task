import axios, { AxiosResponse, Method } from 'axios';
import { Ports } from '../Redux/Types/portBasedRatesTypes';

export interface Options {
  method: 'get';
  url: string;
}

export interface Header {
  'Content-Type': string;
  'x-api-key': string | undefined;
}

interface AxiosParams {
  method: Method;
  url: string;
  headers: Header;
}

export enum HttpMethods {
  get = 'get',
}

export enum StatusCode {
  success = 200,
  noContent = 204,
}

export type ApiResponse = Ports[];

export const RestClient = async (options: Options): Promise<AxiosResponse<ApiResponse>> => {
  const commonHeader = {
    'Content-Type': 'application/json',
    'x-api-key': process.env.API_KEY,
  };
  const axiosInstance = axios.create({
    validateStatus(status: number) {
      return status >= 200 && status <= 503;
    },
  });
  const axiosParams: AxiosParams = {
    method: options.method,
    url: options.url,
    headers: { ...commonHeader },
  };
  const response = await axiosInstance(axiosParams);
  return response;
};
