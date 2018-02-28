import React from 'react';
import PropTypes from 'prop-types';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

export default function FilterCategory(props) {
  const dayTasksNum = props.tasksList.filter(task => task.get('category') === 'day').size;
  const weekTasksNum = props.tasksList.filter(task => task.get('category') === 'week').size;
  const monthTasksNum = props.tasksList.filter(task => task.get('category') === 'month').size;
  return (
    <div className="radios-wrapper">
      <FormControl component="fieldset" required className="form-control">
        <FormLabel component="legend" className="form-label">Time Category</FormLabel>
        <RadioGroup
          aria-label="category"
          name="category"
          className="radio-group"
          value={props.category}
          onChange={props.changeFilterCriteria}
        >
          <FormControlLabel value="day" control={<Radio />} label={`Day (${dayTasksNum})`} />
          <FormControlLabel value="week" control={<Radio />} label={`Week (${weekTasksNum})`} />
          <FormControlLabel value="month" control={<Radio />} label={`Month (${monthTasksNum})`} />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" required className="form-control">
        <FormLabel component="legend" className="form-label">Task Priority</FormLabel>
        <RadioGroup
          aria-label="priority"
          name="priority"
          className="radio-group"
          value={props.priority}
          onChange={props.changeFilterCriteria}
        >
          <FormControlLabel value="1" control={<Radio />} label="High" />
          <FormControlLabel value="2" control={<Radio />} label="Middle" />
          <FormControlLabel value="3" control={<Radio />} label="Low" />
          <FormControlLabel value="all" control={<Radio />} label="All" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" required className="form-control">
        <FormLabel component="legend" className="form-label">Task is done?</FormLabel>
        <RadioGroup
          aria-label="taskDone"
          name="taskDone"
          className="radio-group"
          value={props.taskDone.toString()}
          onChange={props.changeFilterCriteria}
        >
          <FormControlLabel value="1" control={<Radio />} label="Done" />
          <FormControlLabel value="0" control={<Radio />} label="Not done" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

FilterCategory.propTypes = {
  category: PropTypes.string,
  priority: PropTypes.string,
  tasksList: PropTypes.object,
  taskDone: PropTypes.string,
  changeFilterCriteria: PropTypes.func,
};