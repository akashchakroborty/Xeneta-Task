import React from 'react';
import moment, { Moment } from 'moment';
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
  let value: [Moment, Moment] | null = null;
  if (startDate && endDate) {
    value = [moment(startDate, dateFormat), moment(endDate, dateFormat)];
  }
  return <RangePicker onChange={onChange} value={value} format={dateFormat} />;
};

export default RangePickerComponent;
