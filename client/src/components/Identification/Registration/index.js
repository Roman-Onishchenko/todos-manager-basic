import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import { Map } from 'immutable';

import Inputs from '../inputs';
import RegistrationBtn from '../Buttons/registration';
import AuthorizationBtn from '../Buttons/authorization';

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
    width: theme.spacing.unit * 55,
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

class Registration extends React.Component {
  // static propTypes = {
  //   open: PropTypes.bool,
  //   addTask: PropTypes.func,
  //   hideTaskModal: PropTypes.func,
  //   classes: PropTypes.object.isRequired,
  // }

  // state = {
  //   inputValue: '',
  //   timeValue: 'day',
  //   priorityValue: '2',
  // };

  // handleChangeInput = (event) => {
  //   if(event.target.value.length > 0) {
  //     this.setState({ inputValue: event.target.value })
  //   } else {
  //     this.setState({ inputValue: '' })
  //   }
  // }

  // handleChangeRadio = (event) => {
  //   this.setState({ [event.target.name]: event.target.value })
  // }

  // handleSaveTask = () => {
  //   this.props.addTask(
  //     new Map({
  //       id: Date.now(),
  //       text: this.state.inputValue,
  //       isDone: 0,
  //       priority: this.state.priorityValue,
  //       category:this.state.timeValue,
  //   }));
  //   this.props.hideTaskModal();
  // }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="add-task"
          aria-describedby="add-task"
          open
        > 
          <div style={getModalStyle()} className={classes.paper}>
            <Typography className={classes.header} variant="title" id="modal-title">
             	Registration
            </Typography>
            <Inputs />
            <div className="register-buttons">
            	<RegistrationBtn />
            	<AuthorizationBtn />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const RegistrationWrapped = withStyles(styles)(Registration);

export default RegistrationWrapped;