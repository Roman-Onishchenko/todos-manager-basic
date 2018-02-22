import React from 'react';
import Button from 'material-ui/Button';

export default function ClearTasks(props) {
  return (
    <Button 
	    variant="raised" 
	    className="button button_delete-tasks"
	    onClick={() => props.clearTasksList()}
    >
      Clear Tasks
    </Button>
  );
}
