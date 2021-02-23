import React from 'react';
import { shallow } from 'enzyme';
import RangePicker, { RangePickerProps } from '../RangePicker';
import { DATE_FORMAT, EMPTY_STRING } from '../../../Constants/constants';

describe('should test the RangePicker Component', () => {
  const mockProps: RangePickerProps = {
    onChange: jest.fn(),
    dateFormat: DATE_FORMAT,
    startDate: EMPTY_STRING,
    endDate: EMPTY_STRING,
  };
  test('should render the Component', () => {
    const component = shallow(<RangePicker {...mockProps} />);
    expect(component).toMatchSnapshot();
  });
});
