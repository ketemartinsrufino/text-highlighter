import React from 'react';
import styled from 'styled-components';
import ColorItem from './ColorItem';
import PropTypes from 'prop-types';

const ColorContainerStyled = styled.div`
    display: flex;
`;

const ColorList = ({
  colors,
  selectedColors, 
  onClick 
}) => {
  // console.log('ColorList', {
  //   colors,
  //   selectedColors, 
  //   onClick 
  // });

  return (
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
}
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