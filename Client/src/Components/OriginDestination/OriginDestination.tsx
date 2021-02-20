import React from 'react';
import { SwapOutlined } from '@ant-design/icons';
import DropdownComponent from '../../CommonComponents/Dropdown/Dropdown.container';
import { SELECT_DESTINATION, SELECT_ORIGIN } from '../../Constants/constants';

import './originDestination.scss';

const OriginDestination: React.FC = () => (
  <div className="originDestination">
    <DropdownComponent defaultOption={SELECT_ORIGIN} />
    <SwapOutlined className="icon" />
    <DropdownComponent defaultOption={SELECT_DESTINATION} />
  </div>
);

export default OriginDestination;
