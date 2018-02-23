import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default function GreetingMessage(props) {
    return (
      <p className="greeting-message">Welcome back, <span className="auth-login">Login</span></p>
    );
}

GreetingMessage.propTypes = {

};