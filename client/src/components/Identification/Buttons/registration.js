import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

export default function RegistrationBtn(props) {
  return (
      <Button 
        variant="raised" 
        color="default" 
        className="button button_grey"
      >
        Register
      </Button>
  );
}

RegistrationBtn.propTypes = {

};