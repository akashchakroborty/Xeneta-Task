import React, { useEffect } from 'react';
import { Select } from 'antd';
import { Ports } from '../../Redux/Types/portBasedRatesTypes';
import { SELECT_DESTINATION, SELECT_ORIGIN } from '../../Constants/constants';

import './dropdown.scss';

export interface DropdownProps {
  getPorts: () => void;
  updateOrigin: (origin: string) => void;
  updateDestination: (destination: string) => void;
  ports: Ports[];
  defaultOption: string;
  isPortsLoading: boolean;
}

const { Option } = Select;

const DropdownComponent: React.FC<DropdownProps> = ({
  getPorts,
  updateOrigin,
  updateDestination,
  ports,
  defaultOption,
  isPortsLoading,
}) => {
  const handlePortSelect = (value: string) => {
    if (defaultOption === SELECT_ORIGIN) {
      updateOrigin(value);
    }
    if (defaultOption === SELECT_DESTINATION) {
      updateDestination(value);
    }
  };

  useEffect(() => {
    if (ports.length === 0) {
      getPorts();
    }
  }, []);

  return (
    <div>
      <Select
        defaultValue={defaultOption}
        bordered={false}
        className="dropdown"
        onChange={handlePortSelect}
        loading={isPortsLoading}
        showSearch
      >
        {ports.map((port: Ports) => (
          <Option key={port.code} value={port.code}>
            {port.name} ({port.code})
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default DropdownComponent;
