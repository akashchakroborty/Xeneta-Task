import React from 'react';
import { shallow } from 'enzyme';
import Dropdown, { DropdownProps } from '../Dropdown';
import { SELECT_DESTINATION, SELECT_ORIGIN } from '../../../Constants/constants';
import { MOCK_PORTS_DATA } from '../../../Constants/testData';

describe('should test the Dropdown Component', () => {
  const mockProps: DropdownProps = {
    getPorts: jest.fn(),
    updateOrigin: jest.fn(),
    updateDestination: jest.fn(),
    ports: MOCK_PORTS_DATA,
    defaultOption: SELECT_ORIGIN,
    isPortsLoading: false,
  };
  test('should render the Component', () => {
    const component = shallow(<Dropdown {...mockProps} />);
    expect(component).toMatchSnapshot();
  });
  test('should test handlePortSelect function', () => {
    const wrapper = shallow(<Dropdown {...mockProps} />);
    wrapper.find('.dropdown').simulate('change', 'mockValue1');
    expect(mockProps.updateOrigin).toHaveBeenCalledWith('mockValue1');
  });
  test('should test handlePortSelect function for Destination', () => {
    const newMockProps: DropdownProps = { ...mockProps, defaultOption: SELECT_DESTINATION };
    const wrapper = shallow(<Dropdown {...newMockProps} />);
    wrapper.find('.dropdown').simulate('change', 'mockValue1');
    expect(mockProps.updateDestination).toHaveBeenCalledWith('mockValue1');
  });
});
