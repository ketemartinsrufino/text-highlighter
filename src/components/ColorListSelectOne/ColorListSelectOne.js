import React, { Component } from 'react';
import ColorList from '../ColorList/ColorList';
import PropTypes from 'prop-types';

const ColorListSelectOne = ({selectedColor}) => {
  const selectColor = (color) => {
      this.props.onColorSelect(color);
  }
  return (
    <ColorList
      selectedColors={[selectedColor]}
      onClick={selectColor}
    />
  )
}

ColorListSelectOne.defaults = {
  selectedColor: ''
}

ColorListSelectOne.propTypes = {
  selectedColor: PropTypes.string,
  onColorSelect: PropTypes.func.isRequired
};

export default ColorListSelectOne;