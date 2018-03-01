import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import * as actions from '../../reduxBase/actions/';
import { Map } from 'immutable';
import { Redirect } from 'react-router';

import Inputs from '../../components/Identification/inputs';
import RegistrationBtn from '../../components/Identification/Buttons/registration';
import AuthorizationBtn from '../../components/Identification/Buttons/authorization';

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
  static propTypes = {
    userRegister: PropTypes.func,
    usersReducer: PropTypes.object,
  }

  state = {
    userName: '',
    userLogin: '',
    userEmail: '',
    userPass: '',
    emailError: false,
    redirect: false
  };

  componentWillReceiveProps(nextProps) {
    if(!nextProps.usersReducer.get('userExist')) {
      this.setState({ redirect: true })
    }
  }

  handleChangeInput = (event) => {
    if(event.target.name === 'userEmail') this.setState({emailError: false});
    if(event.target.value.length > 0) {
      this.setState({ [event.target.name]: event.target.value })
    } else {
      this.setState({ [event.target.name]: ''})
    }
  }

  sendRegistrationData = () => {
    const { userName, userLogin, userEmail, userPass } = this.state;
    const filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if(userEmail.search(filter) != -1) {
      this.props.userRegister(new Map
      ({
        name: userName,
        login: userLogin,
        email: userEmail,
        pass: userPass,
      }))
    } else {
        this.setState({emailError: true})
      }
  }

  render() {
    const { classes } = this.props;
    const userExist = this.props.usersReducer.get('userExist');
    const userId = this.props.usersReducer.get('user').get('id');
    const { userName, userLogin, userEmail, userPass } = this.state;
    const active = userName && userLogin && userEmail && userPass;
    const currentPath = this.props.match.path;
    let redirect;
    if(!!this.state.redirect) {
      redirect = <Redirect to={`/table/${userId}`} />
    } else {
      redirect = '';
    }
    return (
      <div>
        {redirect}
        <Modal
          aria-labelledby="registration"
          aria-describedby="registration"
          open
        > 
          <div style={getModalStyle()} className={classes.paper}>
            <Typography className={classes.header} variant="title" id="modal-title">
             	Registration
            </Typography>
            <Inputs 
              handleChangeInput={this.handleChangeInput} 
              emailError={this.state.emailError}
              userExist={userExist} 
            />
            <div className="register-buttons">
            	<AuthorizationBtn />
            	<RegistrationBtn active={!!active} currentPath={currentPath} sendRegistrationData={this.sendRegistrationData} />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const RegistrationWrapped = withStyles(styles)(Registration);

export default connect(
  state => ({
     usersReducer: state.todoAppReducer
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(RegistrationWrapped);