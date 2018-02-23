import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default function TaskInput(props) {
    return (
      <TextField
        onChange={props.handleChangeInput}
        id="full-width"
        label={props.label}
        InputLabelProps={{
          shrink: true,
        }}
        placeholder={props.taskText || 'Task text'}
        fullWidth
        multiline
        margin="normal"
      />
    );
}

TaskInput.propTypes = {
  taskText: PropTypes.string,
  label: PropTypes.string,
  handleChangeInput: PropTypes.func,
};