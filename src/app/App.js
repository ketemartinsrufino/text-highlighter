import React, { Component } from 'react';
import { HighlighterProvider } from '../context/HighlighterContext';
import TextHighlighter from './TextHighlighter/TextHighlighter';
import TextHighlighterFilter from './TextHighlighterFilter/TextHighlighterFilter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedTexts: []
    };
  }

  addHighlightedText = (newText, color) => {
    const selectedByColor = [...this.state.highlightedTexts];
    selectedByColor.push({
      text: newText,
      color
    });
    
    this.setState((state) => {
      return {
        ...state,
        highlightedTexts: selectedByColor
      }
    });
  };

  clearHighlightedTexts = () => {
    this.setState((state) => {
      return {
        ...state,
        highlightedTexts: []
      }
    });
  };

  render() {
    const value = {
      highlightedTexts: this.state.highlightedTexts,
      addHighlightedText: this.addHighlightedText,
      clearHighlightedTexts: this.clearHighlightedTexts
    };

    return (
      <HighlighterProvider value={value}>
        <div className="App">
          <h2>Text Highlither</h2>
          <TextHighlighter/>
            {/* <textarea> */}
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry’s standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting, remaining essentially */}
            {/* </textarea> */}
          {/* </TextHighlighter> */}
          <h2>Text Highlither Filter</h2>
          <TextHighlighterFilter/>
        </div>
      </HighlighterProvider>
    );
  }
}

export default App;
