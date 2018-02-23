import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'

export default function RegistrationBtn(props) {
	let regBtn;
	if(props.currentPath === '/registration') {
		regBtn = 
			<Button 
      	disabled={!props.active}
      	onClick={props.sendRegistrationData}
        variant="raised" 
        color="primary" 
        className="button"
      >
        Register
      </Button>
	} else {
		regBtn =
			<Link to='/registration'>
	      <Button 
	        variant="raised" 
	        color="default" 
	        className="button button_white"
	      >
	        Register
	      </Button>
      </Link>
	}

  return (
    regBtn
  );
}

RegistrationBtn.propTypes = {
	sendRegistrationData: PropTypes.func,
	active: PropTypes.bool,
	currentPath: PropTypes.string,
};