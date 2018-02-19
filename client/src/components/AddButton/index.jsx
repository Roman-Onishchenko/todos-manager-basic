import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import IconButton from 'material-ui/IconButton';
import WarningIcon from 'material-ui-icons/Warning';
import CheckBoxIcon from 'material-ui-icons/CheckBox';
import WatchLaterIcon from 'material-ui-icons/WatchLater';
import Tooltip from 'material-ui/Tooltip';

function IconLabelButtons(props) {
  return (
    <div>         
      
       <IconButton aria-label="Warning">
      <WarningIcon />
      </IconButton>
      <IconButton aria-label="TimeToDo">
      <WatchLaterIcon />
      </IconButton>
    </div>
  );
}

export default IconLabelButtons;