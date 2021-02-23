import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export interface RangePickerProps {
  onChange: (dates: unknown, dateStrings: string[]) => void;
  dateFormat: string;
  startDate: string;
  endDate: string;
}

const RangePickerComponent: React.FC<RangePickerProps> = ({
  onChange,
  dateFormat,
  startDate,
  endDate,
}) => {
  return (
    <RangePicker
      onChange={onChange}
      value={[moment(startDate, dateFormat), moment(endDate, dateFormat)]}
      format={dateFormat}
    />
  );
};

export default RangePickerComponent;
