import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { updateRateType, updateStartEndDates } from '../../Redux/PortBasedRates/actionCreators';
import {
  selectEndDate,
  selectFilteredRates,
  selectIsGetRateClicked,
  selectIsRatesLoading,
  selectRates,
  selectRateType,
  selectStartDate,
} from '../../Redux/PortBasedRates/selector';
import { AppState } from '../../Redux/store';
import { PortBasedRatesActionTypes } from '../../Redux/Types/portBasedRatesActionTypes';
import { StartEndDates } from '../../Redux/Types/portBasedRatesTypes';
import RatesWrapper from './RatesWrapper';

const mapStateToProps = (state: AppState) => ({
  rates: selectRates(state),
  filteredRates: selectFilteredRates(state),
  isRatesLoading: selectIsRatesLoading(state),
  selectedRateType: selectRateType(state),
  isGetRateClicked: selectIsGetRateClicked(state),
  startDate: selectStartDate(state),
  endDate: selectEndDate(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, PortBasedRatesActionTypes>) => {
  return {
    updateRateType: (selectedRateType: string) => {
      dispatch(updateRateType(selectedRateType));
    },
    updateStartEndDates: (props: StartEndDates) => {
      dispatch(updateStartEndDates(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RatesWrapper);
