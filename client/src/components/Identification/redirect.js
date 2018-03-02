import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

export default function TableRedirect(props) {
  return (
    <Redirect to={`/table/${props.userId}`} />
  );
}

TableRedirect.propTypes = {
  userId: PropTypes.string,
};