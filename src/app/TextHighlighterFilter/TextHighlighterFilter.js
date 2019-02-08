import React, { Component } from 'react';
import { HighlighterContext } from '../../context/HighlighterContext';
import ColorListSelectMany from '../../components/ColorListSelectMany/ColorListSelectMany';
import { ContainerStyled } from '../styles';
import { TextListStyled, StyledSpan } from './styles';
import { getTextsByColors } from './FilterUtils';

class TextHighlighterFilter extends Component {
  getDataSource = () => this.context;

  setSelectedColors = (colors) => (
    this.getDataSource().updateContext('filterColors', colors)
  )

  getSelectedColors = () => this.getDataSource().filterColors

  getTexts = () => {
    const texts = this.getDataSource().highlightedTexts;
    return getTextsByColors(texts, this.getSelectedColors());
  }

  render(){
    return (
      <ContainerStyled>
        <ColorListSelectMany 
          setSelectedColors={this.setSelectedColors}
        />
        <TextListStyled>
          {this.getTexts()}
        </TextListStyled>
      </ContainerStyled>
    )
  }
}

TextHighlighterFilter.contextType = HighlighterContext;

export default TextHighlighterFilter;