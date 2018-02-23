import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

export default function Buttons(props) {
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

Buttons.propTypes = {
  readyToSave: PropTypes.bool,
  handleSaveTask: PropTypes.func,
  hideTaskModal: PropTypes.func,
};