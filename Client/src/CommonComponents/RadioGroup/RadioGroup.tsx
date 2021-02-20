import React from 'react';
import { Radio, RadioChangeEvent } from 'antd';

export interface RadioGroupProps {
  onChange: (e: RadioChangeEvent) => void;
  selectedValue: string;
  data: Map<string, string>;
}

const RadioGroupComponent: React.FC<RadioGroupProps> = ({ onChange, selectedValue, data }) => {
  return (
    <Radio.Group onChange={onChange} value={selectedValue}>
      {[...data.keys()].map((value) => (
        <Radio value={data.get(value)!} key={data.get(value)}>
          {value}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default RadioGroupComponent;
