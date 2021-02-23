import { EMPTY_STRING } from '../../Constants/constants';
import { MOCK_RATES_DATA } from '../../Constants/testData';
import { filterRatesBasedOnDates } from '../commonUtils';

describe('filterRatesBasedOnDates', () => {
  it('Should return empty when rates is empty', () => {
    expect(filterRatesBasedOnDates([], EMPTY_STRING, EMPTY_STRING)).toEqual([]);
  });
  it('Should return filtered data based on inputs', () => {
    expect(filterRatesBasedOnDates(MOCK_RATES_DATA, '2021-01-29', '2021-01-29')).toEqual([
      {
        day: '2021-01-29',
        mean: 1611,
        low: 1037,
        high: 2435,
      },
    ]);
  });
});
