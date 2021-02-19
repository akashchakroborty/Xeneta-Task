export interface PortBasedRatesState {
  ports: Ports[];
  rates: Rates[];
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
