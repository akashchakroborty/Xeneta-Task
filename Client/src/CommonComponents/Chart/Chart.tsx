import React from 'react';
import {
 LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip
} from 'recharts';
import { Rates } from '../../Redux/Types/portBasedRatesTypes';

export interface ChartProps {
  data: Rates[];
  dataKeyY: string;
  dataKeyX: string;
  width: number;
  height: number;
  type?:
    | 'step'
    | 'basis'
    | 'basisClosed'
    | 'basisOpen'
    | 'linear'
    | 'linearClosed'
    | 'natural'
    | 'monotoneX'
    | 'monotoneY'
    | 'monotone'
    | 'stepBefore'
    | 'stepAfter'
    | undefined;
}

const ChartComponent: React.FC<ChartProps> = ({
  data,
  dataKeyY,
  dataKeyX,
  width,
  height,
  type = 'monotone',
}) => {
  return (
    <LineChart
      width={width}
      height={height}
      data={data}
      margin={{
 top: 5, right: 20, bottom: 5, left: 0
}}
    >
      <Line type={type} dataKey={dataKeyY} stroke="#00539f" />
      <CartesianGrid stroke="#00539f" strokeDasharray="5 5" vertical={false} />
      <XAxis dataKey={dataKeyX} />
      <YAxis domain={['dataMin', 'dataMax']} />
      <Tooltip />
    </LineChart>
  );
};

export default ChartComponent;
