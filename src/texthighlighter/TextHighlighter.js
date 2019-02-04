import React, { Component } from 'react';
import styled from 'styled-components';
import ColorList from '../colorList/ColorList';

const TextHighlighterStyled = styled.div`
    border: 1px red solid;
`;

class TextHighlighter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: '',
            selectedTexts: {}
        };
    }
    
    onColorSelect = (color) => {
        this.setState({selectedColor: color})
    }

    onSelectText = () => {
        const color = this.state.selectedColor;
        if(!color) {
            alert("Select a color, please");
            return;
        }
        const highlightRange = (selection) => {
            const range = selection.getRangeAt(0);
            const text = selection.toString();
            var newNode = document.createElement("span");
            newNode.setAttribute(
               "style",
               `background-color: ${color}; display: inline;` 
            );
            range.surroundContents(newNode);
            const selectedByColor = this.state.selectedTexts[color] || [];

            selectedByColor.push(text);
            this.setState((state) => {
                return {
                    ...state,
                    selectedTexts: {
                        ...state.selectedTexts, 
                        [color]: selectedByColor
                    }
                }
            });
        }

        const userSelection = window.getSelection();
        highlightRange(userSelection);
    }

    render(){
        return (
            <TextHighlighterStyled>
                <ColorList onColorSelect={this.onColorSelect}/>
                <div onMouseUp={this.onSelectText}>{this.props.children}</div>
            </TextHighlighterStyled>
        )
    }
}

export default TextHighlighter;