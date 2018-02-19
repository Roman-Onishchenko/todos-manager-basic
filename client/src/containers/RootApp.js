import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as actions from '../reduxBase/actions/actions';
import TasksTable from '../components/Table/';

class RootApp extends Component {

  render() {
    return (
      <div className="wrapper">
        <TasksTable tasksList={this.props.tasksList} />
      </div>
    );
  }
}

RootApp.propTypes = {
  tasksList: PropTypes.object,
};

export default connect(
  state => ({
     tasksList: state.todoListReducer.get('tasks')
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(RootApp);