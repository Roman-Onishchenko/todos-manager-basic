import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody  } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { TableCell, TableRow } from 'material-ui/Table';

import FilterCategory from './filterCategory';
import EmptyTableImg from './emptyTableImg';
import AddTaskBtn from './Buttons/addTaskBtn';
import FilterCategoriesBtn from './Buttons/filterCategoriesBtn';
import ClearTasksBtn from './Buttons/clearTasksBtn';
import NotDoneTask  from './Tasks/notDoneTask';
import DoneTask  from './Tasks/doneTask';
import GreetingMessage from './greetingMessage';

export default class TasksTable extends Component {
  static propTypes = {
    tasksList: PropTypes.object,
    clearTasksList: PropTypes.func,
    showTaskAddModal: PropTypes.func,
    doneTask: PropTypes.func,
    deleteTask: PropTypes.func,
  }

  state = {
    filtersOpened: true,
    priority: 'all',
    category: 'day',
    taskDone: '0',
  };

  componentDidMount() {
    this.props.getTasks();
  }

  changeFiltersVisibility = () => {
    this.setState((prevState) => ({
      filtersOpened: !prevState.filtersOpened
    }));
  }

  changeFilterCriteria = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  getTaskByPriority = (priority, category, taskDone) => {
    if(priority === 'all') {
      return this.props.tasksList.filter(
        task => task.get('category') === category).filter(
        task => task.get('isDone') === Number(taskDone)).sort(
        (taskA, taskB) => taskA.get("priority") - taskB.get("priority"))
    } else {
      return this.props.tasksList.filter(
        task => task.get('priority') === priority).filter(
        task => task.get('category') === category).filter(
        task => task.get('isDone') === Number(taskDone)).sort(
        (taskA, taskB) => taskA.get("priority") - taskB.get("priority"))
    }
  }

  render() {
    const { priority, category, taskDone } = this.state;
    let tableContent;
    if(Number(taskDone) === 0 && this.getTaskByPriority(priority, category, taskDone).size > 0) {
      tableContent = 
        this.getTaskByPriority(priority, category, taskDone).map(task => 
          <NotDoneTask
            key={task.get('id')}
            task={task}
            showTaskEditModal={this.props.showTaskEditModal}
            doneTask={this.props.doneTask}
            deleteTask={this.props.deleteTask}
          />)
    } else if(Number(taskDone) === 1 && this.getTaskByPriority(priority, category, taskDone).size > 0) {
      tableContent = 
        this.getTaskByPriority(priority, category, taskDone).map(task => 
          <DoneTask key={task.get('id')} task={task} />)
    } else {
      tableContent = <TableRow><TableCell className="empty-tablecell"><EmptyTableImg /></TableCell></TableRow>
    }

    return (
      <Paper className="paper">
        <GreetingMessage />
        <AddTaskBtn showTaskAddModal={this.props.showTaskAddModal} />
        <div className="table-wrapper">
          <Table className="table">
            <TableBody>
              {tableContent}
            </TableBody>
          </Table>
        </div>
        <div className="buttons-container">
          <FilterCategoriesBtn filtersOpened={this.state.filtersOpened} changeFiltersVisibility={this.changeFiltersVisibility} />
          <ClearTasksBtn clearTasksList={this.props.clearTasksList} taskDone={taskDone} />
        </div>
        {this.state.filtersOpened && 
          <FilterCategory 
            priority={this.state.priority}
            category={this.state.category}
            taskDone={this.state.taskDone}
            changeFilterCriteria={this.changeFilterCriteria}
          />}
      </Paper>
    );
  }
}
