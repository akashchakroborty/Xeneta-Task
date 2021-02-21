import React from 'react';
import { Alert, RadioChangeEvent, Spin } from 'antd';
import Chart from '../../CommonComponents/Chart/Chart';
import { Rates } from '../../Redux/Types/portBasedRatesTypes';
import RadioGroup from '../../CommonComponents/RadioGroup/RadioGroup';
import { NO_DATA_MESSAGE, RATE_TYPE_MAPPER } from '../../Constants/constants';

import './ratesWrapper.scss';

export interface RatesWrapperProps {
  rates: Rates[];
  isRatesLoading: boolean;
  isGetRateClicked: boolean;
  selectedRateType: string;
  updateRateType: (selectedRateType: string) => void;
}
const RatesWrapper: React.FC<RatesWrapperProps> = ({
  rates,
  isRatesLoading,
  isGetRateClicked,
  selectedRateType,
  updateRateType,
}) => {
  const handleRadioChange = (e: RadioChangeEvent) => {
    updateRateType(e.target.value);
  };

  return (
    <div className="ratesWrapper">
      {isRatesLoading ? (
        <Spin className="spinner" size="large" />
      ) : (
        <>
          {rates.length > 0 ? (
            <div className="ratesContainer">
              <RadioGroup
                selectedValue={selectedRateType}
                data={RATE_TYPE_MAPPER}
                onChange={handleRadioChange}
              />
              <Chart
                data={rates}
                dataKeyX="day"
                dataKeyY={selectedRateType}
                width={1300}
                height={400}
              />
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
