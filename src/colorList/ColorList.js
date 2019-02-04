import React, { Component } from 'react';
import styled from 'styled-components';

const ColorItem = styled.div`
    border: ${({isSelected}) => isSelected ? 2: 1}px black solid;
    height:30px;
    width: 50px;
    background-color: ${({color}) => color};

    :hover {
        cursor: pointer:
    }
`;

const ColorContainerStyled = styled.div`
    display: flex;
`;

class ColorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: '' 
        };
    }

    selectColor = (color) => {
        this.setState({selectedColor: color});
        this.props.onColorSelect(color);
    }

    isSelected = (colorInfo) => this.state.selectedColor === colorInfo;
    
    onClick = (color) => () => this.selectColor(color)

    render(){        
        return (
            <ColorContainerStyled>
                <ColorItem 
                    color="red" 
                    isSelected={this.isSelected("red")}
                    onClick={this.onClick("red")}
                />
                <ColorItem 
                    color="yellow" 
                    isSelected={this.isSelected("yellow")}
                    onClick={this.onClick("yellow")}
                />
                <ColorItem 
                    color="green" 
                    isSelected={this.isSelected("green")}
                    onClick={this.onClick("green")}
                />
            </ColorContainerStyled>
        )
    }
}

export default ColorList;