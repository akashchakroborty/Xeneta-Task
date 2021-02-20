export interface PortBasedRatesState {
  ports: Ports[];
  rates: Rates[];
  isPortsLoading: boolean;
  isRatesLoading: boolean;
  origin: string;
  destination: string;
}

export interface Ports {
  code: string;
  name: string;
}

export interface Rates {
  day: string;
  mean: number;
  low: number;
  high: number;
}

export interface RatesParam {
  origin: string;
  destination: string;
}