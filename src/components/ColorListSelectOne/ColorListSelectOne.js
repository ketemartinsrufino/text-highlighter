import React from 'react';
import ColorList from '../ColorList/ColorList';
import PropTypes from 'prop-types';

const ColorListSelectOne = ({selectedColor, onColorSelect}) => (
  <ColorList
    selectedColors={[selectedColor]}
    onClick={onColorSelect}
  />
);

ColorListSelectOne.defaults = {
  selectedColor: ''
}

ColorListSelectOne.propTypes = {
  selectedColor: PropTypes.string,
  onColorSelect: PropTypes.func.isRequired
};

export default ColorListSelectOne;