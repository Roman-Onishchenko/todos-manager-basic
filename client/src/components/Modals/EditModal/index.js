import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import { Map } from 'immutable';

import TaskInput from '../input';
import Buttons from '../buttons';
import Radios from '../radios';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  header: {
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: '1.45em',
  }
});

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: props.activeTask.get('text'),
      timeValue: props.activeTask.get('category'),
      priorityValue: props.activeTask.get('priority'),
    };

    this.handleChangeInput = (event) => {
      if(event.target.value.length > 0) {
        this.setState({ inputValue: event.target.value })
      } else {
        this.setState({ inputValue: '' })
      }
    }

    this.handleChangeRadio = (event) => {
      this.setState({ [event.target.name]: event.target.value })
    }

    this.handleSaveTask = () => {
      const updatedTask = this.props.activeTask.merge(
        new Map({
          text: this.state.taskText,
          priority: this.state.priorityValue,
          category:this.state.timeValue,
        })
      );
      const taskId = this.props.activeTask.get('id');
      this.props.updateTask(updatedTask, taskId);
      this.props.hideTaskModal();
    }
  }
  
  render() {
    const { classes, activeTask } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="edit-task"
          aria-describedby="edit-task"
          open={this.props.open}
        > 
          <div style={getModalStyle()} className={classes.paper}>
            <Typography className={classes.header} variant="title" id="modal-title">
              Edit Task
            </Typography>
            <TaskInput taskText={this.state.taskText} handleChangeInput={this.handleChangeInput} />
            <Radios
              handleChangeRadio={this.handleChangeRadio}
              timeValue={this.state.timeValue}
              priorityValue={this.state.priorityValue} 
            />
            <Buttons 
              handleSaveTask={this.handleSaveTask}  
              hideTaskModal={this.props.hideTaskModal} 
              readyToSave 
            />
          </div>
        </Modal>
      </div>
    );
  }
}

EditModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const EditModallWrapped = withStyles(styles)(EditModal);

export default EditModallWrapped;