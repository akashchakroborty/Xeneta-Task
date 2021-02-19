import React, { useEffect } from 'react';
import { Menu, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { Ports } from '../../Redux/Types/portBasedRatesTypes';

import './dropdown.scss';

export interface DropdownProps {
  getPorts: () => void;
  ports: Ports[];
  Label: string;
}
const DropdownComponent: React.FC<DropdownProps> = ({ getPorts, ports, Label }) => {
  const handlePortSelect = (event: any) => {
    // TODO: Store the key for Rates api.
    console.log(event.key);
  };
  const menu = (
    <Menu onClick={handlePortSelect}>
      {ports.map((port: Ports) => (
        <Menu.Item key={port.code}>
          {port.name}
          {' '}
          (
          {port.code}
          )
        </Menu.Item>
      ))}
    </Menu>
  );
  useEffect(() => {
    if (ports.length === 0) {
      getPorts();
    }
  }, []);

  return (
    <div>
      <Dropdown overlay={menu} trigger={['click']} placement="topCenter">
        <a className="ant-dropdown-link dropdown" onClick={(e) => e.preventDefault()}>
          {Label}
          {' '}
          <GlobalOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default DropdownComponent;
