import { useState } from 'react';
import styled from 'styled-components';

const ColorItemStyled = styled.div`
    border: ${({isSelected}) => isSelected ? 2: 1}px black solid;
    height:30px;
    width: 50px;
    background-color: ${({color}) => color};

    :hover {
        cursor: pointer:
    }
`;

const ColorItem = ({color}) => {

    return <ColorItemStyled 
            color="red" 
            isSelected={this.isSelected("red")}
            onClick={this.getOnClick("red")}
        />
}