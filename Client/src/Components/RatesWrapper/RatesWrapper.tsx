import React from 'react';
import { Alert, RadioChangeEvent, Spin } from 'antd';
import Chart from '../../CommonComponents/Chart/Chart';
import { Rates, StartEndDates } from '../../Redux/Types/portBasedRatesTypes';
import RadioGroup from '../../CommonComponents/RadioGroup/RadioGroup';
import {
  DATE_FORMAT,
  NO_DATA_MESSAGE,
  NO_DATA_MESSAGE_FOR_DATE_RANGE,
  RATE_TYPE_MAPPER,
} from '../../Constants/constants';
import RangePicker from '../../CommonComponents/RangePicker/RangePicker';

import './ratesWrapper.scss';

export interface RatesWrapperProps {
  rates: Rates[];
  filteredRates: Rates[];
  isRatesLoading: boolean;
  isGetRateClicked: boolean;
  selectedRateType: string;
  startDate: string;
  endDate: string;
  updateRateType: (selectedRateType: string) => void;
  updateStartEndDates: (props: StartEndDates) => void;
}
const RatesWrapper: React.FC<RatesWrapperProps> = ({
  rates,
  filteredRates,
  isRatesLoading,
  isGetRateClicked,
  selectedRateType,
  startDate,
  endDate,
  updateRateType,
  updateStartEndDates,
}) => {
  const handleRadioChange = (e: RadioChangeEvent) => {
    updateRateType(e.target.value);
  };
  const handleRangePickerChange = (dates: unknown, dateStrings: string[]) => {
    updateStartEndDates({ startDate: dateStrings[0], endDate: dateStrings[1] });
  };

  return (
    <div className="ratesWrapper">
      {isRatesLoading ? (
        <Spin className="spinner" size="large" />
      ) : (
        <>
          {rates.length > 0 ? (
            <div className="ratesContainer">
              <div className="filterContainer">
                <RangePicker
                  onChange={handleRangePickerChange}
                  dateFormat={DATE_FORMAT}
                  startDate={startDate}
                  endDate={endDate}
                />
                <RadioGroup
                  selectedValue={selectedRateType}
                  data={RATE_TYPE_MAPPER}
                  onChange={handleRadioChange}
                />
              </div>
              {filteredRates.length > 0 ? (
                <Chart
                  data={filteredRates}
                  dataKeyX="day"
                  dataKeyY={selectedRateType}
                  width={1550}
                  height={400}
                />
              ) : (
                <Alert
                  className="alert"
                  message={NO_DATA_MESSAGE_FOR_DATE_RANGE}
                  type="warning"
                  showIcon
                />
              )}
            </div>
          ) : (
            <>
              {isGetRateClicked && (
                <Alert className="alert" message={NO_DATA_MESSAGE} type="warning" showIcon />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default RatesWrapper;
