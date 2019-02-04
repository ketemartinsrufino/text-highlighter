import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HighlighterContext } from '../../context/HighlighterContext';
import { ContainerStyled } from '../styles';
import ColorListSelectOne from '../../components/ColorListSelectOne/ColorListSelectOne';

class TextHighlighter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedColor: '',
    };
  }
  
  onColorSelect = (color) => {
    this.setState({selectedColor: color})
  }

  onSelectText = () => {
    const color = this.state.selectedColor;
    if( !color ) {
      alert("Select a color, please");
      return;
    }
    const highlightRange = (selection) => {
      const range = selection.getRangeAt(0);
      const text = selection.toString();
      if(!text) {
        return;
      }
      var newNode = document.createElement("span");
      newNode.setAttribute(
          "style",
          `background-color: ${color}; display: inline;` 
      );
      range.surroundContents(newNode);
      this.context.updateHighlightedTexts(text, color);
    }

    const userSelection = window.getSelection();
    highlightRange(userSelection);
  }

  render(){
    return (
      <ContainerStyled>
        <ColorListSelectOne 
          onColorSelect={this.onColorSelect}
        />
        <div onMouseUp={this.onSelectText}>
          {this.props.children}
        </div>
      </ContainerStyled>
    )
  }
}

TextHighlighter.propTypes = {
  children: PropTypes.element.isRequired
};

TextHighlighter.contextType = HighlighterContext;

export default TextHighlighter;