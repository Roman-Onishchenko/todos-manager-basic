import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import * as actions from '../../reduxBase/actions/';
import { Map } from 'immutable';

import TableRedirect from '../../components/Identification/redirect';
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

class Authorization extends React.Component {
  static propTypes = {
    userRegister: PropTypes.func,
  }

  state = {
    userEmail: '',
    userPass: '',
    redirect: false,
  };

  componentWillReceiveProps(nextProps) {
    if(!nextProps.usersReducer.get('userNotAuth')) {
      this.setState({ redirect: true })
    }
  }

  handleChangeInput = (event) => {
    if(event.target.value.length > 0) {
      this.setState({ [event.target.name]: event.target.value })
    } else {
      this.setState({ [event.target.name]: ''})
    }
  }

  sendAuthorizationData = () => {
    const { userEmail, userPass } = this.state;
    this.props.userAuthAttempt(new Map
      ({
        email: userEmail,
        pass: userPass,
      })
    )
  }

  render() {
    const { classes } = this.props;
    const userNotAuth = this.props.usersReducer.get('userNotAuth');
    const userId = this.props.usersReducer.get('user').get('id');
    const { userEmail, userPass } = this.state;
    const active = userEmail && userPass;
    const currentPath = this.props.match.path;
    let redirect;
    if(!!this.state.redirect) {
      redirect = <TableRedirect userId={userId} />
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
              Authorization
            </Typography>
            <Inputs 
              handleChangeInput={this.handleChangeInput} 
              currentPath={currentPath} 
              userNotAuth={userNotAuth} 
            />
            <div className="register-buttons">
              <RegistrationBtn />
              <AuthorizationBtn active={!!active} currentPath={currentPath} sendAuthorizationData={this.sendAuthorizationData} />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const AuthorizationWrapped = withStyles(styles)(Authorization);

export default connect(
  state => ({
     usersReducer: state.todoAppReducer
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(AuthorizationWrapped);