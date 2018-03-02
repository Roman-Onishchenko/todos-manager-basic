import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

export default function FilterCategoriesBtn(props) {
  return (
    <Button 
    	variant="raised" 
    	className="button button_grey button_grey_margin-right" 
    	onClick={props.changeFiltersVisibility}
    >
      {props.filtersOpened ? "Close Filters" : "Open Filters"}
    </Button>
  );
}

FilterCategoriesBtn.propTypes = {
  changeFiltersVisibility: PropTypes.func,
  filtersOpened: PropTypes.bool,
};