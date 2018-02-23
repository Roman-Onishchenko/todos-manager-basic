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
            <SuccessIcon onClick={() => props.doneTask(task.get('id'))} className="icon icon_success-icon" />
          </IconButton>
        </Tooltip>
      </TableCell>
      <TableCell className="table__iconcell">
        <Tooltip id="tooltip-icon" title="Edit">
           <IconButton aria-label="Edit">
            <EditIcon onClick={() => props.showTaskEditModal(task.get('id'))} className="icon icon_edit-icon" />
          </IconButton>
        </Tooltip>
      </TableCell>
      <TableCell className="table__iconcell">
        <Tooltip id="tooltip-icon" title="Delete">
           <IconButton aria-label="Delete">
            <DeleteIcon onClick={() => props.deleteTask(task.get('id'))} className="icon icon_delete-icon" />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}

NotDoneTask.propTypes = {
  task: PropTypes.object,
  doneTask: PropTypes.func,
  showTaskEditModal: PropTypes.func,
  deleteTask: PropTypes.func,
};