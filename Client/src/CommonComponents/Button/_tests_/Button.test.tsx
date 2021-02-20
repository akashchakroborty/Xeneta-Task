import React from 'react';
import { shallow } from 'enzyme';
import Button, { ButtonProps } from '../Button';

describe('should test the Button Component', () => {
  const mockProps: ButtonProps = {
    type: 'text',
    onClick: jest.fn(),
    value: 'Mock Button',
    disabled: false,
  };
  test('should render the Component', () => {
    const component = shallow(<Button {...mockProps} />);
    expect(component).toMatchSnapshot();
  });
});
