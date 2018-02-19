import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

export default class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    return (
      <div className="modal-buttons">
        <Button variant="raised" color="default" className="button button_grey">
          Cancel
        </Button>
        <Button variant="raised" color="primary" className="button">
          Save
        </Button>
      </div>
    );
  }
}
