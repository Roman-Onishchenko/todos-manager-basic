import React from 'react';
import PropTypes from 'prop-types';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

export default function Radios(props) {
  return (
    <div className="radios-wrapper">
      <FormControl component="fieldset" required className="form-control">
        <FormLabel component="legend" className="form-label">Time Category</FormLabel>
        <RadioGroup
          aria-label="timeCategory"
          name="timeValue"
          className="radio-group"
          value={props.timeValue}
          onChange={props.handleChangeRadio}
        >
          <FormControlLabel value="day" control={<Radio />} label="Day" />
          <FormControlLabel value="week" control={<Radio />} label="Week" />
          <FormControlLabel value="month" control={<Radio />} label="Month" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" required className="form-control">
        <FormLabel component="legend" className="form-label">Task Priority</FormLabel>
        <RadioGroup
          aria-label="taskPriority"
          name="priorityValue"
          className="radio-group"
          value={ props.priorityValue}
          onChange={props.handleChangeRadio}
        >
          <FormControlLabel value="high" control={<Radio />} label="High" />
          <FormControlLabel value="middle" control={<Radio />} label="Middle" />
          <FormControlLabel value="low" control={<Radio />} label="Low" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}