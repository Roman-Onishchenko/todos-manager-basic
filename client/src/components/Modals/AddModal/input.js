import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

function EditTaskInput(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
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
    </div>
  );
}

EditTaskInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditTaskInput);