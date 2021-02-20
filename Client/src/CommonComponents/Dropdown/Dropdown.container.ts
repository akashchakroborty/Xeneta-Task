import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  getPorts,
  updateDestination,
  updateOrigin,
} from '../../Redux/PortBasedRates/actionCreators';
import { selectIsPortsLoading, selectPorts } from '../../Redux/PortBasedRates/selector';
import { AppState } from '../../Redux/store';
import { PortBasedRatesActionTypes } from '../../Redux/Types/portBasedRatesActionTypes';
import Dropdown from './Dropdown';

const mapStateToProps = (state: AppState) => ({
  ports: selectPorts(state),
  isPortsLoading: selectIsPortsLoading(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, PortBasedRatesActionTypes>) => {
  return {
    getPorts: () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(getPorts());
    },
    updateOrigin: (origin: string) => {
      dispatch(updateOrigin(origin));
    },
    updateDestination: (destination: string) => {
      dispatch(updateDestination(destination));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
