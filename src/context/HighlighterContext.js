import React from 'react';

export const HighlighterContext = React.createContext({
  highlightedTexts: []
});

export const HighlighterProvider = HighlighterContext.Provider;
export const HighlighterConsumer = HighlighterContext.Consumer;