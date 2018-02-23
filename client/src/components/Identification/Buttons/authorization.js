import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

export default function AuthorizationBtn(props) {
  return (
      <Button 
        variant="raised" 
        color="primary" 
        className="button"
        onClick={props.handleSaveTask}
      >
        Authorize
      </Button>
  );
}

AuthorizationBtn.propTypes = {

};