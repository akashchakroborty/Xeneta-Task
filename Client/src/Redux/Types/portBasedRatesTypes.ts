export interface PortBasedRatesState {
  ports: Ports[];
  rates: Rates[];
  filteredRates: Rates[];
  isPortsLoading: boolean;
  isRatesLoading: boolean;
  origin: string;
  destination: string;
  selectedRateType: string;
  isGetRateClicked: boolean;
  startDate: string;
  endDate: string;
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

export interface StartEndDates {
  startDate: string;
  endDate: string;
}
