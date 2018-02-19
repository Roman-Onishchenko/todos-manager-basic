import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';


const styles = theme => ({
  root: {
   display: 'flex',
   justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#607D8B',
    color: 'white',
    padding: '0 9px',
    fontSize: '.86em',
    marginRight: '25px',
  },
});

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button variant="raised" id="cancelButton" color="default" className={classes.cancelButton}>
          Cancel
        </Button>
        <Button variant="raised" color="primary">
          Save
        </Button>
      </div>
    );
  }
}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Buttons);