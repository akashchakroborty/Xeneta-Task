import React from 'react';
import { shallow } from 'enzyme';
import Chart, { ChartProps } from '../Chart';
import { MOCK_RATES_DATA } from '../../../Constants/testData';

describe('should test the Chart Component', () => {
  const mockProps: ChartProps = {
    data: MOCK_RATES_DATA,
    dataKeyY: 'low',
    dataKeyX: 'day',
    width: 1300,
    height: 400,
  };
  test('should render the Component', () => {
    const component = shallow(<Chart {...mockProps} />);
    expect(component).toMatchSnapshot();
  });
});
