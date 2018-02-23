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
  menu: {
    width: 200,
  },
});

class Inputs extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

 // <TextField
 //          error
 //          id="error"
 //          label="Error"
 //          defaultValue="Hello World"
 //          className={classes.textField}
 //          margin="normal"
 //        />

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="required"
          label="Required"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          required
          id="required"
          label="Required"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          required
          id="required"
          label="Required"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />

      </form>
    );
  }
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);