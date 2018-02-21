import React from 'react';
import Button from 'material-ui/Button';

export default function AddTaskBtn(props) {
  return (
    <Button 
	    variant="raised" 
	    color="primary" 
	    className="button" 
	    onClick={() => props.showTaskAddModal()}
    >
      Add Task
    </Button>
  );
}
