import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { getRates } from '../../Redux/PortBasedRates/actionCreators';
import { selectDestination, selectOrigin } from '../../Redux/PortBasedRates/selector';
import { AppState } from '../../Redux/store';
import { PortBasedRatesActionTypes } from '../../Redux/Types/portBasedRatesActionTypes';
import { RatesParam } from '../../Redux/Types/portBasedRatesTypes';
import OriginDestination from './OriginDestination';

const mapStateToProps = (state: AppState) => ({
  origin: selectOrigin(state),
  destination: selectDestination(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, PortBasedRatesActionTypes>) => {
  return {
    getRates: (props: RatesParam) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(getRates(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OriginDestination);
