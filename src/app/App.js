import React, { Component } from 'react';
import HighlighterProvider from '../context/HighlighterProvider';
import TextHighlighter from './TextHighlighter/TextHighlighter';
import TextHighlighterFilter from './TextHighlighterFilter/TextHighlighterFilter';
import { HighlighterConsumer } from '../context/HighlighterContext';

class App extends Component {
  render() {
    return (
      <HighlighterProvider>
          <div className="App">
            <h2>Text Highlither</h2>
            <TextHighlighter/>
            <h2>Text Highlither Filter</h2>
            <TextHighlighterFilter/>
          </div>
      </HighlighterProvider>
    );
  }
}

export default App;
