import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { getPorts } from '../../Redux/PortBasedRates/actionCreators';
import { selectPorts } from '../../Redux/PortBasedRates/selector';
import { AppState } from '../../Redux/store';
import { PortBasedRatesActionTypes } from '../../Redux/Types/portBasedRatesActionTypes';
import Dropdown from './Dropdown';

const mapStateToProps = (state: AppState) => ({
    ports: selectPorts(state),
  });

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, PortBasedRatesActionTypes>) => {
  return {
    getPorts: () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(getPorts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
