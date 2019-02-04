import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ColorItemStyled = styled.div`
    background-color: ${({color}) => color};
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin: 0 5px;
    border: 1px #a97c7c solid;
  
    ${({ isSelected }) => isSelected && `
      border: 1px black solid
    `}

    :hover {
      cursor: pointer:
    }
`;

const ColorItem = ({color, isSelected, onClick}) => (
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
};

export default ColorItem;