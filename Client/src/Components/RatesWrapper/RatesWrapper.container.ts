import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { updateRateType } from '../../Redux/PortBasedRates/actionCreators';
import {
  selectIsGetRateClicked,
  selectIsRatesLoading,
  selectRates,
  selectRateType,
} from '../../Redux/PortBasedRates/selector';
import { AppState } from '../../Redux/store';
import { PortBasedRatesActionTypes } from '../../Redux/Types/portBasedRatesActionTypes';
import RatesWrapper from './RatesWrapper';

const mapStateToProps = (state: AppState) => ({
  rates: selectRates(state),
  isRatesLoading: selectIsRatesLoading(state),
  selectedRateType: selectRateType(state),
  isGetRateClicked: selectIsGetRateClicked(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, PortBasedRatesActionTypes>) => {
  return {
    updateRateType: (selectedRateType: string) => {
      dispatch(updateRateType(selectedRateType));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RatesWrapper);
