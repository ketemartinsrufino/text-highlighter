import React, { Component } from 'react';
import { HighlighterContext } from '../../context/HighlighterContext';
import { ContainerStyled } from '../styles';
import ColorListSelectOne from '../../components/ColorListSelectOne/ColorListSelectOne';
import TextArea from '../../components/TextArea/TextArea';
import { TextContainerStyled } from './styles';
import EditButton from './components/EditButton';
import { handleMouseUp } from './HighlighterUtils';

class TextHighlighter extends Component {
  constructor(props) {
    super(props);
  }

  onColorSelect = (color) => {
    this.context.updateContext('colorToHighlight', color);
  }

  onSelectText = () => {
    const color = this.context.colorToHighlight;
    if( !color ) {
      alert("Select a color, please");
      return;
    }
    this.context.addHighlightedText(handleMouseUp(color));
  }

  updateText = (event) => {
    this.context.updateContext('originalText', event.target.value);
  }

  enableEditionMode = () => {
    this.context.toogleEditionMode(true);
    this.context.clearHighlightedTexts();
  }
  onBlur = () => {
    this.context.toogleEditionMode(false);
  }

  getContent = () => {
    const text = this.context.originalText;
    const isEditionMode = this.context.isEditionMode
    if( isEditionMode ) {
      return (
        <TextArea  
          value={text} 
          onChange={this.updateText}
          onBlur={this.onBlur}
        />
      )
    } else {
      return (
        <TextContainerStyled onMouseUp={this.onSelectText}>
          {text}   
        </TextContainerStyled>
      )
    }
  }

  render(){
    return (
      <ContainerStyled>
        <ColorListSelectOne 
          selectedColor={this.context.colorToHighlight}
          onColorSelect={this.onColorSelect}/>
        
        {this.getContent()}
        
        <EditButton 
          isEnabled={!this.context.isEditionMode}
          onClick={this.enableEditionMode}
        />
      </ContainerStyled>
    )
  }
}

TextHighlighter.contextType = HighlighterContext;

export default TextHighlighter;