import React from 'react';
import { TableCell, TableRow } from 'material-ui/Table';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import PriorityIcon from 'material-ui-icons/Warning';
import SuccessIcon from 'material-ui-icons/CheckBox';

export default function DoneTask(props) {
	const { task } = props;
  return (
    <TableRow>
      <TableCell className="table__iconcell">
        <Tooltip id="tooltip-icon" title="Success">
          <IconButton>
            <SuccessIcon className="icon icon_success-icon" />
          </IconButton>
        </Tooltip>
      </TableCell>
      <TableCell className="table__maincell">
        <p className="paragraph paragraph_success-text">{task.get('text')}</p>
      </TableCell>
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
}