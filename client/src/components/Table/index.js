import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody  } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import FilterCategory from '../FilterCategory/';
import EmptyTableImg from './emptyTableImg';
import AddTaskBtn from './Buttons/addTaskBtn';
import FilterCategoriesBtn from './Buttons/filterCategoriesBtn';
import ClearTasksBtn from './Buttons/clearTasksBtn';
import NotDoneTask  from './Tasks/notDoneTask';
import DoneTask  from './Tasks/doneTask';

export default class TasksTable extends Component {
  state = {

  };

  getTaskByPriority = (priority, isDone) =>
    this.props.tasksList.filter(task => task.get('priority') === priority).filter(task => task.get('isDone') === isDone)

  render() {
    const { tasksList } = this.props;
    const priorities = ['high', 'middle', 'low'];
    return (
      <Paper className="paper">
        <AddTaskBtn showTaskAddModal={this.props.showTaskAddModal} />
        <div className="table-wrapper">
          <Table className="table">
            <TableBody>
              {priorities.map(priority => 
                this.getTaskByPriority(priority, false).map(task => 
                  <NotDoneTask
                    key={task.get('id')}
                    task={task}
                    showTaskEditModal={this.props.showTaskEditModal}
                    doneTask={this.props.doneTask}
                    deleteTask={this.props.deleteTask}
                  />)
              )}
              {priorities.map(priority => 
                this.getTaskByPriority(priority, true).map(task => 
                  <DoneTask key={task.get('id')} task={task} />)
              )}
            </TableBody>
          </Table>
        </div>
        <FilterCategoriesBtn />
        <ClearTasksBtn />
      </Paper>
    );
  }
}

TasksTable.propTypes = {
  tasksList: PropTypes.object,
};
