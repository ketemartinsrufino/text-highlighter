import React, { Component } from 'react';
import { HighlighterContext } from '../../context/HighlighterContext';
import { ContainerStyled } from '../styles';
import ColorListSelectOne from '../../components/ColorListSelectOne/ColorListSelectOne';
import TextArea from '../../components/TextArea/TextArea';
import { TextContainerStyled } from './styles';
import EditButton from './components/EditButton';
import { COLORS } from '../../components/ColorItem/Colors';

class TextHighlighter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',
      isEditionMode: true,
      selectedColor: COLORS.yellow,
    };
  }

  onColorSelect = (color) => {
    this.setState({selectedColor: color})
  }

  onSelectText = (e) => {
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
      this.context.addHighlightedText(text, color);
    }

    const userSelection = window.getSelection();
    highlightRange(userSelection);
  }

  updateText = (event) => {
    this.setState({text: event.target.value});
  }

  toogleEditionMode = isEditionMode => {
    this.setState({isEditionMode: isEditionMode});
  }

  enableEditionMode = (e) => {
    this.toogleEditionMode(true);
    this.context.clearHighlightedTexts();
  }

  getContent = () => {
    if( this.state.isEditionMode ) {
      return (
        <TextArea  
          value={this.state.text} 
          onChange={this.updateText}
          onBlur={() => this.toogleEditionMode(false)}
        />
      )
    } else {
      return (
        <TextContainerStyled onMouseUp={this.onSelectText}>
          {this.state.text}   
        </TextContainerStyled>
      )
    }
  }

  render(){
    return (
      <ContainerStyled>
        <ColorListSelectOne 
          selectedColor={this.state.selectedColor}
          onColorSelect={this.onColorSelect}/>
        
        {this.getContent()}
        
        <EditButton 
          isEnabled={!this.state.isEditionMode}
          onClick={this.enableEditionMode}
        />
      </ContainerStyled>
    )
  }
}

TextHighlighter.contextType = HighlighterContext;

export default TextHighlighter;