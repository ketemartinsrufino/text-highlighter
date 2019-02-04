import React, { Component } from 'react';
import styled from 'styled-components';

const ColorContainerStyled = styled.div`
    display: flex;
`;

class ColorListFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColors: []
        };
    }

    selectColor = (color) => {
        this.setState((state) => ({
                selectedColors: [...state.selectedColors, color]
        }));
        this.props.onColorSelect(color);
    }

    isSelected = (colorInfo) => this.state.selectedColor === colorInfo;
    
    removeColor = (index) => {
        this.setState((state) => {
            return {
                selectedColors: state.selectedColors.remove(index)
            }
        });
    };

    getOnClick = (color) => () => {
        const index = this.state.selectedColors.indexOf(color);
        if(index !== -1) {
            this.removeColor(index);
        } else {
            this.selectColor(color)
        }
    }

    render(){        
        return (
            <ColorContainerStyled>
                <ColorItem 
                    color="red" 
                    isSelected={this.isSelected("red")}
                    onClick={this.getOnClick("red")}
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

export default ColorListFilter;