import React from 'react';
import PropTypes from 'prop-types';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import Badge from 'material-ui/Badge';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
    top: '-6px'
  },
});

function FilterCategory(props) {
  const { classes } = props;
  let 
    labelDay = 'Day', 
    labelWeek = 'Week', 
    labelMonth = 'Month';

  if(Number(props.taskDone) === 0) {
    const dayTasksNum = props.tasksList.filter(
      task => task.get('category') === 'day').filter(
      task => task.get('isDone') === 0).size;
    labelDay = 
      <span>
        Day 
        <Badge 
          className={classes.margin} 
          badgeContent={`${dayTasksNum}`} 
          color="primary"
        >
        </Badge>
      </span>;

    const weekTasksNum = props.tasksList.filter(
      task => task.get('category') === 'week').filter(
      task => task.get('isDone') === 0).size;
    labelWeek = 
      <span>
        Week 
        <Badge 
          className={classes.margin} 
          badgeContent={`${weekTasksNum}`} 
          color="primary"
        >
        </Badge>
      </span>;
    
    const monthTasksNum = props.tasksList.filter(
      task => task.get('category') === 'month').filter(
      task => task.get('isDone') === 0).size;
    labelMonth = 
      <span>
        Month 
        <Badge 
          className={classes.margin} 
          badgeContent={`${monthTasksNum}`} 
          color="primary"
        >
        </Badge>
      </span>;
  }
  
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
          <FormControlLabel 
            value="day" 
            control={<Radio />} 
            label={labelDay}
          />
          <FormControlLabel 
            value="week" 
            control={<Radio />} 
            label={labelWeek} 
          />
          <FormControlLabel 
            value="month" 
            control={<Radio />} 
            label={labelMonth} 
          />
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterCategory);