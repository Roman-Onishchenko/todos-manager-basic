import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
  },
  formControl: {
    margin: theme.spacing.unit * 2,
  },
  formLabel: {
    color: 'brown',
    textAlign: 'center',
  },
  group: {
    display: 'flex',
    flexFlow: 'row nowrap',
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Radios extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend" className={classes.formLabel}>Time Category</FormLabel>
          <RadioGroup
            aria-label="timeCategory"
            name="timeCategory"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="Day" control={<Radio />} label="Day" />
            <FormControlLabel value="Week" control={<Radio />} label="Week" />
            <FormControlLabel value="Month" control={<Radio />} label="Month" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend" className={classes.formLabel}>Task Priority</FormLabel>
          <RadioGroup
            aria-label="taskPriority"
            name="taskPriority"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="High" control={<Radio />} label="High" />
            <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="Low" control={<Radio />} label="Low" />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

Radios.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Radios);