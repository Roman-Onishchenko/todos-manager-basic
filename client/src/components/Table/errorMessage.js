import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorMessage(props) {
  return (
    <p className="error-message">Error: <br/>{props.errorMessage}</p>
  );
}

ErrorMessage.propTypes = {
	errorMessage: PropTypes.string,
};