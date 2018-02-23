import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

export default function ClearTasks(props) {
  return (
    <Button 
	    variant="raised" 
	    className="button button_red"
	    onClick={() => props.clearTasksList(props.taskDone)}
    >
      Clear Tasks
    </Button>
  );
}

ClearTasks.propTypes = {
  clearTasksList: PropTypes.func,
  taskDone: PropTypes.string,
};