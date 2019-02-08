import React, { Component } from 'react';
import { HighlighterContext } from '../../context/HighlighterContext';
import ColorListSelectMany from '../../components/ColorListSelectMany/ColorListSelectMany';
import { ContainerStyled } from '../styles';
import { TextListStyled, StyledSpan } from './styles';

class TextHighlighterFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColors: [],
      selectedTexts: {}
    };
  }

  setSelectedColors = (colors) => {
    this.setState({selectedColors: colors})
  }

  getFilteredTexts = () => {
    const texts = this.context.highlightedTexts;
    const filteresTexts = texts.filter(({color}) => {
      return this.state.selectedColors.includes(color);
    });

    return filteresTexts.map(({color, text}) => {
      return <StyledSpan color={color}>{text}</StyledSpan>
    })
  }

  render(){
    return (
      <ContainerStyled>
        <ColorListSelectMany 
          setSelectedColors={this.setSelectedColors}
        />
        <TextListStyled>
          {this.getFilteredTexts()}
        </TextListStyled>
      </ContainerStyled>
    )
  }
}

TextHighlighterFilter.contextType = HighlighterContext;

export default TextHighlighterFilter;