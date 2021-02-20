/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import OriginDestination, { OriginDestinationProps } from '../OriginDestination';
import { EMPTY_STRING } from '../../../Constants/constants';

describe('should test the OriginDestination Component', () => {
  const mockProps: OriginDestinationProps = {
    getRates: jest.fn(),
    origin: EMPTY_STRING,
    destination: EMPTY_STRING,
  };
  test('should render the Component', () => {
    const component = shallow(<OriginDestination {...mockProps} />);
    expect(component).toMatchSnapshot();
  });
  test('should test handleClick function', () => {
    const wrapper = shallow(<OriginDestination {...mockProps} />);
    wrapper.find('ButtonComponent').simulate('click');
    expect(mockProps.getRates).toHaveBeenCalled();
  });
  test('Button should be enabled with valid inputs', () => {
    const newMockProps: OriginDestinationProps = {
      ...mockProps,
      origin: 'mockOrigin',
      destination: 'mockDestination',
    };
    const wrapper = shallow(<OriginDestination {...newMockProps} />);
    expect(wrapper.props().children[3].props.disabled).toBe(false);
  });
});
