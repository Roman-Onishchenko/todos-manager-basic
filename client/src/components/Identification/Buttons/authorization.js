import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'

export default function AuthorizationBtn(props) {
  let authBtn;
  if(props.currentPath === '/authorization') {
    authBtn = 
      <Button 
        disabled={!props.active}
        onClick={props.sendRegistrationData}
        variant="raised" 
        color="primary" 
        className="button"
      >
        Authorize
      </Button>
  } else {
    authBtn =
      <Link to='/authorization'>
        <Button 
          variant="raised" 
          color="default" 
          className="button button_white"
        >
          Authorize
        </Button>
      </Link>
  }

  return (
    authBtn
  );
}

AuthorizationBtn.propTypes = {
  sendRegistrationData: PropTypes.func,
  active: PropTypes.bool,
  currentPath: PropTypes.string,
};