import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

export default function Buttons(props) {
  const { classes } = props;
  return (
    <div className="modal-buttons">
      <Button 
        variant="raised" 
        color="default" 
        className="button button_grey"
        onClick={() => props.hideTaskModal()}
      >
        Cancel
      </Button>
      <Button 
        variant="raised" 
        color="primary" 
        disabled={!props.readyToSave}
        className="button"
        onClick={props.handleSaveTask}
      >
        Save
      </Button>
    </div>
  );
}
