import React from 'react';
import { SwapOutlined } from '@ant-design/icons';
import DropdownComponent from '../../CommonComponents/Dropdown/Dropdown.container';
import { DESTINATION, ORIGIN } from '../../Constants/constants';

import './originDestination.scss';

const OriginDestination: React.FC = () => (
  <div className="originDestination">
    <DropdownComponent Label={ORIGIN} />
    <SwapOutlined className="icon" />
    <DropdownComponent Label={DESTINATION} />
  </div>
);

export default OriginDestination;
