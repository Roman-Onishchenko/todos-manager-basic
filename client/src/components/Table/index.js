import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import DeleteIcon from 'material-ui-icons/DeleteForever';
import EditIcon from 'material-ui-icons/Dvr';
import IconButton from 'material-ui/IconButton';
import PriorityIcon from 'material-ui-icons/Warning';
import SuccessIcon from 'material-ui-icons/CheckBox';
import Tooltip from 'material-ui/Tooltip';

import FilterCategory from '../FilterCategory/';
import EmptyTableImg from './emptyTableImg';
import AddTaskBtn from './Buttons/addTaskBtn';
import FilterCategoriesBtn from './Buttons/filterCategoriesBtn';
import ClearTasksBtn from './Buttons/clearTasksBtn';


export default class TasksTable extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    const { tasksList } = this.props;
    return (
      <Paper className="paper">
        <AddTaskBtn showTaskAddModal={this.props.showTaskAddModal} />
        <div className="table-wrapper">
          <Table className="table">
            <TableBody>
              {tasksList.map(task => {
                return (
                  task.get('isDone') === false ?
                   <TableRow key={task.get('id')}>
                    <TableCell className="table__iconcell">
                      <Tooltip id="tooltip-icon" title="Priority">
                        <IconButton>
                          <PriorityIcon className={`icon_${task.get('priority')}-priority`} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell className="table__maincell">{task.get('text')}</TableCell>
                    <TableCell className="table__iconcell">
                      <Tooltip id="tooltip-icon" title="Success">
                        <IconButton aria-label="Success">
                          <SuccessIcon onClick={() => this.props.doneTask(task.get('id'))} className="icon icon_success-icon" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell className="table__iconcell">
                      <Tooltip id="tooltip-icon" title="Edit">
                         <IconButton aria-label="Edit">
                          <EditIcon className="icon icon_edit-icon" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell className="table__iconcell">
                      <Tooltip id="tooltip-icon" title="Delete">
                         <IconButton aria-label="Delete">
                          <DeleteIcon onClick={() => this.props.deleteTask(task.get('id'))} className="icon icon_delete-icon" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                  :
                  <TableRow>
                    <TableCell className="table__iconcell">
                      <Tooltip id="tooltip-icon" title="Success">
                        <IconButton>
                          <SuccessIcon className="icon icon_success-icon" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell className="table__maincell"><p className="paragraph paragraph_success-text">{task.get('text')}</p></TableCell>
                    <TableCell className="table__iconcell">
                    </TableCell>
                    <TableCell className="table__iconcell">
                      <IconButton>
                        <PriorityIcon className={`icon_${task.get('priority')}-priority`} />
                      </IconButton>
                    </TableCell>
                    <TableCell className="table__iconcell">
                    </TableCell>
                  </TableRow>
                );
              })}
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
