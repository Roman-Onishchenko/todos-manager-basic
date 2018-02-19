import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default function EditTaskInput(props) {
  const { classes } = props;
    return (
      <TextField
        id="full-width"
        label="Label"
        InputLabelProps={{
          shrink: true,
        }}
        placeholder="Module build failed"
        fullWidth
        multiline
        margin="normal"
      />
    );
}
