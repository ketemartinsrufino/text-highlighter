import React, { Component } from 'react';
import { HighlighterContext } from '../../context/HighlighterContext';
import { ContainerStyled } from '../styles';
import ColorListSelectOne from '../../components/ColorListSelectOne/ColorListSelectOne';
import TextArea from '../../components/TextArea/TextArea';
import { TextContainerStyled } from './styles';
import EditButton from './components/EditButton';
import { handleMouseUp } from './HighlighterUtils';

class TextHighlighter extends Component {

  getDataSource = () => this.context;

  onColorSelect = color => (
    this.getDataSource().updateContext('colorToHighlight', color)
  )

  onSelectText = () => {
    const color = this.getDataSource().colorToHighlight;
    if( !color ) {
      alert("Select a color, please");
      return;
    }
    this.getDataSource().addHighlightedText(handleMouseUp(color));
  }

  updateText = event => (
    this.getDataSource().updateContext('originalText', event.target.value)
  )

  enableEditionMode = () => {
    this.getDataSource().toogleEditionMode(true);
    this.getDataSource().clearHighlightedTexts();
  }

  onBlur = () => (
    this.getDataSource().toogleEditionMode(false)
  )
    
  getContent = () => {
    const text = this.getDataSource().originalText;
    const isEditionMode = this.getDataSource().isEditionMode
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
          selectedColor={this.getDataSource().colorToHighlight}
          onColorSelect={this.onColorSelect}/>
        
        {this.getContent()}
        
        <EditButton 
          isEnabled={!this.getDataSource().isEditionMode}
          onClick={this.enableEditionMode}
        />
      </ContainerStyled>
    )
  }
}

TextHighlighter.contextType = HighlighterContext;

export default TextHighlighter;