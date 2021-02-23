import _ from 'lodash';
import { Rates } from '../Redux/Types/portBasedRatesTypes';

export const filterRatesBasedOnDates = (
  rates: Rates[],
  startDate: string,
  endDate: string,
): Rates[] => {
  const startDateInMs = Date.parse(startDate);
  const endDateInMs = Date.parse(endDate);
  return _.filter(
    rates,
    (rate) => Date.parse(rate.day) >= startDateInMs && Date.parse(rate.day) <= endDateInMs,
  );
};
