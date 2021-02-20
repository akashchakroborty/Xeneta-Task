import React from 'react';
import { shallow } from 'enzyme';
import RadioGroup, { RadioGroupProps } from '../RadioGroup';
import { DEFAULT_RATE_TYPE, RATE_TYPE_MAPPER } from '../../../Constants/constants';

describe('should test the RadioGroup Component', () => {
  const mockProps: RadioGroupProps = {
    onChange: jest.fn(),
    selectedValue: DEFAULT_RATE_TYPE,
    data: RATE_TYPE_MAPPER,
  };
  test('should render the Component', () => {
    const component = shallow(<RadioGroup {...mockProps} />);
    expect(component).toMatchSnapshot();
  });
});
