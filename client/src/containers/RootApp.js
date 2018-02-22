import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as actions from '../reduxBase/actions/actions';
import TasksTable from '../components/Table/';
import AddModal from '../components/Modals/AddModal/';
import EditModal from '../components/Modals/EditModal/';

class RootApp extends Component {
  static propTypes = {
    tasksList: PropTypes.object,
    addTask: PropTypes.func,
    updateTask: PropTypes.func,
    showTaskAddModal: PropTypes.func,
    showTaskEditModal: PropTypes.func,
    hideTaskModal: PropTypes.func,
    clearTasksList: PropTypes.func,
  }
  
  render() {
        console.log(this.props.tasksReducer.toJS());
    const tasksList = this.props.tasksReducer.get('tasks');
    const modalType = this.props.tasksReducer.get('modalType');
    const activeTaskId = this.props.tasksReducer.get('taskId');
    let activeTask;
    if (activeTaskId) {
      activeTask = this.props.tasksReducer.get('tasks').find(task => task.get('id') === activeTaskId);
    }
    return (
      <div className="wrapper">
        {modalType === 'addTask' &&
          <AddModal
            open
            hideTaskModal={this.props.hideTaskModal}
            addTask={this.props.addTask}
          />
        }
        {modalType === 'editTask' &&
          <EditModal
            open
            activeTask={activeTask}
            hideTaskModal={this.props.hideTaskModal}
            updateTask={this.props.updateTask}
          />
        }
        <TasksTable
          tasksList={tasksList}
          showTaskAddModal={this.props.showTaskAddModal}
          showTaskEditModal={this.props.showTaskEditModal}
          deleteTask={this.props.deleteTask}
          doneTask={this.props.doneTask}
          clearTasksList={this.props.clearTasksList}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
     tasksReducer: state.todoListReducer
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(RootApp);