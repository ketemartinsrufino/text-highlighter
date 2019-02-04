import React from 'react';
import PropTypes from 'prop-types';
import { ColorItemStyled } from './styles';

const ColorItem = ({ color, isSelected, onClick }) => (
  <ColorItemStyled
    color={color}
    isSelected={isSelected}
    onClick={() => onClick(color)}
  />
)

ColorItem.defaultProps = {
  isSelected: false
}

ColorItem.propTypes = {
  isSelected: PropTypes.bool,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ColorItem;