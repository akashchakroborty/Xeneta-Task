import React from 'react';
import { SwapOutlined } from '@ant-design/icons';
import DropdownComponent from '../../CommonComponents/Dropdown/Dropdown.container';
import {
  EMPTY_STRING,
  GET_RATES,
  SELECT_DESTINATION,
  SELECT_ORIGIN,
} from '../../Constants/constants';
import Button from '../../CommonComponents/Button/Button';
import { RatesParam } from '../../Redux/Types/portBasedRatesTypes';

import './originDestination.scss';

export interface OriginDestinationProps {
  getRates: (props: RatesParam) => void;
  origin: string;
  destination: string;
}

const OriginDestination: React.FC<OriginDestinationProps> = ({ getRates, origin, destination }) => {
  const handleClick = () => {
    getRates({ origin, destination });
  };
  const isGetRatesButtonDisabled = origin === EMPTY_STRING || destination === EMPTY_STRING;
  return (
    <div className="originDestination">
      <DropdownComponent defaultOption={SELECT_ORIGIN} />
      <SwapOutlined className="icon" />
      <DropdownComponent defaultOption={SELECT_DESTINATION} />
      <Button
        type="primary"
        value={GET_RATES}
        onClick={handleClick}
        disabled={isGetRatesButtonDisabled}
      />
    </div>
  );
};

export default OriginDestination;
