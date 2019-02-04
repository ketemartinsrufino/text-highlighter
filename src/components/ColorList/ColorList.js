import React from 'react';
import PropTypes from 'prop-types';
import { ColorContainerStyled } from './styles';
import ColorItem from '../ColorItem/ColorItem';

const ColorList = ({ colors, selectedColors, onClick }) => (
  <ColorContainerStyled>
    {colors.map( color => (
      <ColorItem
        key={`color-${color}`}
        color={color}
        isSelected={selectedColors.includes(color)}
        onClick={onClick}
      />
    ))}
  </ColorContainerStyled>
)
ColorList.defaultProps = {
  colors: ['#ef5350', '#ffeb3b', '#8eda8e'], 
  selectedColors: []
}

ColorList.propTypes = {
  colors: PropTypes.array,
  selectedColors: PropTypes.array,
  onClick: PropTypes.func.isRequired
};

export default ColorList;