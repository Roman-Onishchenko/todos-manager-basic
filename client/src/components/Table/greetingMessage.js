import React from 'react';
import PropTypes from 'prop-types';

export default function GreetingMessage(props) {
  return (
    <p className="greeting-message">Welcome back, <span className="auth-login">{props.userLogin}</span></p>
  );
}

GreetingMessage.propTypes = {
	userLogin: PropTypes.string,
};