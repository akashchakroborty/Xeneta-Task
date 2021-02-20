import React from 'react';
import { Button } from 'antd';

import './button.scss';

export interface ButtonProps {
  type: 'text' | 'link' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
  onClick: () => void;
  value: string;
  disabled?: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({ type, onClick, value, disabled = false }) => {
  return (
    <Button type={type} onClick={onClick} className="button" disabled={disabled}>
      {value}
    </Button>
  );
};

export default ButtonComponent;
