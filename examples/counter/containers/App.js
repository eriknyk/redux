import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from '../components/List';
import * as CounterActions from '../actions/counter';
import * as ListActions from '../actions/list';

function mapStateToProps(state) {
  return {
    counterList: state.counterList
  };
}

function mapDispatchToProps(dispatch) {
  let actions = bindActionCreators(ListActions, dispatch);
  actions.counterActions = bindActionCreators(CounterActions, dispatch);
  actions.dispatch = dispatch
  return actions;
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
