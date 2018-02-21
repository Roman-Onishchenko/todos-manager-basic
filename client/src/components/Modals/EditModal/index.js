import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import EditTaskInput from '../input';
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
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="add-task"
          aria-describedby="add-task"
          open={false}
        > 
          <Typography className={classes.header} variant="title" id="modal-title">
            Edit Task
          </Typography>
          <div style={getModalStyle()} className={classes.paper}>
            <EditTaskInput />
            <Radios />
            <Buttons hideTaskModal={this.props.hideTaskModal} />
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