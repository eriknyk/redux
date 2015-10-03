import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import list from '../components/list';

const CounterList = list(function mapItemStateToProps(itemState) {
  return {
    counter: itemState
  };
})(Counter);

export default connect(function mapStateToProps(state) {
  return {
    items: state.counterList
  };
})(CounterList);
