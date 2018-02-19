import React from 'react';
import PropTypes from 'prop-types';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

export default class FilterCategory extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div className="radios-wrapper">
        <FormControl component="fieldset" required className="form-control">
          <FormLabel component="legend" className="form-label">Time Category</FormLabel>
          <RadioGroup
            aria-label="timeCategory"
            name="timeCategory"
            className="radio-group"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="Day" control={<Radio />} label="Day" />
            <FormControlLabel value="Week" control={<Radio />} label="Week" />
            <FormControlLabel value="Month" control={<Radio />} label="Month" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" required className="form-control">
          <FormLabel component="legend" className="form-label">Task Priority</FormLabel>
          <RadioGroup
            aria-label="taskPriority"
            name="taskPriority"
            className="radio-group"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="High" control={<Radio />} label="High" />
            <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="Low" control={<Radio />} label="Low" />
            <FormControlLabel value="All" control={<Radio />} label="All" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" required className="form-control">
          <FormLabel component="legend" className="form-label">Task is done?</FormLabel>
          <RadioGroup
            aria-label="taskIsDone"
            name="taskIsDone"
            className="radio-group"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="Done" control={<Radio />} label="Done" />
            <FormControlLabel value="Not done" control={<Radio />} label="Not done" />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}
