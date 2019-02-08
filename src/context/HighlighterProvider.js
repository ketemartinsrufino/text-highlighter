
import React, { Component } from 'react';
import { HighlighterContext } from './HighlighterContext';
import { COLORS } from '../components/ColorItem/Colors';

class HighlighterProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalText: '',
      isEditionMode: true,
      colorToHighlight: COLORS.red,
      filterColors: [],
      highlightedTexts: []
    };
  }

  updateContext = (key, value) => {
    this.setState({[key]: value});
  }

  toogleEditionMode = isEditionMode => {
    this.setState({isEditionMode: isEditionMode});
  }

  addHighlightedText = (highlightedText) => {
    this.setState((state) => {
      return {
        ...state,
        highlightedTexts: [...state.highlightedTexts, highlightedText]
      }
    });
  };
  
  clearHighlightedTexts = () => {
    this.setState({highlightedTexts: []});
  };

  render() {
    const value = {
      originalText: this.state.originalText,
      isEditionMode: this.state.isEditionMode,
      colorToHighlight: this.state.colorToHighlight,
      filterColors: this.state.filterColors,
      highlightedTexts: this.state.highlightedTexts,

      updateContext: this.updateContext,
      toogleEditionMode: this.toogleEditionMode,
      addHighlightedText: this.addHighlightedText,
      clearHighlightedTexts: this.clearHighlightedTexts
    };

    return (
      <HighlighterContext.Provider value={value}>
          {this.props.children}
      </HighlighterContext.Provider>
    )
  }
} 

export default HighlighterProvider;
