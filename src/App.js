import React, { Component } from 'react';
// import './App.css';
import TextHighlighter from './texthighlighter/TextHighlighter';
import TextHighlighterFilter from './texthighlighter/TextHighlighterFilter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Text Highlither.
          </p>
          <TextHighlighter>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry’s standard dummy text ever since the 1500s, when an unknown printer took
            a galley of type and scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining essentially
          </TextHighlighter>
          <TextHighlighterFilter>

          </TextHighlighterFilter>
        </header>
      </div>
    );
  }
}

export default App;
