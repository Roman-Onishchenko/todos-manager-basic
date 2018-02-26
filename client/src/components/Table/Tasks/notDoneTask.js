import React from 'react';
import { TableCell, TableRow } from 'material-ui/Table';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import PriorityIcon from 'material-ui-icons/Warning';
import DeleteIcon from 'material-ui-icons/DeleteForever';
import EditIcon from 'material-ui-icons/Dvr';
import SuccessIcon from 'material-ui-icons/CheckBox';
import PropTypes from 'prop-types';

export default function NotDoneTask(props) {
	const { task } = props;
  return (
    <TableRow>
      <div className="table-row">
        <TableCell className="table__iconcell a">
          <Tooltip id="tooltip-icon" title="Priority">
            <IconButton>
              <PriorityIcon className={`icon_${task.get('priority')}-priority`} />
            </IconButton>
          </Tooltip>
        </TableCell>
        <TableCell className="table__maincell table-maincell-not-done"><span>{task.get('text')}</span></TableCell>
        <TableCell className="table__iconcell success-icon b">
          <Tooltip id="tooltip-icon" title="Success">
            <IconButton aria-label="Success">
              <SuccessIcon onClick={() => props.doneTask(task.get('id'))} className="icon icon_success-icon" />
            </IconButton>
          </Tooltip>
        </TableCell>
        <TableCell className="table__iconcell c">
          <Tooltip id="tooltip-icon" title="Edit">
             <IconButton aria-label="Edit">
              <EditIcon onClick={() => props.showTaskEditModal(task.get('id'))} className="icon icon_edit-icon" />
            </IconButton>
          </Tooltip>
        </TableCell>
        <TableCell className="table__iconcell d">
          <Tooltip id="tooltip-icon" title="Delete">
             <IconButton aria-label="Delete">
              <DeleteIcon onClick={() => props.deleteTask(task.get('id'))} className="icon icon_delete-icon" />
            </IconButton>
          </Tooltip>
        </TableCell>
      </div>
    </TableRow>
  );
}

NotDoneTask.propTypes = {
  task: PropTypes.object,
  doneTask: PropTypes.func,
  showTaskEditModal: PropTypes.func,
  deleteTask: PropTypes.func,
};