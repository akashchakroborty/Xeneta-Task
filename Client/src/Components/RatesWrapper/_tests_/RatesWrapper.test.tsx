import React from 'react';
import { shallow } from 'enzyme';
import RatesWrapper, { RatesWrapperProps } from '../RatesWrapper';
import { DEFAULT_RATES, DEFAULT_RATE_TYPE, EMPTY_STRING } from '../../../Constants/constants';
import { MOCK_RATES_DATA } from '../../../Constants/testData';

describe('should test the OriginDestination Component', () => {
  const mockProps: RatesWrapperProps = {
    rates: MOCK_RATES_DATA,
    filteredRates: MOCK_RATES_DATA,
    isRatesLoading: false,
    isGetRateClicked: false,
    startDate: EMPTY_STRING,
    endDate: EMPTY_STRING,
    selectedRateType: DEFAULT_RATE_TYPE,
    updateRateType: jest.fn(),
    updateStartEndDates: jest.fn(),
  };
  test('should render the Component', () => {
    const component = shallow(<RatesWrapper {...mockProps} />);
    expect(component).toMatchSnapshot();
  });
  test('should test handleRadioChange function', () => {
    const wrapper = shallow(<RatesWrapper {...mockProps} />);
    const event = { target: { value: 'Mock Value' } };
    wrapper.find('RadioGroupComponent').simulate('change', event);
    expect(mockProps.updateRateType).toHaveBeenCalled();
  });
  test('should test handleRangePickerChange function', () => {
    const wrapper = shallow(<RatesWrapper {...mockProps} />);
    const dates = {};
    const dateStrings = [EMPTY_STRING, EMPTY_STRING];
    wrapper.find('RangePickerComponent').simulate('change', dates, dateStrings);
    expect(mockProps.updateStartEndDates).toHaveBeenCalledWith({
      startDate: EMPTY_STRING,
      endDate: EMPTY_STRING,
    });
  });
  test('spinner should exist when isRatesLoading is true', () => {
    const newMockProps = { ...mockProps, isRatesLoading: true };
    const wrapper = shallow(<RatesWrapper {...newMockProps} />);
    expect(wrapper.find('.spinner').exists()).toBe(true);
  });
  test('Should show warning notification when isGetRateClicked is true and rates is Empty.', () => {
    const newMockProps = { ...mockProps, isGetRateClicked: true, rates: DEFAULT_RATES };
    const wrapper = shallow(<RatesWrapper {...newMockProps} />);
    expect(wrapper.find('.alert').exists()).toBe(true);
  });
  test('Should show warning notification when isGetRateClicked is true and filteredRates is Empty.', () => {
    const newMockProps = { ...mockProps, isGetRateClicked: true, filteredRates: DEFAULT_RATES };
    const wrapper = shallow(<RatesWrapper {...newMockProps} />);
    expect(wrapper.find('.alert').exists()).toBe(true);
  });
});
