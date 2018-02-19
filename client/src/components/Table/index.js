import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/DeleteForever';
import EditIcon from 'material-ui-icons/Dvr';
import IconButton from 'material-ui/IconButton';
import PriorityIcon from 'material-ui-icons/Warning';
import SuccessIcon from 'material-ui-icons/CheckBox';
import Tooltip from 'material-ui/Tooltip';

import FilterCategory from '../FilterCategory/';
import AddModallWrapped from '../Modals/AddModal/';
import EmptyTableImg from './emptyTableImg';


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
        <AddModallWrapped />
        {/*<Button variant="raised" color="primary" className="button">
          Add Task
        </Button>
        <div className="table-wrapper">
          <Table className="table">
            <TableBody>
              <TableRow>
                <TableCell className="table__iconcell">
                  <Tooltip id="tooltip-icon" title="Success">
                    <IconButton>
                      <SuccessIcon className="icon icon_success-icon" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell className="table__maincell"><p className="paragraph paragraph_success-text">'асто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века'</p></TableCell>
                <TableCell className="table__iconcell">
                </TableCell>
                <TableCell className="table__iconcell">
                  <IconButton>
                    <PriorityIcon className="icon icon_high-priority" />
                  </IconButton>
                </TableCell>
                <TableCell className="table__iconcell">
                </TableCell>
              </TableRow>
              {tasksList.map(task => {
                return (
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
                          <SuccessIcon className="icon icon_success-icon" />
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
                          <DeleteIcon className="icon icon_delete-icon" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <Button variant="raised" className="button button_grey">
          Open Filters
        </Button>
        <FilterCategory />
        <Button variant="raised" className="button button_delete-tasks">
          Clear Tasks
        </Button>*/}
      </Paper>
    );
  }
}

TasksTable.propTypes = {
  tasksList: PropTypes.object,
};
