import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function Inputs(props) {
  const { classes, currentPath } = props;
  let inputs;
  if(currentPath === '/authorization') {
    inputs = 
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          onChange={props.handleChangeInput}
          name="userEmail"
          required
          label="Email"
          placeholder="mail@.com"
          className={classes.textField}
          margin="normal"
          error={false}
        />
        <TextField
          onChange={props.handleChangeInput}
          name="userPass"
          required
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          error={false}
        />
      </form>
  } else {
    inputs =
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          onChange={props.handleChangeInput}
          name="userName"
          required
          label="Name"
          placeholder="Name"
          className={classes.textField}
          margin="normal"
          error={false}
        />
        <TextField
          onChange={props.handleChangeInput}
          name="userLogin"
          required
          label="Login"
          placeholder="Login"
          className={classes.textField}
          margin="normal"
          error={false}
        />
        <TextField
          onChange={props.handleChangeInput}
          name="userEmail"
          required
          label="Email"
          placeholder="mail@.com"
          className={classes.textField}
          margin="normal"
          error={false}
        />
        <TextField
          onChange={props.handleChangeInput}
          name="userPass"
          required
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          error={false}
        />
      </form>
  }

  return (
    inputs
  );
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);